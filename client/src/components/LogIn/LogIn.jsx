import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { logIn, loginGmail } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import imag from '../../images/5.jpeg';
import Button from '../StyledComponents/ButtonRed';
/* global google */
import jwt_decode from 'jwt-decode';

const GlobalStyle = createGlobalStyle`
  body {
	  background-image: none;
	  background-color: black;

  }
`;
const Img = styled.img`
   width: 400px;
    height: 400px;
      @media  (max-width: 600px) {
        width: 200px;
        height: 150px;
    }
`;

const Paddign = styled.div`
	padding: 1rem 2rem;
	background-color: gray;
	border-radius: 5px;
	margin-top: 3rem;
	:hover {
  transform: scale(1.03);
	}
`;

const Div = styled.div`
	padding: .5rem;
	color: #FF3C4A;
	font-weight: 700;
	border-radius: 5px;
	text-align: center;
	margin: .5rem;
	
`;

const Text = styled.h1`
	font-weight: 700;
	border-radius: 5px;
	text-align: center;
	margin: 1rem 0;
`;

const Input = styled.input`
	
	border-radius: 5px;
	text-align: center;
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
			<div class='container d-flex justify-content-center mt-4'>
				<div class=' row  '>
					<div class='col bg-white m-0 rounded'>
						<form class='p-3'>
							<Text>Sing In</Text>

							<div class='form-group'>
								{formik.touched.email && formik.errors.email ? (
									<Div>{formik.errors.email}</Div>
								) : null}
								<Input
									type='email'
									class='form-control'
									id='exampleDropdownFormEmail1'
									placeholder='email@example.com'
									name='email'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
								/>
							</div>
							<div class='form-group'>
								{formik.touched.password && formik.errors.password ? (
									<Div>{formik.errors.password}</Div>
								) : null}
								<Input
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
								<Button type='submit' class='btn btn-primary'>
									Sign in
								</Button>
							</div>
						</form>
						<div class='dropdown-divider'></div>
						<Link
							class='dropdown-item bg-secondary rounded text-center'
							to={'/register'}
						>
							<p>New around here? Sign up</p>
						</Link>

						<Link
							class='dropdown-item rounded text-center'
							to={'/forgot-password'}
						>
							<p>Forgot your password?</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default LogIn;
