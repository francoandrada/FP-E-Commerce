import {
	AUTH_USER,
	ERROR,
	LOG_OUT,
	SUCCESS_LOGIN,
	SUGGESTIONS,
	FETCH_PENDING,
	FETCH_ERROR,
	CLEAN_SUGGESTIONS,
	HIDE_ALERT,
	FORGOT_PASSWORD,
	ERRORTOKEN,
	SET_MANUAL_AUTHENTICATION,
} from '../actionsName';

const initialState = {
	token: localStorage.getItem('token'),
	setError: null,
	errorToken: null,
	authenticated: false,
	userData: JSON.parse(localStorage.getItem('userData') || '[]'),
	products: [],
	productDetail: {},
	error: null,
	pending: false,
	suggestions: undefined,
};

const productSuggestions = (array, name) => {
	return array.filter((product) =>
		product.name.toLowerCase().includes(name.toLowerCase())
	);
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case ERROR:
			return {
				...state,
				setError: action.payload,
			};
		case FORGOT_PASSWORD: {
			return {
				...state,
			};
		}
		case HIDE_ALERT:
			return {
				...state,
				setError: null,
				alert: null,
			};
		case SUCCESS_LOGIN:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				token: action.payload.token,
				authenticated: true,
				userData: action.payload.user,
			};
		case AUTH_USER:
			return {
				...state,
				user: action.payload,
				authenticated: true,
			};
		case LOG_OUT:
			localStorage.removeItem('token');
			localStorage.removeItem('userData');
			localStorage.removeItem('cart')
			return {
				...state,
				user: null,
				token: null,
				authenticated: false,
				errorToken: null,
				userData: [],

			};
		case FETCH_ERROR:
			return {
				...state,
				error: action.error,
			};
		case FETCH_PENDING:
			return {
				...state,
				pending: true,
			};
		case SUGGESTIONS:
			return {
				...state,
				pending: false,
				suggestions: productSuggestions(
					action.payload.productSuggestions,
					action.payload.name
				),
			};
		case CLEAN_SUGGESTIONS:
			return {
				...state,
				suggestions: action.payload,
			};
		case ERRORTOKEN:
			return {
				...state,
				errorToken: action.payload,
			};
		case SET_MANUAL_AUTHENTICATION:
			console.log('en reducer');
			return {
				...state,
				authenticated: action.payload,
			};
		default: {
			return state;
		}
	}
}
export default userReducer;
