import {
	LIST_PRODUCT_ON_TABLE,
	FETCH_PENDING,
	FETCH_ERROR,
} from '../actionsName';

const initialState = {
	listProductsOnTable: undefined,
	error: null,
	pending: false,
};

function adminReducer(state = initialState, { type, payload, error }) {
	switch (type) {
		case FETCH_ERROR:
			return {
				...state,
				error: error,
			};
		case FETCH_PENDING:
			return {
				...state,
				pending: true,
			};
		case LIST_PRODUCT_ON_TABLE:
			return {
				...state,
				pending: false,
				listProductsOnTable: payload,
			};
		default:
			return state;
	}
}

export default adminReducer;
