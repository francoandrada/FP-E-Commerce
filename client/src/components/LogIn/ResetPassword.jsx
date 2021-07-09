import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { resetPassword } from '../../Redux/actions';

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
					'Must Contain 6 Characters, One Uppercase, One Lowercase and One Number'
				),

			passwordConfirmation: Yup.string().oneOf(
				[Yup.ref('password'), null],
				'Passwords must match'
			),
		}),
		onSubmit: (values) => {
			 dispatch(resetPassword(resetLink, values.password));
			alert('password changed')
				history.push('/')

		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor='password'>Password</label>
			<input
				id='password'
				name='password'
				type='password'
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
			/>

			{formik.touched.password && formik.errors.password ? (
				<div>{formik.errors.password}</div>
			) : null}

			<label>Confirm Password</label>
			<input
				id='passwordConfirmation'
				name='passwordConfirmation'
				type='password'
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.passwordConfirmation}
			/>

			{formik.touched.passwordConfirmation &&
			formik.errors.passwordConfirmation ? (
				<div>{formik.errors.passwordConfirmation}</div>
			) : null}

			<button type='submit'>Submit</button>
		</form>
	);
};

export default ResetPassword;
