export const getRatingsByMovieId = async (movieId) => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/ratings/${movieId}`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let result = await response.json()
    return result
}

export const addRating = async (rating) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/ratings`,
	{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(rating)
	})
    let result = await response.json()
    return result
}

export const deleteRatingByMovieId = async (movieId) => {
	await fetch(`${process.env.REACT_APP_API_URL}/ratings/${movieId}`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
}