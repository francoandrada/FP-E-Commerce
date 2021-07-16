import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { logIn, loginGmail } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import img from '../../images/12.png';
import imge from '../../images/5.jpeg';
import Error from '../StyledComponents/ErrorMessages';
import Div from '../StyledComponents/Validation';
/* global google */
/* global gapi */
import { GoogleLogin } from 'react-google-login';

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
const Imge = styled.img`
    width: 370px;
    height: 300px;
	border-radius: 10px;
	background-size: cover;
	margin: 0;
      @media  (max-width: 600px) {
        width: 200px;
        height: 150px;
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

	const responseGoogle = (response) => {

		if (response.tokenId) {
			setUserInfo({
				email: response.profileObj.email,
				password: response.accessToken,
			});
		}
	};

	useEffect(() => {
		if (userInfo.password) {
			setIsSignedIn(true);
		}
	}, [userInfo]);

	useEffect(() => {
		if (isSignedIn) {
			console.log('dispatch loginGmail')

			dispatch(loginGmail(userInfo));
		}
	});


	///////////////

	const dispatch = useDispatch();
	const history = useHistory();

	const authenticated = useSelector((state) => state.user.authenticated);


	const setError = useSelector((state) => state.user.setError);

	useEffect(() => {
		if (authenticated) {
			history.back();
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
			<div class='container d-flex justify-content-center mt-5 rounded'>
				<div class=' row'>
					<div class='col bg-white px-5 rounded pb-4'>
						{setError !== null ? <Error>{setError}</Error> : null}

						<form onSubmit={formik.handleSubmit} class='p-3'>
							<div class=' d-flex justify-content-center'>
								<Img src={`${img}`} />
							</div>
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
							<GoogleLogin
								clientId={googleApiKey}
								render={(renderProps) => (
									<button
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
										className='btn btn-primary btn-block'
									>
										Sign-In with Google
									</button>
								)}
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}
							/>
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
					<div class=' rounded'>
						<Link to={'/'}>
							<div class=''>
								<Imge src={`${imge}`} />
							</div>
						</Link>
						
						
						<div class=' d-flex justify-content-start bg-secondary p-5'>
								<Link

									class='dropdown-item bg-secondary rounded text-center '

									to={'/register'}
								>
									Don't have an account? Sign up
								</Link>
							</div>
								
							
					</div>
				</div>
			</div>
		</>
	);
};

export default LogIn;
