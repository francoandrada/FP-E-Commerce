import { ALL_REVIEWS, ALL_STARS, DELETE, GET_AVERAGE, SAVE_DATA } from '../actionsName';

const initialState = {
	stars: [],
	review: undefined,
	allStars: null
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
			console.log(action.payload)
			return{
				...state,
				allStars: action.payload
			}

		default:
			return state;
	}
}
export default reviewsReducer;
