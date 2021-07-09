import { AUTH_USER, ERROR, GET_PRODUCTS, LOG_OUT, SUCCESS_LOGIN } from '../actionsName';

const initialState = {
	token: localStorage.getItem('token'),
	setError: [],
	authenticated: false,
	user: undefined,
	products: []
};

function userReducer(state = initialState, action) {


	switch (action.type) {

		case ERROR:
			console.log('desde reducer', action.payload)
			return {
				...state,
				setError: action.payload,
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
export default userReducer;
