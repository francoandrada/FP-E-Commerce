import { AUTH_USER, ERROR_LOGIN, GET_PRODUCTS, LOG_OUT, SUCCESS_LOGIN } from './actionsName';

const initialState = {
	token: localStorage.getItem('token'),
	message: undefined,
	authenticated: false,
	user: undefined,
	products: []
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ERROR_LOGIN:
			return {
				...state,
				message: action.payload,
			};
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload
			}
		case SUCCESS_LOGIN:
			localStorage.setItem('token', action.payload);
			return {
				...state,
				token: action.payload,
				authenticated: true,
			};
		case AUTH_USER:
			return {
				...state,
				user: action.payload,
				authenticated: true,
			};
		case LOG_OUT:
			localStorage.removeItem('token');
			return {
				...state,
				user: null,
				token: null,
				authenticated: null,
			};
		default: {
			return state;
		}
	}
}
export default rootReducer;
