export const getMovies = async () => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/movies`)
    let movies = await response.json()
    console.log(movies)
    return movies
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
    console.log(movies)
    return movies
}