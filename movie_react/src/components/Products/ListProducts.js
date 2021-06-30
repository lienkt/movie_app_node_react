import { useEffect, useState } from 'react'
import { getProducts } from '../../services/Products'
import { useHistory, Link } from 'react-router-dom'

import styles from './ListProducts.module.css'
import FormAddProduct from './FormAddProduct'

const ListProducts = () => {
    const [products, setProducts] = useState([])
    let history = useHistory();

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}/products`)
    //     .then(response => response.json())
    //     .then(json => {
    //         setProducts(json)
    //     })
    // }, [])

    useEffect(() => {
        (async () => {
            let fetchedProducts = await getProducts()
            setProducts(fetchedProducts)
        })()

    }, [])
	
    const onClickHandler = (productId) => {
        console.log('onClick !' + productId)

        fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        history.push("/products")
    }

	
    return (
        <div>
            <FormAddProduct />
            <h2 className={styles.title}>List of products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}/edit`}>{product.name}: {product.price}&euro;</Link>&nbsp;
                        <span className={styles.delete} onClick={(e) => onClickHandler(product._id)}>X</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ListProducts;