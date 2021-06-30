import { useEffect, useState } from 'react'
import styles from './Calculate.module.css'

const Calculate = () => {
    const [total, setTotal] = useState(0)
    const [add, setAdd] = useState(0)
    const [show, setShow] = useState(false)

    const myChangeHandler = async (e) => {
      setAdd(e.target.value);
    }

    const onSubmit = async (e) => {
      e.preventDefault();
      console.log(total)
      setTotal(total + parseInt(add));
      setShow(true);
    }
  
    return (
      <div>
        <form onSubmit={onSubmit}> 
          <p>Enter the number to add into total:</p>
          <input
            type="number"
            onChange={myChangeHandler}
          />
          <input
            type='submit'
            value='Add'
          />
        </form>
        <h1 id="total" className={`${styles.title}`}>
          Total: {total}
        </h1>
      </div>
    )
}

export default Calculate