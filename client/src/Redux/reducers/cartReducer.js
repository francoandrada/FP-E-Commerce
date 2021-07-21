import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	ADJUST_ITEM_QTY,
	LOAD_CURRENT_ITEM,
	SET_CART,
	GET_PAY,
	CREATE_CART_USER,
} from '../actionsName';

const initialState = {
	cart: JSON.parse(localStorage.getItem('cart') || '[]'),
	currentItem: null,
	link: '',
	userPay: null,
};

function cartReducer(state = initialState, action) {
	switch (action.type) {
		//carrito
		case ADD_TO_CART:
			const inCart = state.cart.find((elem) =>
				elem.id === action.payload.id ? true : false
			);
			

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
		case SET_CART:
			return {
				...state,
				link: action.payload,
			};
		case GET_PAY:
			localStorage.removeItem('cart');
			return {
				...state,
				userPay: action.payload,
			};
		case CREATE_CART_USER:
			console.log('carritooo', action.payload);
			return {
				...state,
				cart: action.payload,
			};
		default:
			return state;
	}
}
export default cartReducer;
