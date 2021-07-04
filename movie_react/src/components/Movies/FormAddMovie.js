import { useState } from 'react'
import { useHistory } from "react-router-dom";
import { addMovies } from '../../services/Movies'

import styles from './FormAddMovie.module.css'

const FormAddMovie = () => {
	let history = useHistory();
  const [movie, setMovie] = useState({
		title: "",
		movieDirector: "",
		category: "",
		releaseDate: "",
		thumbnail: "",
		url: ""
	})
	
  const onChangeHandler = async (e) => {
    const {name, value} = e.target
    setMovie({...movie, [name]: value});
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await addMovies(movie)
    history.push("/movies")
  }

  return (
    <div>
      <h2 >Add a movie:</h2>
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
            <input type='submit' value='Create' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormAddMovie;