import { GET_PRODUCTS, PRODUCT_DETAIL, GET_HIGHLIGHTS } from '../actionsName';

const initialState = {
	allProducts: [],
	detailProducts: {},
	highlights: []
};

function productReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			console.log(action.payload);
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
				highlights: action.payload
			};
		default:
			return state;
	}
}
export default productReducer;
