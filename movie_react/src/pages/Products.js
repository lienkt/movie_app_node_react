import { useHistory } from 'react-router-dom'
import ListProducts from '../components/Products/ListProducts'

export default () => {
    let history = useHistory();

    const handleClick = (e) => {
        history.push("/");
    }

    return (<>
            <ListProducts />
            <button onClick={handleClick}>Home Page</button>
        </>
    )
}