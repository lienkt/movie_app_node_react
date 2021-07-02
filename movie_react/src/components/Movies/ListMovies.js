import { useEffect, useState } from 'react'
import { getMovies } from '../../services/Movies'
import { useHistory, Link } from 'react-router-dom'

import styles from './ListMovies.module.css'
import FormAddMovie from './FormAddMovie'

const ListMovies = () => {
    const [movies, setMovies] = useState([])
    let history = useHistory();

    useEffect(() => {
        (async () => {
            let fetchedMovies = await getMovies()
            setMovies(fetchedMovies)
        })()

    }, [])
	
    const onClickHandler = (movieId) => {
        console.log('onClick !' + movieId)

        fetch(`${process.env.REACT_APP_API_URL}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        history.push("/movies")
    }

	
    return (
        <div>
            <FormAddMovie />
            <h2 className={styles.title}>List of movies</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id}>
                        <Link to={`/movies/${movie._id}/edit`}>{movie.title}: {movie.author};</Link>&nbsp;
                        <span className={styles.delete} onClick={(e) => onClickHandler(movie._id)}>X</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ListMovies;