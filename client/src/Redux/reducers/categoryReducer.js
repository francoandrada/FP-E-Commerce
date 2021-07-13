import {
	GET_CATEGORIES,
	SELECTED_CATEGORY,
	FILTER_CATEGORIES,
    CLEAN_FILTERS
} from '../actionsName';

const initialState = {
	allCategories: [],
	selectedCategory: '',
};

function categoryReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CATEGORIES:
			return {
				...state,
				allCategories: action.payload,
			};
		case SELECTED_CATEGORY:
			return {
				...state,
				selectedCategory: action.payload,
			};
		case FILTER_CATEGORIES:
			return {
				...state,
				selectedCategory: action.payload,
			};
		case CLEAN_FILTERS:
			return {
				...state,
				selectedCategory: ''
			};
		default:
			return state;
	}
}
export default categoryReducer;
