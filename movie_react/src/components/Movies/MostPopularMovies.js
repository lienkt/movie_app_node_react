import { useEffect, useState } from 'react'
import { getMovieById } from '../../services/Movies'
import { Link } from 'react-router-dom'
import styles from './RecommendedMovies.module.css'
import { getSeenMovies } from '../../services/SeenMovies'

const MostPopularMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async () => {
             // Get all seen movies:
            let fetchedMovies = await getSeenMovies()
            let movieListCount = []
            for(let i = 0; i < fetchedMovies.length; i++) {
                // Count by movieId:
                let found = 1
                for(let j = 0; j < movieListCount.length; j++) {
                    if (movieListCount[j].movieId === fetchedMovies[i].movieId) {
                        movieListCount[j].count += 1
                        found = 0
                    }
                }
                if (found) {
                    let m = {
                        movieId: fetchedMovies[i].movieId,
                        count: 1
                    }
                    movieListCount.push(m)
                }
            }
            movieListCount.sort((a,b) => (a.count > b.count) ? -1 : ((b.count > a.count) ? 1 : 0))
            let movieList = []
            for(let i = 0; i < movieListCount.length; i++) {
                // Get movie detail by movieId:
                let m = await getMovieById(movieListCount[i].movieId)
                console.log(m)
                if (m) {
                    movieList.push(m)
                }
            }
            setMovies(movieList)
        })()
    }, [])
	
    const DateTimeFormat = (timestamp) => {
        var date = new Date(timestamp);
        return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
    }

    return (
        <div>
            <h2 className={styles.title}>Popular Movies</h2>
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
export default MostPopularMovies;