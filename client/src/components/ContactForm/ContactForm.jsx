import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styles from './ContactForm.module.css';
import ButtonRed from '../StyledComponents/ButtonRed';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Error from '../StyledComponents/ErrorMessages';
import Div from '../StyledComponents/Validation';
import './index.css';
import emailjs from 'emailjs-com';




const initialState = {
	name: '',
	email: '',
	message: '',
  }
function ContactForm() {
	const history = useHistory();
	const [{ name, email, message }, setState] = useState(initialState)
	
	
	
	const handleChange = (e) => {
		const { name, value } = e.target
		setState((prevState) => ({ ...prevState, [name]: value }))
	  }
	  const clearState = () => setState({ ...initialState })
	
	  const handleSubmit = (e) => {
		e.preventDefault()
			emailjs
				.sendForm(
					'service_fhf2dbo',
					'contactForm',
					e.target,
					'user_rcFhA7nZhQYelsTTkzQtF'
				)
				.then(
					result => {
						console.log(result.text);
					},
					error => {
						console.log(error.text);
					}
				);
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Your message was sent! Thanks!',
				showConfirmButton: false,
				timer: 1500
			});

		}

	return (
		<div className={styles.registerFormContainer}>
			<div id={styles.regForm}>
				{/* {hola.length > 0 ? <Error>{hola}</Error> : null} */}
				<form onSubmit={handleSubmit} id='contact-form'>
					<div className='form-row' id={styles.row}>
						<div className='form-group col-md-5' id={styles.input}>
							<label>Name </label>
							<input
								type='text'
								name='name'
								placeholder='Name'
								onChange={handleChange}
								className='form-control'
							/>
						
						</div>
						<div className='form-group col-md-5' id={styles.input}>
							<label>Email</label>

							<input
								type='email'
								className='form-control'
								id='email'
								placeholder='Email'
								name='email'
								onChange={handleChange}
							/>
						
						</div>
					</div>
					<div className='form-row' id={styles.row}>
						<div className='form-group col-md-10' id={styles.input}>
							<label>Subject </label>
							<input
								type='text'
								name='subject'
								placeholder='Subject'
								onChange={handleChange}
								className='form-control'
							/>
							
						</div>
					</div>
					<div>
						<div className='form-row' id={styles.row}>
							<div className='form-group col-md-10 ' id={styles.input}>
								<label>Message</label>
								<textarea
									rows='8'
									type='text'
									name='message'
									placeholder='Message'
									onChange={handleChange}
									className='form-control'
								/>
								
							</div>
						</div>
						<div className={styles.registerButtonRow}>
							<ButtonRed type='submit'>Submit</ButtonRed>
						</div>
					</div>
				</form>
				<div />
			</div>
		</div>
	);
}
export default ContactForm;

// onSubmit: async values => {
// 	console.log(values);
// 	try {
// 		axios.post(`http://localhost:3001/webhooks/contactForm`, {values});

// 		Swal.fire({
// 			position: 'center',
// 			icon: 'success',
// 			title: 'Your message was sent! Thanks!',
// 			showConfirmButton: false,
// 			timer: 1500
// 		});
// 		history.push('/');
// 	} catch (error) {
// 		console.log(error.response.data.msg);
// 		setHola(error.response.data.msg);
// 	}
// }
