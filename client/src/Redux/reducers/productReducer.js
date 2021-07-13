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
	cart: [],
	
	 cart: JSON.parse(localStorage.getItem("cart")),
	currentItem: null,
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





		// //carrito
		// case ADD_TO_CART:
		// 	const item = state.allProducts.find(
		// 		(elem) => elem.id === action.payload.id
		// 	);

		// 	const inCart = state.cart.find((elem) =>
		// 		elem.id === action.payload.id ? true : false
		// 	);
		//  localStorage.setItem("cart", JSON.stringify(item))
		// 	return {
		// 		...state,
	
				
		// 		cart: inCart ? state.cart.map((item) => item.id === action.payload.id 
		// 		? { ...item, qty: item.qty + 1 }
		// 						: item
		// 			  )
		// 			: [...state.cart, { ...item, qty: 1 }],
		// 	};

		// case REMOVE_FROM_CART:
		// 	return {
		// 		...state,
		// 		cart: state.cart.filter((item) => item.id !== action.payload.id),
		// 	};


			
		// case ADJUST_ITEM_QTY:
		// 	return {
		// 		...state,
		// 		cart: state.cart.map((item) =>
		// 			item.id === action.payload.id
		// 				? {
		// 						...item,
		// 						qty: action.payload.qty,
		// 				  }
		// 				: item
		// 		),
		// 	};
		// case LOAD_CURRENT_ITEM:
		// 	return {
		// 		...state,
		// 		currentItem: action.payload,
		// 	};
		default:
			return state;
	}
}
export default productReducer;
