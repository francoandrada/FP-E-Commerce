import { useState } from "react"
import Swal from 'sweetalert2';
import axios from 'axios'
import { useHistory } from "react-router-dom";

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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must complete all the fields'
              })
              
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
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'The user was succesfully created',
            showConfirmButton: false,
            timer: 1500
          })
        history.push('/')
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
                <input type="text" name="addressNumber" value={User.addressNumber} onChange={handleChange} />
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