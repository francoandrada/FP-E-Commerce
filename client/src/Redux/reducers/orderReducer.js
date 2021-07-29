import { ORDER_PRODUCTS,CLEAN_FILTERS } from '../actionsName';

const initialState = {
	order_type: '',
	order_dir:''
};

function orderReducer(state = initialState, action) {
	switch (action.type) {
		case ORDER_PRODUCTS:
			console.log(action.payload)
			return {
				order_type: action.payload.order_type,
				order_dir: action.payload.order_dir
			};
		case CLEAN_FILTERS:
			return {
				order_type: '',
				order_dir: ''
			};
		default:
			return state;
	}
}
export default orderReducer;
