import { FILTER_STOCK,CLEAN_FILTERS } from '../actionsName';

const initialState = {
	order: '',
};

function stockReducer(state = initialState, action) {
	switch (action.type) {
		case FILTER_STOCK:
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
export default stockReducer;