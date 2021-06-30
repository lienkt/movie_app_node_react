import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { addProducts } from '../../services/Products'

const FormAddProduct = () => {
	let history = useHistory();
    const [product, setProduct] = useState({
		name: "",
		price: 0
	})
	
    const onChangeHandler = async (e) => {
		const {name, value} = e.target
      setProduct({...product, [name]: value});
    }
	
    const onSubmitHandler = async (e) => {
      e.preventDefault();
		await addProducts(product)
		history.push("/products")

    }

    return (
        <div>
            <h2 >Add a product:</h2>
			<form onSubmit={onSubmitHandler}> 
			  <input type="text" name="name" value={product.name} onChange={onChangeHandler} />
			  <input type="number" name="price" value={product.proce} onChange={onChangeHandler} />
			  <input type='submit' value='Create' />
			</form>
        </div>
    )
}

export default FormAddProduct;