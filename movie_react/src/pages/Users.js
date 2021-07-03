import { useHistory } from 'react-router-dom'
import ListUsers from '../components/Users/ListUsers'

export default () => {
    let history = useHistory();

    const handleClick = (e) => {
        history.push("/");
    }

    return (<>
            <ListUsers />
            <button onClick={handleClick}>Home Page</button>
        </>
    )
}