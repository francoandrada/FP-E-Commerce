import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { resetPassword } from '../../Redux/actions';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Text = styled.h2`
	  font-family: 'Roboto', sans-serif ;
`;

const ResetPassword = () => {
	const history = useHistory();
	const { resetLink } = useParams();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			password: '',
			passwordConfirmation: '',
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.required('Please Enter your password')
				.matches(
					/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
					'Must contain 6 Characters, one uppercase, one lowercase and one number'
				),

			passwordConfirmation: Yup.string().oneOf(
				[Yup.ref('password'), null],
				'Passwords must match'
			),
		}),
		onSubmit: (values) => {
			dispatch(resetPassword(resetLink, values.password));
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Your password has been successfully changed',
				showConfirmButton: false,
				timer: 3000,
			});
			history.push('/');
		},
	});

	return (
		<div className=' m-5 d-flex justify-content-center p-5  '>
			<div className='justify-content-center bg-secondary  rounded p-5'>
				<div className=' text-center text-black text-justify '>
					<Text>Reset Password</Text>
					<p>Please enter your email address registered on your account</p>
				</div>

				<div className='bg-white p-5'>
					<form onSubmit={formik.handleSubmit}>
						{formik.touched.password && formik.errors.password ? (
							<div className=' d-flex '>
								<p>{formik.errors.password}</p>
							</div>
						) : null}

						<label htmlFor='password'>Password</label>
						<input
							id='password'
							name='password'
							type='password'
							className='form-control'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
						<label>Confirm Password</label>
						<input
							id='passwordConfirmation'
							name='passwordConfirmation'
							type='password'
							className='form-control'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.passwordConfirmation}
						/>
						{formik.touched.passwordConfirmation &&
						formik.errors.passwordConfirmation ? (
							<div>{formik.errors.passwordConfirmation}</div>
						) : null}

						<button
							className='btn btn-primary btn-block  my-3  shadow-sm'
							type='submit'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
