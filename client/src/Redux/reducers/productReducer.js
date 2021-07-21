
import {
	GET_PRODUCTS,
	PRODUCT_DETAIL,
	GET_HIGHLIGHTS,
	FILTERED_PRODUCTS,
	SELECTED_PAGE,
	CLEAN_FILTERS,
} from '../actionsName';

const initialState = {
	allProducts: [],
	detailProducts: {},
	highlights: [],
	filterByCategories: [],
	filterByBrands:[],
	responseLength: undefined,
	page: 1,
};

function productReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				allProducts: action.payload,
			};
		case PRODUCT_DETAIL:
			return {
				...state,
				detailProducts: action.payload,
			};
		case GET_HIGHLIGHTS:
			return {
				...state,
				highlights: action.payload,
			};
		case FILTERED_PRODUCTS:
			return {
				...state,
				filterByCategories: action.payload.products,
				filterByBrands:action.payload.products,
				responseLength: action.payload.length,
			};
		case SELECTED_PAGE:
			return {
				...state,
				page: action.payload,
			};
		case CLEAN_FILTERS:
			return {
				...state,
				filterByCategories: [],
			};

		default:
			return state;
	}
}
export default productReducer;
