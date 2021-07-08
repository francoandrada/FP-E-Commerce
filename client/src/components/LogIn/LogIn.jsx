import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import style from './LogIn.module.css';
import { logIn } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LogIn = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const authenticated = useSelector((state) => state.authenticated);

	useEffect(() => {
		if (authenticated) {
			history.push('/');
		}
	}, [authenticated]);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string().required('Required'),
		}),
		onSubmit: (values) => {
			dispatch(logIn(values));
			//alert(JSON.stringify(values, null, 2));
			console.log(values);
		},
	});

	return (
		<>
			<div className={style.loginContainer}>
				<form className={style.formContainer} onSubmit={formik.handleSubmit}>
					<label htmlFor='email'>Email Address</label>
					<input
						id='email'
						name='email'
						type='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div>{formik.errors.email}</div>
					) : null}

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
					<button type='submit'>Submit</button>
				</form>
				<Link to={'/forgot-password'}>
					<p>Forgot your password?</p>
				</Link>
			</div>
		</>
	);
};

export default LogIn;
