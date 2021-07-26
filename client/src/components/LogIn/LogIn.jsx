import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { logIn, loginGmail, postCartUser } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import img from '../../images/12.png';
import imge from '../../images/5.jpeg';
import Error from '../StyledComponents/ErrorMessages';
import Div from '../StyledComponents/Validation';
import { GoogleLogin } from 'react-google-login';
import './index.css';

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
        margin-top: 1em;
		width: 100px;
        height: 100px;
    }
`;
const Imge = styled.img`
    width: 370px;
    height: 300px;
	border-radius: 10px;
	background-size: cover;
	margin: 0;
      @media  (max-width: 600px) {
    display: none

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
			console.log('dispatch loginGmail');
			console.log(userInfo);
			dispatch(loginGmail(userInfo));
		}
	});

	const dispatch = useDispatch();
	const history = useHistory();

	const authenticated = useSelector((state) => state.user.authenticated);

	const setError = useSelector((state) => state.user.setError);

	const userId = useSelector((state) => state.user.userData.userId);

	const prodId = useSelector((state) => state.cart.cart);

	let array = [];

	if (prodId !== null) {
		for (let i = 0; i < prodId.length; i++) {
			const element = {
				prodId: prodId[i].id,
				qty: prodId[i].qty,
			};

			array.push(element);
		}
	}

	let bodyObject = {
		userId: userId,
		prodId: array,
	};
	console.log(bodyObject);

	useEffect(() => {
		if (authenticated) {
			history.goBack();
			dispatch(postCartUser(bodyObject));
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
			password: Yup.string().required('Enter a password'),
		}),
		onSubmit: (values) => {
			dispatch(logIn(values));
		},
	});

	return (
		<>
			<GlobalStyle />
			<div className='container d-flex justify-content-center mt-3 rounded'>
				<div className=' row '>
					<div className='col bg-white px-5 rounded '>
						<form onSubmit={formik.handleSubmit} className={window.screen.width > 430 ? 'px-5 py-4' : 'formContainer'}>
							<div className=' d-flex justify-content-center'>
								<Img src={`${img}`} />
							</div>
							{formik.touched.email && formik.errors.email ? (
								<Div>{formik.errors.email}</Div>
							) : null}
							{setError !== null ? (
								<Error>{setError}</Error>
							) : (
								<p className='p-1'></p>
							)}
							<div className='form-group d-flex justify-content-center'>
								<input
									type='email'
									className={ window.screen.width > 430 ? 'form-control' : 'LogInInput'}
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
							<div className='form-group d-flex justify-content-center'>
								<input
									type='password'
									className={ window.screen.width > 430 ? 'form-control' : 'LogInInput'}
									id='password'
									name='password'
									type='password'
									placeholder='Password'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
								/>
							</div>

							<div className='d-flex justify-content-center '>
								<button
									type='submit'
									className={window.screen.width  > 430 ? 'btn btn-primary btn-block  mb-2  shadow-sm' : 'btnSignIn'}
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
										className={window.screen.width  > 430 ? 'btn btn-primary btn-block' : 'btnSignIn'}
									>
										Sign-In with Google
									</button>
								)}
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}
							/>
						</form>
						<div className=' d-flex justify-content-center px-4'>
							<Link
								className='dropdown-item bg-secondary m-2 p-2 rounded text-center'
								to={'/forgot-password'}
							>
								Forgot your password?
							</Link>
						</div>
						{/* <AuthenticationButton/> */}
					</div>
					<div className=' rounded'>
						<Link to={'/'}>
							<div className=''>
								<Imge src={`${imge}`} />
							</div>
						</Link>

						<div className= {window.screen.width > 430 ? ' d-flex justify-content-start bg-secondary p-5': 'SignUpContainer'}>
							<Link
								className= {window.screen.width > 430 ? 'dropdown-item bg-secondary rounded text-center p-4' : 'notAccount' }
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
