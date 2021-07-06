import { useState } from "react"

import axios from 'axios'

function Register() {
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
        if (User.name === "" || User.surname === "" || User.email === "" || User.password === "" || User.address === '' || User.addressNumbre === '' || User.postalCode === '' || User.phone === '') {
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

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={User.name} onChange={handleChange} />
                <label>Surname</label>
                <input type="text" name="surname" value={User.surname} onChange={handleChange} />
                <label>email</label>
                <input type="text" name="email" value={User.email} onChange={handleChange} />
                <label>password</label>
                <input type="text" name="password" value={User.password} onChange={handleChange} />
                <label>address</label>
                <input type="text" name="address" value={User.address} onChange={handleChange} />
                <label>addressNumber</label>
                <input type="text" name="addressNumbre" value={User.addressNumbre} onChange={handleChange} />
                <label>postalCode</label>
                <input type="text" name="postalCode" value={User.postalCode} onChange={handleChange} />
                <label>phone</label>
                <input type="text" name="phone" value={User.phone} onChange={handleChange} />
                <button type="submit"> Register </button>
            </form>
        </div>
    )
}
export default Register;