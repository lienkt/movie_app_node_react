import { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../../services/Users'
import { useHistory, Link } from 'react-router-dom'

import styles from './ListUsers.module.css'
import FormAddUser from './FormAddUser'

const ListUsers = () => {
    const [users, setUsers] = useState([])
    let history = useHistory();

    useEffect(() => {
        (async () => {
            let fetchedUsers = await getUsers()
            setUsers(fetchedUsers)
        })()
    }, [])
	
    const onClickHandler = (userId) => {
        (async () => {
            await deleteUser(userId)
            history.push("/users")
        })()
    }

    return (
        <div>
            <FormAddUser />
            <h2 className={styles.title}>List of users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <div>
                            Title: {user.title};
                            user Director: {user.userDirector};
                            Category: {user.category};
                            Release Date: {user.releaseDate};
                            Rating: {user.rating}
                            <Link to={`/users/${user._id}/edit`} className={styles.edit}> edit</Link>&nbsp;
                            <span className={styles.delete} onClick={(e) => onClickHandler(user._id)}> delete</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ListUsers;