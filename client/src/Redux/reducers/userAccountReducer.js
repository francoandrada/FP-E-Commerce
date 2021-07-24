import { GET_USER_ORDERS } from '../actionsName';

const initialState = {
	userOrdersList: [],
};

function userAccountReducer(state = initialState, action) {
	switch (action.type) {
		// case GET_USER_ORDERS:
		// 	return {
		// 		...state,
		// 		userOrdersList: action.payload,
				
		// 	};
		case GET_USER_ORDERS:
			console.log('desdereducer orrders payloaddd',action.payload)
			return {
				...state,
				userOrdersList: action.payload.map(el => {
					let status = el.status
					let orderId = el.orderDetails[0].orderId
					let orderProducts = el.orderDetails.map(prod => prod.product)
					return {orderId, status, orderProducts}
				})
			};

		default:
			return state;
	}
}

export default userAccountReducer;
