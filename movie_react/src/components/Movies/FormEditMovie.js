import { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom'
import { getMovieById, editMovies } from '../../services/Movies'

import styles from './FormAddMovie.module.css'

const FormEditMovie = () => {
    let { movieId } = useParams()
    let history = useHistory()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        (async () => {
            let result = await getMovieById(movieId)
            setMovie(result)
        })()

    }, [movieId])
	
    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setMovie({...movie, [name]: value})
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await editMovies(movie)
        history.push("/movies")
    }

    return <section>
        <h1>{movie.name}</h1>
        <form onSubmit={onSubmitHandler}>
            <div className={styles.form}>
                <div>
                    <span>Title: </span>
                    <input type="text" name="title" value={movie.title} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Movie Director: </span>
                    <input type="text" name="movieDirector" value={movie.movieDirector} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Category: </span>
                    <input type="text" name="category" value={movie.category} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Release Date: </span>
                    <input type="date" name="releaseDate" value={movie.releaseDate} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Thumbnail url: </span>
                    <input type="text" name="thumbnail" value={movie.thumbnail} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Movie url: </span>
                    <input type="text" name="url" value={movie.url} onChange={onChangeHandler} />
                </div>
                <div className={styles.submit}>
                    <input type='submit' value='Update' />
                </div>
            </div>
        </form>
        <p><Link to='/movies'>Return to the list</Link></p>
    </section>
}

export default FormEditMovie