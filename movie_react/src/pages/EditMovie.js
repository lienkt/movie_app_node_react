import { useHistory } from 'react-router-dom'
import FormEditMovie from '../components/Movies/FormEditMovie'

export default () => {
    let history = useHistory();

    const handleClick = (e) => {
        history.push("/");
    }

    return (<>
            <FormEditMovie />
        </>
    )
}