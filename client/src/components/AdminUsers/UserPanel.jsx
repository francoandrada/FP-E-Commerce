import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styles from '../Register/Register.module.css';
import ButtonRed from '../StyledComponents/ButtonRed';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Error from '../StyledComponents/ErrorMessages';
import Div from '../StyledComponents/Validation';
function UserPanel() {
	const history = useHistory();

    const [user,setUser]=useState("nico")

	const [hola, setHola] = useState([])
	const formik = useFormik({
		initialValues: {
			email: 'nicolas',
			password: '',
			name: '',
			surname: '',
			name: '',
			phone: '',
			address: '',
			addressNumber: '',
			postalCode: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalid email address')
				.required('Enter an email'),
			password: Yup.string()
				.required('Please Enter your password')
				.matches(
					/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
					'Must contain 6 Characters, one uppercase, one lowercase and one number'
				),
			name: Yup.string().required('Enter a name'),
			surname: Yup.string().required('Enter a surname'),
			name: Yup.string().required('Enter a name'),
			phone: Yup.number().required('Enter a valid phone number'),
			address: Yup.string().required('Enter an address'),
			addressNumber: Yup.string().required('Enter an address number'),
			postalCode: Yup.number().required('Enter a postal code'),
		}),
		onSubmit: async (values) => {
			console.log(values);
			try {
				await axios.post('http://localhost:3001/users', {
					name: values.name,
					surname: values.surname,
					email: values.email,
					password: values.password,
					address: values.address,
					addressNumber: values.addressNumber,
					postalCode: values.postalCode,
					phone: values.phone,
				});

				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'The user was succesfully created',
					showConfirmButton: false,
					timer: 1500,
				});
				history.push('/');
			} catch (error) {
				console.log(error.response.data.msg);
			setHola(error.response.data.msg)
			}
		},
	});

	return (
		<div className={styles.registerFormContainer}>
			<div id={styles.regForm}>
			{hola.length > 0? <Error>{hola}</Error> : null}
				<form onSubmit={formik.handleSubmit}>
					<div className='form-row' id={styles.row}>
						<div className='form-group col-md-5' id={styles.input}>
			
							<label>Email</label>
						
							<input
								type='email'
								class='form-control'
								id='email'
								value={user}
								name='email'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
								{formik.touched.email && formik.errors.email ? (
								<Div>{formik.errors.email}</Div>
							) : null}
						</div>

						<div className='form-group col-md-5' id={styles.input}>
					
							<label>Password</label>
						
							<input
								type='password'
								name='password'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className='form-control'
							/>
							{formik.touched.password && formik.errors.password ? (
								<Div>{formik.errors.password}</Div>
							) : null}
						</div>
					</div>
					<div className='form-row' id={styles.row}>
						<div className='form-group col-md-4' id={styles.input}>
							<label>Name </label>
							<input
								type='text'
								name='name'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className='form-control'
							/>
							{formik.touched.name && formik.errors.name ? (
								<Div>{formik.errors.name}</Div>
							) : null}
						</div>
						<div className='form-group col-md-4' id={styles.input}>
							<label>Surname</label>
							<input
								type='text'
								name='surname'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className='form-control'
							/>
							{formik.touched.surname && formik.errors.surname ? (
								<Div>{formik.errors.surname}</Div>
							) : null}
						</div>
						<div className='form-group col-md-2 ' id={styles.input}>
							<label>Phone</label>
							<input
								type='tel'
								name='phone'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className='form-control'
							/>
							{formik.touched.phone && formik.errors.phone ? (
								<Div>{formik.errors.phone}</Div>
							) : null}
						</div>
					</div>
					<div>
						<div className='form-row' id={styles.row}>
							<div className='form-group col-md-4 ' id={styles.input}>
								<label>Address Street</label>
								<input
									type='text'
									name='address'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className='form-control'
								/>
								{formik.touched.address && formik.errors.address ? (
									<Div>{formik.errors.address}</Div>
								) : null}
							</div>
							<div className='form-group col-md-3' id={styles.input}>
								<label>Address Number</label>
								<input
									type='number'
									name='addressNumber'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className='form-control'
								/>
								{formik.touched.addressNumber && formik.errors.addressNumber ? (
									<Div>{formik.errors.addressNumber}</Div>
								) : null}
							</div>
							<div className='form-group col-md-3 ' id={styles.input}>
								<label>Postal Code</label>
								<input
									type='number'
									name='postalCode'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className='form-control'
								/>
								{formik.touched.postalCode && formik.errors.postalCode ? (
									<Div>{formik.errors.postalCode}</Div>
								) : null}
							</div>
						</div>
						<div className={styles.registerButtonRow}>
							<ButtonRed type='submit'>Confirm</ButtonRed>
						</div>
					</div>
				</form>
				<div />
			</div>
		</div>
	);
}
export default UserPanel;
