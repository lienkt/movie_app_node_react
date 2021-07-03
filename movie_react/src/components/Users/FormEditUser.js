import { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom'
import { getUserById, editUsers } from '../../services/Users'

import styles from './FormAddUser.module.css'

const FormEditUsers = () => {
    let { userId } = useParams()
    let history = useHistory()
    const [user, setUser] = useState({})

    console.log(userId)

    useEffect(() => {
        (async () => {
            let result = await getUserById(userId)
            setUser(result)
        })()

    }, [userId])
	
    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await editUsers(user)
        history.push("/users")
    }

    return <section>
        <h1>{user.name}</h1>
        <form onSubmit={onSubmitHandler}>
            <div className={styles.form}>
                <div>
                    <span>Title: </span>
                    <input type="text" name="title" value={user.title} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>User Director: </span>
                    <input type="text" name="userDirector" value={user.userDirector} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Category: </span>
                    <input type="text" name="category" value={user.category} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Release Date: </span>
                    <input type="date" name="releaseDate" value={user.releaseDate} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>Thumbnail url: </span>
                    <input type="text" name="thumbnail" value={user.thumbnail} onChange={onChangeHandler} />
                </div>
                <div>
                    <span>User url: </span>
                    <input type="text" name="url" value={user.url} onChange={onChangeHandler} />
                </div>
                <div className={styles.submit}>
                    <input type='submit' value='Update' />
                </div>
            </div>
        </form>
        <p><Link to='/users'>Return to the list</Link></p>
    </section>
}

export default FormEditUsers