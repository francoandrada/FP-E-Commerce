import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../Redux/actions';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Error from '../StyledComponents/ErrorMessages';
import styled from 'styled-components';
import Div from '../StyledComponents/Validation';

const Text = styled.h2`
	  font-family: 'Roboto', sans-serif ;
`;
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
if(setError.length >0){
	

			Swal.fire({
				title: 'Check your inbox to reset the password',
				showClass: {
					popup: 'animate__animated animate__fadeInDown',
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp',
				},
			});
		}
	}
	});
	return (
		<div class=' m-5 d-flex justify-content-center '>

			<div class='justify-content-center bg-secondary  rounded p-5'>
			{setError.length >0 ? <Error>{setError}</Error> : null }
			<div class=' text-center text-black'>
			<Text>Forgot your password?</Text>
			
			<p>Please enter your email address registered on your account</p>
			</div>
			<div class='bg-white p-4 '>
				<form onSubmit={formik.handleSubmit}>
				{formik.touched.email && formik.errors.email ? (
						<Div>{formik.errors.email}</Div>
					) : null}
					<input
						type='email'
						class='form-control'
						placeholder='Email'
						name='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
				

					<button class='btn btn-primary btn-block  my-3  shadow-sm'
					type='submit'>Submit</button>
				</form>
			</div>
			</div>
			</div>
		
	);
};
export default ForgotPassword;
