import {
	LIST_PRODUCT_ON_TABLE,
	FETCH_PENDING,
	FETCH_ERROR,
	SIZE_PAGINATION,
	ORDER_TABLE,
} from '../actionsName';

const initialState = {
	listProductsOnTable: undefined,
	error: null,
	pending: false,
	sizePagination: 10,
	orderTable: 'default',
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
		case SIZE_PAGINATION:
			return {
				...state,
				sizePagination: payload,
			};
		case ORDER_TABLE:
			return {
				...state,
				orderTable: payload,
			};
		default:
			return state;
	}
}

export default adminReducer;
