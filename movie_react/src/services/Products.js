export const getProducts = async () => {
    // let response = await fetch('http://localhost:5000/products')
	let response = await fetch(`${process.env.REACT_APP_API_URL}/products`)
    let products = await response.json()
    console.log(products)
    return products
}

export const addProducts = async (product) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/products`,
	{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(product)
	})
    let products = await response.json()
    console.log(products)
    return products
}