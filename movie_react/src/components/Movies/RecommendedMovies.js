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
    
    const DateTimeFormat = (timestamp) => {
        var date = new Date(timestamp);
        return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
    }

    return (
        <div>
            <h2 className={styles.title}>Recommended Movies</h2>
            <div>
                {movies.map((movie) => (
                    <div key={movie._id} className={styles.movie}>
                        <div>
                            <img src={movie.thumbnail} className={styles.thumbnail} alt="thumbnail" />
                        </div>
                        <div>
                            <div className={styles.name}><Link to={`/movies/${movie._id}/watch`} className={styles.watch}>{movie.title}</Link>&nbsp;</div>
                            <div className={styles.info}>Movie Director: {movie.movieDirector}</div>
                            <div className={styles.info}>Category: {movie.category}</div>
                            <div className={styles.info}>Release Date: {DateTimeFormat(movie.releaseDate)}</div>
                            <div className={styles.info}>Rating: {movie.rating ? movie.rating : 0}/5</div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default RecommendedMovies;