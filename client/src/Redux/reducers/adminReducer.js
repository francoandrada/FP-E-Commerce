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
	GET_USER_TO_EDIT,
	PRODUCT_DETAIL,
	TABLE_FILTER_BRAND,
	FETCH_COUNT_OF_BRAND,
	FETCH_COUNT_OF_CATEGORIES,
	PRODUCT_WITH_ORDER,
	USER_WITH_ORDER,
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
	userToEdit: undefined,
	productToEdit: undefined,
	tableByBrand: 'default',
	brandCount: undefined,
	categoriesCount: undefined,
	productWithOrder: undefined,
	userWithOrder: undefined,
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
			return {
				...state,
				usersFromDB: payload,
			};

		case GET_USER_TO_EDIT:
			return {
				...state,
				userToEdit: payload,
			};
		case GOTO_TABLE_PAGE:
			return {
				...state,
				gotoTablePage: payload,
			};
		case PRODUCT_DETAIL:
			return {
				...state,
				productToEdit: payload,
			};
		case TABLE_FILTER_BRAND:
			return {
				...state,
				tableByBrand: payload,
			};
		case FETCH_COUNT_OF_BRAND:
			return {
				...state,
				pending: false,
				brandCount: payload,
			};
		case FETCH_COUNT_OF_CATEGORIES:
			return {
				...state,
				pending: false,
				categoriesCount: payload,
			};
		case PRODUCT_WITH_ORDER:
			return {
				...state,
				pending: false,
				productWithOrder: payload,
			};
		case USER_WITH_ORDER:
			return {
				...state,
				pending: false,
				userWithOrder: payload,
			};
		default:
			return state;
	}
}

export default adminReducer;
