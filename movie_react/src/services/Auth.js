export const login = async (user) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/login`,
	{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
    let result = await response.json()
    return result
}
