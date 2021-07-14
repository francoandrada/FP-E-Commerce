import { LIST_PRODUCT_ON_TABLE } from '../actionsName';

const initialState = {
	listProductsOnTable: undefined,
};

function adminReducer(state = initialState, { type, payload }) {
	switch (type) {
		case LIST_PRODUCT_ON_TABLE:
			return {
				...state,
				listProductsOnTable: payload,
			};
		default:
			return state;
	}
}

export default adminReducer;
