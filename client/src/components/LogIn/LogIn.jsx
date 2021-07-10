import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { logIn,loginGmail } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

/* global google */
import jwt_decode from 'jwt-decode';

const LogIn = () => {

	///////// Login vía Google
	const googleApiKey =
		'850649775650-vbs3e60jk6hkjba2l896eotkb4a3d16h.apps.googleusercontent.com';
	// Simulo con react; luego debería estar en el estado de redux esta data.
	// Sirve para saber que mostrar en función a si está o no logueado.
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [userInfo, setUserInfo] = useState({});

	const onOneTapSignedIn = (response) => {
		const decodedToken = jwt_decode(response.credential);
		console.log(decodedToken)
		setUserInfo({
			email: decodedToken.email,
			password: decodedToken.sub,
			verified: decodedToken.email_verified
		});
	};

	useEffect(()=>{if(isSignedIn){dispatch(loginGmail(userInfo))}},
	 [isSignedIn]);
	useEffect(() =>{if(userInfo.verified){ setIsSignedIn(true)}}, [userInfo]);


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
		if(!token){
			const el = document.createElement('script');
			el.setAttribute('src', 'https://accounts.google.com/gsi/client');
			el.onload = () => initializeGSI();
			document.querySelector('body').appendChild(el);
		}
	}, []);

	///////////////

	const dispatch = useDispatch();
	const history = useHistory();

	const authenticated = useSelector((state) => state.user.authenticated);
	const token = useSelector((state) => state.user.token);


	const setError = useSelector((state) => state.user.setError);


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
			email: Yup.string().email('Invalid email address').required('Enter an email'),
			password: Yup.string().required('Enter a password').min(6)
		}),
		onSubmit: (values) => {
			dispatch(logIn(values));
		},
	});

	return (
		<>
			<div >
		<p>{setError}</p>
				<form onSubmit={formik.handleSubmit}>
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

