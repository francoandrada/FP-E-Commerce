import { FaLessThanEqual } from 'react-icons/fa';
import {
	CURRENT_PAGE_OF_THE_BRANDS,
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
	TABLE_ORDER_PAGINATION_SIZE,
	TABLE_USER_ORDER_PAGINATION_SIZE,
	FILTER_BY_ORDER_STATUS,
	GET_ALL_DATA_ABOUT_AN_ORDER,
	CURRENT_PAGE_ORDER_USER,
	CURRENT_PAGE_ORDER_PRODUCT,
	FETCH_ALL_THE_BRANDS,
	ORDER_DISPATCHED
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
	tableOrderPaginationSize: 5,
	tableOrderUserPaginationSize: 5,
	filterByOrderStatus: 'all',
	orderDetails: undefined,
	currentPageOfUserOrderTable: 0,
	currentPageOfProductOrderTable: 0,
	allTheBrands: undefined,
	currentPageForBrand: 0
};

function adminReducer(state = initialState, { type, payload, error }) {
	switch (type) {
		case FETCH_ERROR:
			return {
				...state,
				error: error
			};
		case FETCH_PENDING:
			return {
				...state,
				pending: true
			};
		case LIST_PRODUCT_ON_TABLE:
			return {
				...state,
				pending: false,
				listProductsOnTable: payload
			};
		case FETCH_ALL_THE_BRANDS:
			return {
				...state,
				pending: false,
				allTheBrands: payload
			};
		case SIZE_PAGINATION:
			return {
				...state,
				sizePagination: payload
			};
		case ORDER_TABLE:
			return {
				...state,
				orderTable: payload
			};
		case TABLE_FILTER_BY_CATEGORY:
			return {
				...state,
				filterByCategory: payload
			};
		case SORT_TABLE_BY:
			return {
				...state,
				sortTable: payload
			};
		case GET_USERS:
			return {
				...state,
				usersFromDB: payload
			};

		case GET_USER_TO_EDIT:
			return {
				...state,
				userToEdit: payload
			};
		case GOTO_TABLE_PAGE:
			return {
				...state,
				gotoTablePage: payload
			};
		case PRODUCT_DETAIL:
			return {
				...state,
				productToEdit: payload
			};
		case TABLE_FILTER_BRAND:
			return {
				...state,
				tableByBrand: payload
			};
		case FETCH_COUNT_OF_BRAND:
			return {
				...state,
				pending: false,
				brandCount: payload
			};
		case FETCH_COUNT_OF_CATEGORIES:
			return {
				...state,
				pending: false,
				categoriesCount: payload
			};
		case PRODUCT_WITH_ORDER:
			return {
				...state,
				pending: false,
				productWithOrder: payload
			};
		case USER_WITH_ORDER:
			return {
				...state,
				pending: false,
				userWithOrder: payload
			};
		case TABLE_ORDER_PAGINATION_SIZE:
			return {
				...state,
				tableOrderPaginationSize: payload
			};
		case TABLE_USER_ORDER_PAGINATION_SIZE:
			return {
				...state,
				tableOrderUserPaginationSize: payload
			};
		case FILTER_BY_ORDER_STATUS:
			return {
				...state,
				filterByOrderStatus: payload
			};
		case GET_ALL_DATA_ABOUT_AN_ORDER:
			return {
				...state,
				pending: false,
				orderDetails: payload
			};
		case CURRENT_PAGE_ORDER_USER:
			return {
				...state,
				currentPageOfUserOrderTable: payload
			};
		case CURRENT_PAGE_ORDER_PRODUCT:
			return {
				...state,
				currentPageOfProductOrderTable: payload
			};
		case CURRENT_PAGE_OF_THE_BRANDS:
			return {
				...state,
				currentPageForBrand: payload
			};
		default:
			return state;
	}
}

export default adminReducer;
