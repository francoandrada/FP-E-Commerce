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
function ContactForm() {
	const history = useHistory();

	const [hola, setHola] = useState([]);
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		validationSchema: Yup.object({
            name: Yup.string().required('Enter a name'),
			email: Yup.string()
				.email('Invalid email address')
				.required('Enter an email where you can be contacted.'),
			subject: Yup.string().required('Enter a subject'),
			message: Yup.string().required('Enter your message'),
		}),

		onSubmit: async values => {
			console.log(values);
			try {
				await axios.post('http://localhost:3001/users', {
					name: values.name,
					email: values.email,
					subject: values.subject,
					message: values.message,
				});

				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Your message was sent! Thanks!',
					showConfirmButton: false,
					timer: 1500
				});
				history.push('/');
			} catch (error) {
				console.log(error.response.data.msg);
				setHola(error.response.data.msg);
			}
		}
	});

	return (
		<div className={styles.registerFormContainer}>
			<div id={styles.regForm}>
				{hola.length > 0 ? <Error>{hola}</Error> : null}
				<form onSubmit={formik.handleSubmit} id='contact-form'>
					<div className='form-row' id={styles.row}>
						<div className='form-group col-md-5' id={styles.input}>
							<label>Name </label>
							<input
								type='text'
								name='name'
								placeholder='Name'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className='form-control'
							/>
							{formik.touched.name && formik.errors.name ? (
								<Div>{formik.errors.name}</Div>
							) : null}
						</div>
						<div className='form-group col-md-5' id={styles.input}>
							<label>Email</label>

							<input
								type='email'
								className='form-control'
								id='email'
								placeholder='Email'
								name='email'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.email && formik.errors.email ? (
								<Div>{formik.errors.email}</Div>
							) : null}
						</div>

					</div>
                    <div className='form-row' id={styles.row}>
						<div className='form-group col-md-10' id={styles.input}>
							<label>Subject </label>
							<input
								type='text'
								name='subject'
								placeholder='Subject'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className='form-control'
							/>
							{formik.touched.subject && formik.errors.subject ? (
								<Div>{formik.errors.name}</Div>
							) : null}
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
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className='form-control'
								/>
								{formik.touched.address && formik.errors.address ? (
									<Div>{formik.errors.address}</Div>
								) : null}
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
