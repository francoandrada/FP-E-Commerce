import * as Yup from 'yup';
import { useFormik } from 'formik';
import style from './LogIn.module.css';
import { useState, useEffect } from 'react';
/* global google */
import jwt_decode from 'jwt-decode';

const LogIn = () => {
	///////// Login vía Google
	const googleApiKey =
		'850649775650-vbs3e60jk6hkjba2l896eotkb4a3d16h.apps.googleusercontent.com';
	// Simulo con react; luego debería estar en el estado de redux esta data.
	// Sirve para saber que mostrar en función a si está o no logueado.
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	const onOneTapSignedIn = (response) => {
		setIsSignedIn(true);
		const decodedToken = jwt_decode(response.credential);
		setUserInfo({ ...decodedToken });
	};

	const initializeGSI = () => {
		google.accounts.id.initialize({
			client_id: googleApiKey,
			cancel_on_tap_outside: false,
			callback: onOneTapSignedIn,
		});
		google.accounts.id.prompt((notification) => {
			if (notification.isNotDisplayed()) {
				console.log(notification.getNotDisplayedReason());
			} else if (notification.isSkippedMoment()) {
				console.log(notification.getSkippedReason());
			} else if (notification.isDismissedMoment()) {
				console.log(notification.getDismissedReason());
			}
		});
	};

	const signout = () => {
		// refresh the page
		window.location.reload();
	};

	useEffect(() => {
		const el = document.createElement('script');
		el.setAttribute('src', 'https://accounts.google.com/gsi/client');
		el.onload = () => initializeGSI();
		document.querySelector('body').appendChild(el);
	}, []);

	/////////
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
			alert(JSON.stringify(values, null, 2));
			console.log(formik.values.email);
		},
	});

	return (
		<>
			<div className={style.loginContainer}>
				{isSignedIn && userInfo ? (
					<div>
						Hello {userInfo.name} ({userInfo.email})
						<div className='g_id_signout' onClick={() => signout()}>
							Sign Out
						</div>
					</div>
				) : (
					<div>You are not signed in</div>
				)}
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
					<label htmlFor='password'>Password Address</label>
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
			</div>
		</>
	);
};

export default LogIn;
