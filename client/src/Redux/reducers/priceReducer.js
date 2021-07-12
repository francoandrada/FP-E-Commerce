import { FILTER_PRICE} from "../actionsName";

const initialState = {
    order: "",
}

function priceReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_PRICE:
            return {
                ...state,
                order: action.payload,
            }
        default:
            return state
    }
}
export default priceReducer;