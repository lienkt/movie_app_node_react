import { useState } from "react";
import { login } from '../../services/Auth'
import styles from './Auth.module.css'

const Auth = () => {
    const [user, setUser] = useState({
      email: "",
      password: ""
    })
    const [msg, setMsg] = useState('')
    const [show, setShow] = useState(false)
    console.log(show)

    const onChangeHandler = async (e) => {
      const {name, value} = e.target
      setUser({...user, [name]: value});
    }

    const onSubmit = async (e) => {
      e.preventDefault();
      (async () => {
        const result = await login(user)
        if (result.msg) {
          setMsg(result.msg);
        } else {
          setMsg("Welcome to our system!");
          setShow(true);
        }
      })()
    }
  
    return (
      <div className={styles.hello}>
        <img src="/img/bg.jpg" className={styles.bg} alt="picture" />
        {!show && <form onSubmit={onSubmit}> 
          <div>
            <span>Email: </span>
            <input type="text" name="email" value={user.email} onChange={onChangeHandler} />
          </div>
          <div>
            <span>Password: </span>
            <input type="password" name="password" value={user.password} onChange={onChangeHandler} />
          </div>
          <div className={styles.submit}>
            <input type='submit' value='Login' />
          </div>
          <h1 id="name" className={`${styles.error}`}>
            {msg} 
          </h1>
        </form>}
        <h1 id="name" className={`${styles.title}`}>
          { show && msg} 
        </h1>
      </div>
    )
}

export default Auth