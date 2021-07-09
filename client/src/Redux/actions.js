import {
	SUCCESS_LOGIN,
	ERROR,
	AUTH_USER,
	LOG_OUT,
	GET_PRODUCTS,
	FORGOT_PASSWORD,
	RESET_PASSWORD,
} from './actionsName';

import axios from 'axios';

export function getProducts() {
	return async (dispatch) => {
		axios.get('http://localhost:3001/products/').then((response) => {
			dispatch({ type: GET_PRODUCTS, payload: response.data });
		});
	};
}

export function logIn(dato) {
	return async (dispatch) => {
		try {
			console.log('desde el action try')

			const res = await axios.post('http://localhost:3001/auth', dato);
			dispatch({
				type: SUCCESS_LOGIN,
				payload: res.dato.token,
			});
		} catch (error) {
			
			console.log('desde el action catch', error.response.data)
			dispatch({
				type: ERROR,
				payload: error.response.data.errors[0].msg
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
			await axios.put('http://localhost:3001/auth/forgot-password', { email });

			dispatch({
				type: FORGOT_PASSWORD,
				payload: email,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function resetPassword(resetLink, newPass) {
	return async (dispatch) => {
		try {
			await axios.put('http://localhost:3001/auth/reset-password', {
				resetLink,
				newPass,
			});
			dispatch({
				type: RESET_PASSWORD,
				payload: {
					resetLink,
					newPass,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
}
