import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { resetPassword } from '../../Redux/actions';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Div from '../StyledComponents/Validation';

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
		<div class=' m-5 d-flex justify-content-center p-5  '>
			<div class='justify-content-center bg-secondary  rounded p-5'>
				<div class=' text-center text-black text-justify '>
					<Text>Reset Password</Text>
					<p>Please enter your email address registered on your account</p>
				</div>

				<div class='bg-white p-5'>
					<form onSubmit={formik.handleSubmit}>
						{formik.touched.password && formik.errors.password ? (
							<div class=' d-flex '>
								<p>{formik.errors.password}</p>
							</div>
						) : null}

						<label htmlFor='password'>Password</label>
						<input
							id='password'
							name='password'
							type='password'
							class="form-control"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
							<label>Confirm Password</label>
							<input
								id='passwordConfirmation'
								name='passwordConfirmation'
								type='password'
								class="form-control"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.passwordConfirmation}
							/>
						{formik.touched.passwordConfirmation &&
						formik.errors.passwordConfirmation ? (
							<div>{formik.errors.passwordConfirmation}</div>
						) : null}

						<button
							class='btn btn-primary btn-block  my-3  shadow-sm'
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
