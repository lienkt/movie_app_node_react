import { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getMovieById, editMovies } from '../../services/Movies'
import { getRatingsByMovieId, addRating } from '../../services/Ratings'
import { useCookies } from 'react-cookie';
import styles from './FormAddMovie.module.css'

const Rating = () => {
    const [cookies] = useCookies(['user'])
    let { movieId } = useParams()
    let history = useHistory()
    const [rating, setRating] = useState({
        rating: "",
        commentTitle: "",
        commentContent: "",
        userId: cookies.UserId,
        movieId: movieId
    })
    const [movie, setMovie] = useState({})

    useEffect(() => {
        (async () => {
            let result = await getMovieById(movieId)
            setMovie(result)
        })()

    }, [movieId])

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setRating({...rating, [name]: value})
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        await addRating(rating)
        // Get ratings by MovieId:
        let ratingList = await getRatingsByMovieId(movieId)
    
        let sumRating = 0
        for(let i = 0; i < ratingList.length; i++) {
            sumRating += ratingList[i].rating
        }
        // Calculate rating:
        movie.rating = parseFloat(sumRating/ratingList.length).toFixed(2)
        await editMovies(movie)
        history.push("/movies/"+movie._id+"/watch")
    }

    return <section>
        <h1>{movie.name}</h1>
        <form onSubmit={onSubmitHandler}>
            <div className={styles.form}>
                <div>Title: {movie.title}</div>
                <div>
                    <span>Rating: </span>
                    <input type="number" min="1" max="5" name="rating" value={rating.rating} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Comment Title: </span>
                    <input type="text" name="commentTitle" value={rating.commentTitle} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Comment Content: </span>
                    <input type="text" name="commentContent" value={rating.commentContent} onChange={onChangeHandler} />
                </div>
                <div className={styles.submit}>
                    <input type='submit' value='Submit' />
                </div>
            </div>
        </form>
        <p><Link to={`/movies/${movie._id}/watch`}>Return to the movie</Link></p>
    </section>
}

export default Rating