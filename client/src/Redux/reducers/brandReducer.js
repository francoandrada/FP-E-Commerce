import {
	GET_BRANDS,
	SELECTED_BRANDS,
	FILTER_BRANDS,
	CLEAN_FILTERS
} from '../actionsName';

const initialState = {
	allBrands: [],
	selectedBrand: ''
};

function brandsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_BRANDS:
			return {
				...state,
				allBrands: action.payload
			};
		case SELECTED_BRANDS:
			return {
				...state,
				selectedBrand: action.payload
			};
		case FILTER_BRANDS:
			return {
				...state,
				selectedBrand: action.payload
			};

		case CLEAN_FILTERS:
			return {
				...state,
				selectedBrand: ''
			};
		default:
			return state;
	}
}
export default brandsReducer;
