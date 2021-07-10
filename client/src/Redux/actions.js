import {
	SUCCESS_LOGIN,
	ERROR,
	AUTH_USER,
	LOG_OUT,
	GET_PRODUCTS,
	FORGOT_PASSWORD,
	RESET_PASSWORD,
	PRODUCT_DETAIL,
	SUGGESTIONS,
	FETCH_PENDING,
	FETCH_ERROR,
	GET_CATEGORIES,
	GET_HIGHLIGHTS,
} from './actionsName';

import axios from 'axios';

export const fetchPending = () => ({
	type: FETCH_PENDING,
});

export const fetchError = (error) => ({
	type: FETCH_ERROR,
	error,
});

export const fetchSuggestions = (payload) => ({
	type: SUGGESTIONS,
	payload,
});

export function getSuggestions() {
	return async (dispatch) => {
		try {
			dispatch(fetchPending());
			const res = await axios.get('http://localhost:3001/products/');
			dispatch(fetchSuggestions(res.data));
		} catch (error) {
			dispatch(fetchError(error));
		}
	};
}

export function getProducts() {
	return async (dispatch) => {
		axios.get('http://localhost:3001/products/').then((response) => {
			dispatch({ type: GET_PRODUCTS, payload: response.data.product });
			dispatch({ type: GET_CATEGORIES, payload: response.data.category });
		});
	};
}

export function getCategories() {
	return async (dispatch) => {
		axios.get('http://localhost:3001/products/').then((response) => {
			dispatch({ type: GET_CATEGORIES, payload: response.data });
		});
	};
}

export function getProductById(id) {
	return async (dispatch) => {
		axios
			.get('http://localhost:3001/products/allproducts/' + id)
			.then((response) => {
				dispatch({ type: PRODUCT_DETAIL, payload: response.data });
			});
	};
}

export function getHighlightProd() {
	return async (dispatch) => {
		axios.get('http://localhost:3001/products').then((response) => {
			dispatch({ type: GET_HIGHLIGHTS, payload: response.data.product });
		});
	};
}

export function logIn(dato) {
	return async (dispatch) => {
		try {
			const res = await axios.post('http://localhost:3001/auth', dato);
			dispatch({
				type: SUCCESS_LOGIN,
				payload: res.data.token,
			});
		} catch (error) {
			console.log('error', error.response.data.msg);
			dispatch({
				type: ERROR,
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
			console.log('error', error.response.data.msg);

			dispatch({
				type: ERROR,
				payload: error.response.data.msg,
			});
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

export function loginGmail(data) {
	return async (dispatch) => {
		try {
			console.log('request al server http://localhost:3001/authGmail ');
			console.log(data);
			const res = await axios.post('http://localhost:3001/authGmail', data);
			console.log('desde el action', res.data.token);

			dispatch({
				type: SUCCESS_LOGIN,
				payload: res.data.token,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
