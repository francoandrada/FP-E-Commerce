import { DELETE, GET_AVERAGE } from '../actionsName';

const initialState = {
	stars: [],
};
function reviewsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_AVERAGE:
			return {
				stars: action.payload,
    }
		case DELETE:
			return {
				stars: [],
			};
		default:
			return state;
	}
}
export default reviewsReducer;
