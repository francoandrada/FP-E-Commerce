import { GET_RATES} from '../actionsName';

const initialState = {
	arsBtc: undefined,
    updateTime: undefined
};

function cryptoReducer(state = initialState, action) {
	switch (action.type) {
		case GET_RATES:
			return {
				...state,
				arsBtc: action.payload.ARS.rate_btc,
                updateTime: action.payload.ARS.last_update
			};
		default:
			return state;
	}
}
export default cryptoReducer;
