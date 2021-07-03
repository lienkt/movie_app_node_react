import { useEffect, useState } from 'react'
import { getMovies } from '../../services/Movies'
import { Link } from 'react-router-dom'

import styles from './RecommendedMovies.module.css'

const RecommendedMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async () => {
            let fetchedMovies = await getMovies()
            setMovies(fetchedMovies)
        })()

    }, [])
	
    return (
        <div>
            <h2 className={styles.title}>Recommended Movies</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id} className={styles.movie}>
                        <div>
                            <img src={movie.thumbnail} className={styles.thumbnail} alt="thumbnail" />
                        </div>
                        <div>
                            Title: {movie.title};
                            Movie Director: {movie.movieDirector};
                            Type: {movie.type};
                            Release Date: {movie.releaseDate};
                            Rating: {movie.rating}
                            <Link to={`/movies/${movie._id}/watch`} className={styles.watch}> watch</Link>&nbsp;
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RecommendedMovies;