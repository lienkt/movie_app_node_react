import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { addUsers, getRoles } from '../../services/Users'
import Select from 'react-select'
import styles from './FormAddUser.module.css'

const FormAddUser = () => {
	let history = useHistory();
  const [roles, setRoles] = useState([])
  
  useEffect(() => {
    (async () => {
        let fetchedRoles = await getRoles()
        const options = fetchedRoles.map(r => ({
          "value" : r._id,
          "label" : r.name
        }))
        setRoles(options)
    })()
  }, [])

  const [user, setUser] = useState({
		email: "",
		password: "",
		roleId: "",
		contactId: ""
	})
  const [contact, setContact] = useState({
		birthDate: "",
		gender: "",
		addressId: ""
	})
  const [address, setAddress] = useState({
		country: "",
		area: "",
		city: "",
		street: "",
		number: ""
	})
	
  const onChangeHandler = async (e) => {
    const {name, value} = e.target
    setUser({...user, [name]: value});
  }

  const onChangeRoleHandler = async (e) => {
    setUser({...user, roleId: e.value});
  }

  const onChangeContactHandler = async (e) => {
    const {name, value} = e.target
    setContact({...contact, [name]: value});
  }

  const onChangeAddressHandler = async (e) => {
    const {name, value} = e.target
    setAddress({...address, [name]: value});
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const input = {
      user: user,
      contact: contact,
      address: address
    }
    console.log(input)
    await addUsers(input)
    history.push("/users")

  }

  return (
    <div>
      <h2 >Add a user:</h2>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.form}>
          <div>
            <span>Email: </span>
            <input type="text" name="email" value={user.email} onChange={onChangeHandler} />
          </div>
          <div>
            <span>Password: </span>
            <input type="password" name="password" value={user.password} onChange={onChangeHandler} />
          </div>
          <div className={styles.role}>
            <span>Role: </span>
            <Select options={roles} onChange={onChangeRoleHandler} />
          </div>
          <div>
            <span>Birth Date: </span>
            <input type="date" name="birthDate" value={contact.birthDate} onChange={onChangeContactHandler} />
          </div>
          <div>
            <span>Gender: </span>
            <input type="text" name="gender" value={contact.gender} onChange={onChangeContactHandler} />
          </div>
          <div>
            <span>Country: </span>
            <input type="text" name="country" value={address.country} onChange={onChangeAddressHandler} />
          </div>
          <div>
            <span>Area: </span>
            <input type="text" name="area" value={address.area} onChange={onChangeAddressHandler} />
          </div>
          <div>
            <span>City: </span>
            <input type="text" name="city" value={address.city} onChange={onChangeAddressHandler} />
          </div>
          <div>
            <span>Street: </span>
            <input type="text" name="street" value={address.street} onChange={onChangeAddressHandler} />
          </div>
          <div>
            <span>Number: </span>
            <input type="text" name="number" value={address.number} onChange={onChangeAddressHandler} />
          </div>
          <div className={styles.submit}>
            <input type='submit' value='Create' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormAddUser;