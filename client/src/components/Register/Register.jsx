
import { useState } from "react"
import Swal from 'sweetalert2';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import styles from './Register.module.css'
import ButtonRed from '../StyledComponents/ButtonRed'



function Register() {

    const history = useHistory();
    const [User, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        address: '',
        addressNumber: undefined,
        postalCode: '',
        phone: ''
    })
    const handleChange = (event) => {
        setUser({ ...User, [event.target.name]: event.target.value })
        console.log(User)
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

		<div className={styles.registerFormContainer}>
            <div id={styles.regForm}>
			<form onSubmit={handleSubmit}>
				<div className='form-row' id={styles.row}>
					<div className='form-group col-md-5' id={styles.input}>
						<label>Email</label>
						<input
							type='text'
							name='email'
							value={User.email}
							onChange={handleChange}
							className='form-control'
							id='inputPassword4'
						/>
					</div>
					<div className='form-group col-md-5' id={styles.input}>
						<label>Password</label>
						<input
							type='text'
							name='password'
							value={User.password}
							onChange={handleChange}
							className='form-control'
							id='inputPassword4'
						/>
					</div>
				</div>
				<div className='form-row' id={styles.row}>
					<div className='form-group col-md-4' id={styles.input}>
						<label>Name </label>
						<input
							type='text'
							name='name'
							value={User.name}
							onChange={handleChange}
							className='form-control'
							id='inputEmail4'
						/>
					</div>
					<div className='form-group col-md-4' id={styles.input}>
						<label>Surname</label>
						<input
							type='text'
							name='surname'
							value={User.surname}
							onChange={handleChange}
							className='form-control'
							id='inputPassword4'
						/>
					</div>
					<div className='form-group col-md-2 ' id={styles.input}>
						<label>Phone</label>
						<input
							type='text'
							name='phone'
							value={User.phone}
							onChange={handleChange}
							className='form-control'
							id='inputEmail4'
						/>
					</div>
				</div>
				<div>
					<div className='form-row' id={styles.row}>
						<div className='form-group col-md-4 ' id={styles.input}>
							<label>Address Street</label>
							<input
								type='text'
								name='address'
								value={User.address}
								onChange={handleChange}
								className='form-control'
								id='inputPassword4'
							/>
						</div>
						<div className='form-group col-md-3' id={styles.input}>
							<label>Address Number</label>
							<input
								type='text'
								name='addressNumber'
								value={User.addressNumber}
								onChange={handleChange}
								className='form-control'
								id='inputPassword4'
							/>
						</div>
						<div className='form-group col-md-3 ' id={styles.input}>
							<label>Postal Code</label>
							<input
								type='text'
								name='postalCode'
								value={User.postalCode}
								onChange={handleChange}
								className='form-control'
								id='inputEmail4'
							/>
						</div>
					</div>
					<div className={styles.registerButtonRow}>
						<ButtonRed type='submit'>Register</ButtonRed>
					</div>
					
				</div>
			</form>
			<div />
		</div> 
	</div>
    )}
export default Register;