import { ALL_REVIEWS, ALL_STARS, GET_AVERAGE} from '../actionsName';

const initialState = {
	stars: undefined,
	review: undefined,
	allStars: undefined
};
function reviewsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_AVERAGE:
			return {
				...state,
				stars: action.payload,
			};
		case ALL_REVIEWS:
			return {
				...state,
				review: action.payload,
			};
		case ALL_STARS:
			return{
				...state,
				allStars: action.payload
			}

		default:
			return state;
	}
}
export default reviewsReducer;
