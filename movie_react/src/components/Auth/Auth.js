import { useState, useEffect } from "react";
import { login } from '../../services/Auth'
import styles from './Auth.module.css'
import { useCookies } from 'react-cookie';
import { getRoleById } from "../../services/Users";

const Auth = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const [user, setUser] = useState({
      email: "",
      password: ""
    })
    const [msg, setMsg] = useState('')
    const [show, setShow] = useState(false)

    useEffect(() => {
      if (!cookies.UserId) {
        setMsg("Welcome " + cookies.Email + " to our system!");
        setShow(true);
      }
    }, [])

    const onChangeHandler = async (e) => {
      const {name, value} = e.target
      setUser({...user, [name]: value});
    }
    
    const logout = async (e) => {
      setCookie('Email', null, { path: '/' });
      setCookie('UserId', null, { path: '/' });
      setCookie('Role', null, { path: '/' });
      setMsg('');
      setShow(false);
    }

    const onSubmit = async (e) => {
      e.preventDefault();
      (async () => {
        const result = await login(user)
        if (result.msg) {
          setMsg(result.msg);
        } else {
          setCookie('Email', result.email, { path: '/' });
          setCookie('UserId', result._id, { path: '/' });
          const role = await getRoleById(result.roleId)
          setCookie('Role', role.name, { path: '/' });
          setMsg("Welcome " + cookies.Email + " to our system!");
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
          { show && <div className={styles.submit}>
            <button type="button" onClick={logout}>Logout</button>
          </div>} 
        </h1>
      </div>
    )
}

export default Auth