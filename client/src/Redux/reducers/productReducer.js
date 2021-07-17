import { useState } from 'react';
import {
	GET_PRODUCTS,
	PRODUCT_DETAIL,
	GET_HIGHLIGHTS,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	ADJUST_ITEM_QTY,
	LOAD_CURRENT_ITEM,
	FILTERED_PRODUCTS,
	SELECTED_PAGE,
	CLEAN_FILTERS,
} from '../actionsName';

const initialState = {
	allProducts: [],
	detailProducts: {},
	highlights: [],
	filterByCategories: [],
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
