import {
	SUCCESS_LOGIN,
	ERROR,
	HIDE_ALERT,
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
	GET_BRANDS,
	FILTER_CATEGORIES,
	CLEAN_SUGGESTIONS,
	FILTER_PRICE,
	FILTERED_PRODUCTS,
	SELECTED_PAGE,
	CLEAN_FILTERS,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	ADJUST_ITEM_QTY,
	LOAD_CURRENT_ITEM,

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

export const cleanSuggestions = () => ({
	type: CLEAN_SUGGESTIONS,
	payload: undefined,
});

export function getSuggestions(name) {
	return async (dispatch) => {
		try {
			dispatch(fetchPending());
			const res = await axios.get('http://localhost:3001/products/');
			dispatch(fetchSuggestions({ productSuggestions: res.data, name }));
		} catch (error) {
			dispatch(fetchError(error));
		}
	};
}

export function getProducts() {
	return async (dispatch) => {
		axios.get('http://localhost:3001/products/').then((response) => {
			dispatch({ type: GET_PRODUCTS, payload: response.data });
		});
	};
}

export function getCategories() {
	return async (dispatch) => {
		axios.get('http://localhost:3001/categories/').then((response) => {
			dispatch({ type: GET_CATEGORIES, payload: response.data });
		});
	};
}

export function getBrands() {
	return async (dispatch) => {
		axios.get('http://localhost:3001/brands/').then((response) => {
			dispatch({ type: GET_BRANDS, payload: response.data });
		});
	};
}

export function getProductById(id) {
	return async (dispatch) => {
		axios.get('http://localhost:3001/products/allproducts/' + id)
			.then((response) => {
				dispatch({ type: PRODUCT_DETAIL, payload: response.data });
			});
	};
}

export function getHighlightProd() {
	return async (dispatch) => {
		axios.get('http://localhost:3001/products').then((response) => {
			dispatch({ type: GET_HIGHLIGHTS, payload: response.data });
		});
	};
}

export function logIn(dato) {
	return async (dispatch) => {
		try {
			const res = await axios.post('http://localhost:3001/auth', dato);
			console.log('dato', dato)
			dispatch({
				type: SUCCESS_LOGIN,
				payload: res.data.token,
			});
		} catch (error) {
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

export function logOut() {
	return async (dispatch) => {
		dispatch({
			type: LOG_OUT,
		});
	};
}

export function forgotPassword(email) {
	return async (dispatch) => {
		try {
			const res =await axios.put('http://localhost:3001/auth/forgot-password', { email });
			let hola = res.data.msg
			dispatch({
				type: FORGOT_PASSWORD,
				payload: {
					email,
					hola
				},
			});
			console.log('desde el action', res.data.msg)
		} catch (error) {

			dispatch({
				type: ERROR,
				payload: error.response.data.msg,
			});
		}
		setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, 3000);
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
	console.log('llego a loginGmail')
	console.log(data)
	return async (dispatch) => {
		try {
				
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

export const filterCategory = (name)=> {
	return {type: FILTER_CATEGORIES,
	payload: name}}

export const filterPrice = (name)=> {

	return {type: FILTER_PRICE,
	payload: name}}

export function getFilteredProducts(query) {
	
	const {category,brand,price,page,qty} = query 

	return async (dispatch) => {
		axios.get(`http://localhost:3001/catalog?category=${category}&brand=${brand}&price=${price}&page=${page}&qty=${qty}`)
			.then((response) => {
				dispatch({ type: FILTERED_PRODUCTS, payload: response.data });
			});
	};
}

export const cleanFilters = ()=> {
	return {type: CLEAN_FILTERS}}

export const selectPage = (page)=> {
	return {type: SELECTED_PAGE,
	payload: page}}




export const addToCart = (itemId) =>{
	return{
		type: ADD_TO_CART,
		payload: itemId
	}
}


export const RemoveFromCart = (itemId) =>{
	return{
		type: REMOVE_FROM_CART,
		payload: {
			id: itemId
		}
	}
}
//ajustar cantidas
export const adjustQty = (itemId, value) =>{
	return{
		type: ADJUST_ITEM_QTY,
		payload: {
			id: itemId,
			qty: value
		}
	}
}

//recibo el item entero con toda su data
export const loadCurrentItem = (itemId) =>{
	return{
		type: LOAD_CURRENT_ITEM,
		payload: {
			id: itemId
		}
	}
}
