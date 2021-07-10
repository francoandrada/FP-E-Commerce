import { useState } from "react"

import axios from 'axios'
import { useHistory } from "react-router-dom";
import styles from './Register.module.css'


function Register() {
    const history = useHistory();
    const [User, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        address: '',
        addressNumber: '',
        postalCode: '',
        phone: ''
    })
    const handleChange = (event) => {
        setUser({ ...User, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (User.name === "" || User.surname === "" || User.email === "" || User.password === "" || User.address === '' || User.addressNumber === '' || User.postalCode === '' || User.phone === '') {
            return alert("You must complete all the fields")
        } else {
            await axios.post('http://localhost:3001/users', {
                name: User.name,
                surname: User.surname,
                email: User.email,
                password: User.password,
                address: User.address,
                addressNumber: User.addressNumber,
                postalCode: User.postalCode,
                phone: User.phone,
            })
        }
        history.push('/')

    }
    return (
        <div id={styles.regForm}>
            <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label>Name </label>
                <input type="text" name="name" value={User.name} onChange={handleChange} className="form-control" id="inputEmail4"/>
                </div>
                <div className="form-group col-md-6">
                <label>Surname</label>
                <input type="text" name="surname" value={User.surname} onChange={handleChange} className="form-control" id="inputPassword4" />
                </div>
            </div>
            <div className='form-group'>
                <label>email</label>
                <input type="text" name="email" value={User.email} onChange={handleChange} className="form-control" id="inputPassword4" />
            </div>
            <div className='form-group'>
                <label>password</label>
                <input type="text" name="password" value={User.password} onChange={handleChange} className="form-control" id="inputPassword4" />
            </div>
            <div>
            <div className='form-group'>
                <label>address</label>
                <input type="text" name="address" value={User.address} onChange={handleChange} className="form-control" id="inputPassword4" />
            </div>
            <div className='form-group'>
                <label>addressNumber</label>
                <input type="text" name="addressNumber" value={User.addressNumber} onChange={handleChange} className="form-control" id="inputPassword4" />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label>postalCode</label>
                <input type="text" name="postalCode" value={User.postalCode} onChange={handleChange} className="form-control" id="inputEmail4"/>
                </div>
                <div className="form-group col-md-6">
                <label>phone</label>
                <input type="text" name="phone" value={User.phone} onChange={handleChange} className="form-control" id="inputEmail4"/>
                </div>
            </div>
                <button type="submit" className="btn btn-primary"> Register </button>
            </div>
            </form>
        <div/>    

    </div>
    
    )
}
export default Register;