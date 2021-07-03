export const getUsers = async () => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/users`)
    let users = await response.json()
    return users
}

export const getUserById = async (userId) => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let user = await response.json()
    return user
}

export const addUsers = async (user) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/users`,
	{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
    let users = await response.json()
    return users
}

export const editUsers = async (user) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/users/${user._id}`,
	{
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
    let users = await response.json()
    return users
}

export const deleteUser = async (userId) => {
	await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
}