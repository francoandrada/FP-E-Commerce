import { FILTER_PRICE,CLEAN_FILTERS } from '../actionsName';

const initialState = {
	order: '',
};

function priceReducer(state = initialState, action) {
	switch (action.type) {
		case FILTER_PRICE:
			return {
				...state,
				order: action.payload,
			};
		case CLEAN_FILTERS:
			return {
				...state,
				order: ''
			};
		default:
			return state;
	}
}
export default priceReducer;
