import {
	LIST_PRODUCT_ON_TABLE,
	FETCH_PENDING,
	FETCH_ERROR,
	SIZE_PAGINATION,
	ORDER_TABLE,
	TABLE_FILTER_BY_CATEGORY,
	SORT_TABLE_BY,
	GET_USERS,
	GOTO_TABLE_PAGE,
} from '../actionsName';

const initialState = {
	listProductsOnTable: undefined,
	error: null,
	pending: false,
	sizePagination: 10,
	orderTable: 'default',
	filterByCategory: 'default',
	sortTable: 'name',
	usersFromDB: [],
	gotoTablePage: 0,
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
		case TABLE_FILTER_BY_CATEGORY:
			return {
				...state,
				filterByCategory: payload,
			};
		case SORT_TABLE_BY:
			return {
				...state,
				sortTable: payload,
			};
		case GET_USERS:
			console.log(payload)
			return {
				...state,
				usersFromDB: payload,
			};
		case GOTO_TABLE_PAGE:
			return {
				...state,
				gotoTablePage: payload,
			};
		default:
			return state;
	}
}

export default adminReducer;
