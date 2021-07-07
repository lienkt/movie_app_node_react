import { deleteSeenByMovieId } from './SeenMovies'
import { deleteRatingByMovieId } from './Ratings'

export const getMovies = async () => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/movies`)
    let movies = await response.json()
    return movies
}

export const getMovieById = async (movieId) => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/movies/${movieId}`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let movie = await response.json()
    return movie
}

export const addMovies = async (movie) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/movies`,
	{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(movie)
	})
    let movies = await response.json()
    return movies
}

export const editMovies = async (movie) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/movies/${movie._id}`,
	{
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(movie)
	})
    let movies = await response.json()
    return movies
}

export const deleteMovie = async (movieId) => {
	// Delete seen and rating:
	deleteSeenByMovieId(movieId)
	deleteRatingByMovieId(movieId)
	await fetch(`${process.env.REACT_APP_API_URL}/movies/${movieId}`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
}