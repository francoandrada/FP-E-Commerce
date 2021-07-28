import { GET_USER_ORDERS, ADD_TO_FAVORITES, ADD_DATABASE_FAVORITES, REMOVE_FROM_FAVORITES} from '../actionsName';

const initialState = {
	userOrdersList: [],
	userFavorites: JSON.parse(localStorage.getItem('userFavorites') || '[]')
	
};

function userAccountReducer(state = initialState, action) {
	switch (action.type) {
		// case GET_USER_ORDERS:
		// 	return {
		// 		...state,
		// 		userOrdersList: action.payload,
				
		// 	};
		case GET_USER_ORDERS:
			return {
				...state,
				userOrdersList: action.payload.map(el => {
					let status = el.status
					let ammount = el.ammount
					let orderId = el.orderDetails[0].orderId
					let orderProducts = el.orderDetails.map(prod => {
						let oldprice = prod.price
						let prodinfo = prod.product
						return {...prodinfo, oldprice}
					})
					return {orderId, status, ammount, orderProducts}
				})
			};

		case ADD_TO_FAVORITES:
			return {
				...state,
				userFavorites: state.userFavorites.concat(action.payload)
				
		};

	

		case REMOVE_FROM_FAVORITES:
			return {
				...state,
				userFavorites: state.userFavorites.filter((prod) => prod.id !== action.payload.id),

		};

		default:
			return state;
	}
}

export default userAccountReducer;
