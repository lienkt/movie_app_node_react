
export const getSeenMovies = async () => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/seenMovies`)
    let users = await response.json()
    return users
}

export const getSeenMovieByMovieId = async (movieId) => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/seenMovies/${movieId}`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let result = await response.json()
    return result
}

export const getSeenMovieByUserId = async (userId) => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/historyMovies/${userId}`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let result = await response.json()
    return result
}

export const addSeenMovies = async (seenMovie) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/seenMovies`,
	{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(seenMovie)
	})
    let result = await response.json()
    return result
}

export const deleteSeenByMovieId = async (movieId) => {
	await fetch(`${process.env.REACT_APP_API_URL}/seenMovies/${movieId}`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
}