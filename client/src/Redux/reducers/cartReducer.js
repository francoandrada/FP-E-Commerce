import { useState } from 'react';

import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	ADJUST_ITEM_QTY,
	LOAD_CURRENT_ITEM,
} from '../actionsName';

const initialState = {

	// //  cart: [],
	// currentItem: null,
    //  cart: JSON.parse(localStorage.getItem('cart') || '[]'),

	cart: [],
	currentItem: null,
	cart: JSON.parse(localStorage.getItem('cart')),
};

function cartReducer(state = initialState, action) {
	switch (action.type) {
		//carrito
		case ADD_TO_CART:
		

			const inCart = state.cart.find((elem) =>
				elem.id === action.payload.id ? true : false
			);

			// localStorage.setItem('cart', JSON.stringify(action.payload));

			return {
				...state,

				cart: inCart
					? state.cart.map((item) =>
							item.id === action.payload.id
								? { ...item, qty: item.qty + 1 }
								: item
					  )
					: [...state.cart, { ...action.payload, qty: 1 }],
			};

		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};

		case ADJUST_ITEM_QTY:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								qty: action.payload.qty,
						  }
						: item
				),
			};
		case LOAD_CURRENT_ITEM:
			return {
				...state,
				currentItem: action.payload,
			};
		default:
			return state;
	}
}
export default cartReducer;
