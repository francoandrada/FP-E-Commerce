import { GET_USER_ORDERS } from '../actionsName';

const initialState = {
	userOrdersList: [],
};

function userAccountReducer(state = initialState, action) {
	console.log(action.payload)
	switch (action.type) {
		case GET_USER_ORDERS:
			return {
				...state,
				userOrdersList: action.payload,
				
			};

		default:
			return state;
	}
}

export default userAccountReducer;
