import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

import styles from './FormAddMovie.module.css'

const WatchMovies = () => {
    let { movieId } = useParams()
    const [movie, setMovie] = useState({})

    console.log(movieId)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/movies/${movieId}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(movie => {
            setMovie(movie)
        })
    }, [movieId])

    return <section>
        <h1>{movie.name}</h1>
        <div className={styles.form}>
            <div className={styles.url}>
                <video width="750" height="500" controls >
                    <source src="/video/mov_bbb.mp4" type="video/mp4"/>
                </video>
            </div>
            <div>
                Title: {movie.title};
                Movie Director: {movie.movieDirector};
                Type: {movie.type};
                Release Date: {movie.releaseDate};
                Rating: {movie.rating}
            </div>
        </div>
        <p><Link to='/'>Back to the list movies</Link></p>
    </section>
}

export default WatchMovies