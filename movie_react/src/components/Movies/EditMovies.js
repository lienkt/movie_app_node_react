import { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom'

import styles from './FormAddMovie.module.css'

const EditMovies = () => {
    let { movieId } = useParams()
    let history = useHistory()
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

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setMovie({...movie, [name]: value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        fetch(`${process.env.REACT_APP_API_URL}/movies/${movieId}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
        .then(response => response.json())
        .then(json => {
            history.push("/movies")
        })
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
                    <span>Author: </span>
                    <input type="text" name="author" value={movie.author} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Type: </span>
                    <input type="text" name="type" value={movie.type} onChange={onChangeHandler} />
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

export default EditMovies