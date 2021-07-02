import { useHistory } from 'react-router-dom'
import EditMovies from '../components/Movies/EditMovies'

export default () => {
    let history = useHistory();

    const handleClick = (e) => {
        history.push("/");
    }

    return (<>
            <EditMovies />
        </>
    )
}