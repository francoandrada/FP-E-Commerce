import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { logIn, loginGmail } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import img from '../../images/12.png';
import Error from '../StyledComponents/ErrorMessages';
import Div from '../StyledComponents/Validation';
/* global google */
import jwt_decode from 'jwt-decode';



const GlobalStyle = createGlobalStyle`

  body {
	  background-image: none;
	  background-color: black; 
	  font-family: 'Roboto', sans-serif ;
}
`;
const Img = styled.img`
    width: 100px;
    height: 100px;
	margin-bottom: 1rem;
      @media  (max-width: 600px) {
        width: 200px;
        height: 150px;
    }
`;




const Text = styled.h1`
	font-weight: 700;
	background-color: white;
	color: #FF3C4A;
	border-radius: 10px;
	margin: 1rem;
	padding: 2rem;
	font-family: 'Roboto', sans-serif;
	:hover{
		background-color: #303030;
	}
`;


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
		console.log(decodedToken);
		setUserInfo({
			email: decodedToken.email,
			password: decodedToken.sub,
			verified: decodedToken.email_verified,
		});
	};

	useEffect(() => {
		if (isSignedIn) {
			dispatch(loginGmail(userInfo));
		}
	}, [isSignedIn]);
	useEffect(() => {
		if (userInfo.verified) {
			setIsSignedIn(true);
		}
	}, [userInfo]);

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
		if (!token) {
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
			email: Yup.string()
				.email('Invalid email address')
				.required('Enter an email'),
			password: Yup.string()
				.required('Enter a password')
				.min(6, 'The password must be at least 6 characters'),
		}),
		onSubmit: (values) => {
		
			 dispatch(logIn(values));
		
		},
	});

	return (
		<>
			<GlobalStyle />
			<div class='container d-flex justify-content-center mt-5 '>
				<div class=' row'>
					<div class='col bg-white px-5 rounded pb-4'>
					{setError !== null ? <Error>{setError}</Error> : null }
						

						<form  onSubmit={formik.handleSubmit} class='p-3'>
							<div class=' d-flex justify-content-center'>
							<Img src={`${img}`} /></div>

							{formik.touched.email && formik.errors.email ? (
								<Div>{formik.errors.email}</Div>
							) : null}


							<div class='form-group d-flex justify-content-center'>
								<input
									type='email'
									class='form-control'
									id='email'
									placeholder='Email'
									name='email'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
								/>
							</div>
							{formik.touched.password && formik.errors.password ? (
								<Div>{formik.errors.password}</Div>
							) : null}
							<div class='form-group d-flex justify-content-center'>
								<input
									type='password'
									class='form-control'
									id='password'
									name='password'
									type='password'
									placeholder='Password'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
								/>
							</div>
							<div class='d-flex justify-content-center'>
								<button
									type='submit'
									class='btn btn-primary btn-block  mb-2  shadow-sm'
								>
									Sign in
								</button>
							</div>
						</form>
						
						<div class=' d-flex justify-content-center '>
							<Link
								class='dropdown-item bg-secondary m-2 p-2 rounded text-center'
								to={'/forgot-password'}
							>
								Forgot your password?
							</Link>
						</div>
					</div>
					<div class='col bg-secondary p-5 rounded'>
						<div class='p-5'>
						<Link to={'/'}><Text>Hardware Store</Text></Link>
							
							<div class=' d-flex justify-content-center'>
							<Link
								class='dropdown-item bg-secondary m-2 p-2 rounded text-center '
								to={'/register'}
							>
								Don't have an account? Sign up
							</Link>
						</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LogIn;
