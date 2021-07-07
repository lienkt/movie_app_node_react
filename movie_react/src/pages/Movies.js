import { useHistory } from 'react-router-dom'
import ListMovies from '../components/Movies/ListMovies'

const Movies = () => {
    let history = useHistory();

    const handleClick = (e) => {
        history.push("/");
    }

    return (<>
            <ListMovies />
            <button onClick={handleClick}>Home Page</button>
        </>
    )
}

export default Movies