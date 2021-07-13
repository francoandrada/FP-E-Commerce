import { GET_BRANDS, SELECTED_BRANDS,CLEAN_FILTERS } from '../actionsName';

const initialState = {
	allBrands: [],
	selectBrand: '',
};

function brandsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_BRANDS:
			return {
				...state,
				allBrands: action.payload,
			};
		case SELECTED_BRANDS:
			//falta hacer
			return {
				...state,
				selectedBrand: action.payload,
			};

		case CLEAN_FILTERS:
			return {
				...state,
				selectBrand: ''
			};
		default:
			return state;
	}
}
export default brandsReducer;
