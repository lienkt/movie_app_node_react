import { useEffect, useState } from 'react'
import { getSeenMovieByUserId } from '../../services/SeenMovies'
import { getMovieById } from '../../services/Movies'
import { useCookies } from 'react-cookie'

import { Link } from 'react-router-dom'

import styles from './RecommendedMovies.module.css'

const LastSeenMovies = () => {
    const [movies, setMovies] = useState([])
    const [cookies] = useCookies(['user'])

    useEffect(() => {
        const userId = cookies.UserId ? cookies.UserId : ""
        if (userId.length !== 0) {
            (async () => {
                // Get seen movie by useId:
                let fetchedMovies = await getSeenMovieByUserId(userId)
                let movieList = []
                for(let i = 0; i < fetchedMovies.length; i++) {
                    const found = movieList.find(e => e._id === fetchedMovies[i].movieId)
                    if (found) continue
                    // Get movie detail by movieId:
                    let m = await getMovieById(fetchedMovies[i].movieId)
                    movieList.push(m)
                }
                setMovies(movieList)
            })()
        }

    }, [cookies])
	
    const DateTimeFormat = (timestamp) => {
        var date = new Date(timestamp);
        return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
    }

    return (
        <div>
            <h2 className={styles.title}>Last Seen Movies</h2>
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
export default LastSeenMovies;