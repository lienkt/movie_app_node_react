import { useHistory } from 'react-router-dom'
import FormEditUser from '../components/Users/FormEditUser'

export default () => {
    let history = useHistory();

    const handleClick = (e) => {
        history.push("/");
    }

    return (<>
            <FormEditUser />
        </>
    )
}