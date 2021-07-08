import { SUCCESS_LOGIN, ERROR_LOGIN, AUTH_USER, LOG_OUT, FORGOT_PASSWORD, RESET_PASSWORD } from './actionsName';

import axios from 'axios';

export function logIn(data) {
	return async (dispatch) => {
		try {
			const res = await axios.post('http://localhost:3001/auth', data);
			console.log('desde el action', res.data.token);

			dispatch({
				type: SUCCESS_LOGIN,
				payload: res.data.token,
			});
		} catch (error) {
			dispatch({
				type: ERROR_LOGIN,
				payload: error.response.data.msg,
			});
		}
	};
}

// Retorne el Usuario autenticado en base al JWT
export function authUser(data) {
	return async (dispatch) => {
		const token = localStorage.getItem('token');

		if (token) {
			const tokenAuth = (token) => {
				if (token) {
					axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
				} else {
					delete axios.defaults.headers.common['Authorization'];
				}
			};
			tokenAuth(token);
		}

		try {
			const res = await axios.get('http://localhost:3001/auth');
			if (res.data.user) {
				dispatch({
					type: AUTH_USER,
					payload: res.data,
				});
				console.log('desde action imprimiendo usuario', res.data);
			}
		} catch (error) {
			console.log(error);
		}
	};
}

export function logOut(data) {
	return async (dispatch) => {
		dispatch({
			type: LOG_OUT,
		});
	};
}


export function forgotPassword(email) {
	return async (dispatch) => {
		try {
			 await axios.put('http://localhost:3001/auth/forgot-password', {email});
			console.log('desde el action', email);

			dispatch({
				type: FORGOT_PASSWORD,
				payload: email
			});

		} catch (error) {
			console.log(error)
		}
	};
}


export function resetPassword(resetLink, newPass) {
	return async (dispatch) => {
		try {
			 await axios.put('http://localhost:3001/auth/reset-password', {resetLink, newPass});
			console.log('desde el action', {resetLink, newPass});
			dispatch({
				type: RESET_PASSWORD,
				payload: {
					resetLink, 
					newPass
				}
			});

		} catch (error) {
			console.log(error)
		}
	};
}