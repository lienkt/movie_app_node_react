import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getMovieById } from '../../services/Movies'
import { addSeenMovies, getSeenMovieByMovieId } from '../../services/SeenMovies'
import { useCookies } from 'react-cookie';
import { getRatingsByMovieId } from '../../services/Ratings'

import styles from './WatchMovie.module.css'

const WatchMovie = () => {
    let { movieId } = useParams()
    const [movie, setMovie] = useState({})
    const [seen, setSeenMovie] = useState(0)
    const [cookies] = useCookies(['user'])
    const [ratingList, setRatings] = useState([])

    useEffect(() => {
        (async () => {
            let result = await getMovieById(movieId)
            setMovie(result)
            await addSeenMovies({
                userId: cookies.UserId,
                movieId: movieId
            })
            // Get seen number:
            let seenMovie = await getSeenMovieByMovieId(movieId)
            setSeenMovie(seenMovie.length)
            
            // Get ratings by MovieId:
            let ratings = await getRatingsByMovieId(movieId)
            setRatings(ratings)
        })()

    }, [cookies, movieId, setRatings])

    const DateTimeFormat = (timestamp) => {
        var date = new Date(timestamp);
        return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
    }

    return <section>
        <h1>{movie.name}</h1>
        <div className={styles.form}>
            <div className={styles.title}>{movie.title}</div>
            <div className={styles.video}>
                <video width="550" height="300" controls >
                    <source src="/video/mov_bbb.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className={styles.infos}>
                <div className={styles.info}><b>Movie Director: </b>{movie.movieDirector}</div>
                <div className={styles.info}><b>Category: </b>{movie.category}</div>
                <div className={styles.info}><b>Release Date: </b>{DateTimeFormat(movie.releaseDate)}</div>
                <div className={styles.info}><b>Seen: </b>{seen}</div>
                <div className={styles.info}><b>Rating: </b>{movie.rating ? movie.rating : 0}/5</div>
            </div>
        </div>
        <p><Link to={`/movies/${movie._id}/watch/rate`} className={styles.rate}>Rate</Link>&nbsp;</p>
        
        {ratingList.map((rating) =>
            <div className={styles.ratings}>
                <div className={styles.info}><b>Rating: </b>{rating.rating} - </div>
                <div className={styles.info}><b>{rating.commentTitle} - </b>{rating.commentContent}</div>
            </div>
        )}
        <p><Link to='/' className={styles.back}>Back to the list movies</Link></p>
    </section>
}

export default WatchMovie