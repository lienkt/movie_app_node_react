import { useState, useEffect } from "react";
import styles from './Hello.module.css'

const Hello = () => {
    const [username, setName] = useState("")
    const [show, setShow] = useState(false)
    console.log(show)

    const myChangeHandler = async (e) => {
      setName(e.target.value);
    }
    const onSubmit = async (e) => {
      e.preventDefault();
      setShow(true);
      // if (username == "" ) {
      //   document.querySelector('#name').classList.add("deactive");
      // } else {
      //   document.querySelector('#name').classList.remove("deactive");
      // }
    }
  
    return (
      <div className={styles.hello}>
        <img src="/img/bg.jpg" className={styles.bg} alt="picture" />
        {!show && <form onSubmit={onSubmit}> 
          <p>Enter your name:</p>
          <input
            type='text'
            onChange={myChangeHandler}
          />
          <input
            type='submit'
          />
        </form>}
        <h1 id="name" className={`${styles.title}`}>
          { show && `Hello ${username}!`} 
        </h1>
      </div>
    )
}

export default Hello