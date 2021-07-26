import { DELETE, GET_AVERAGE, SAVE_DATA } from '../actionsName';

const initialState = {
	stars: [],
	data: undefined
};
function reviewsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_AVERAGE:
			return {
				stars: action.payload,
    }

		default:
			return state;
	}
}
export default reviewsReducer;
