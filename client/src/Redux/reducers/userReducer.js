
import {
	AUTH_USER,
	ERROR_LOGIN,
	GET_PRODUCTS,
	LOG_OUT,
  PRODUCT_DETAIL,
	SUCCESS_LOGIN,
	SUGGESTIONS,
	FETCH_PENDING,
	FETCH_ERROR,
} from '../actionsName';


const initialState = {
	token: localStorage.getItem('token'),
	message: undefined,
	authenticated: false,
	user: undefined,
	products: [],
	productDetail: {},
	error: null,
	pending: false,
	suggestions: undefined,

};

function userReducer(state = initialState, action) {
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
		case PRODUCT_DETAIL:
			return {
				...state,
				productDetail: action.payload
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
				suggestions: action.payload,
			};
		default: {
			return state;
		}
	}
}
export default userReducer;
