import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../Redux/actions';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useFormik } from 'formik';
const ForgotPassword = () => {
	const dispatch = useDispatch();
	const setError = useSelector((state) => state.user.setError);

	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalid email address')
				.required('Enter an email'),
		}),
		onSubmit: (values) => {
			 dispatch(forgotPassword(values.email));
			Swal.fire({
				title: 'Check your inbox to reset the password',
				showClass: {
					popup: 'animate__animated animate__fadeInDown',
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp',
				},
			});
		},
	});
	return (
		<div>
			<p>{setError}</p>
			<form onSubmit={formik.handleSubmit}>
				<label>Email</label>
				<input
					type='email'
					placeholder='Email'
					name='email'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
						{formik.touched.email && formik.errors.email ? (
						<div>{formik.errors.email}</div>
					) : null}

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
export default ForgotPassword;
