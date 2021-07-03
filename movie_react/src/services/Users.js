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

export const getRoles = async () => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/roles`)
    let roles = await response.json()
    return roles
}

export const getRoleById = async (roleId) => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/roles/${roleId}`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let result = await response.json()
    return result
}

export const getAddressById = async (addressId) => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/addresses/${addressId}`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let result = await response.json()
    return result
}

export const getContactById = async (contactId) => {
	let response = await fetch(`${process.env.REACT_APP_API_URL}/contacts/${contactId}`, {
		method: 'GET',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		}
	})
    let result = await response.json()
    return result
}

export const addAddress = async (address) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/addresses`,
	{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(address)
	})
    let result = await response.json()
    return result
}

export const addContact = async (contact) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/contacts`,
	{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(contact)
	})
    let result = await response.json()
    return result
}

export const addUsers = async (input) => {
	const addressId = addAddress(input.address)._id
	input.contact.addressId = addressId
	const contactId = addContact(input.contact)._id
	input.user.contactId = contactId
	
    let response = await fetch(`${process.env.REACT_APP_API_URL}/users`,
	{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(input.user)
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