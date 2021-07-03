import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getMovieById } from '../../services/Movies'

import styles from './WatchMovie.module.css'

const WatchMovie = () => {
    let { movieId } = useParams()
    const [movie, setMovie] = useState({})

    console.log(movieId)

    useEffect(() => {
        (async () => {
            let result = await getMovieById(movieId)
            setMovie(result)
        })()

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
                Category: {movie.category};
                Release Date: {movie.releaseDate};
                Rating: {movie.rating}
            </div>
        </div>
        <p><Link to='/'>Back to the list movies</Link></p>
    </section>
}

export default WatchMovie