import { GET_BRANDS, SELECTED_BRANDS } from "../actionsName";

const initialState = {
    allBrands: [],
    selectBrand: [],
}

function brandsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BRANDS:
            return {
                ...state,
                allBrands: action.payload,
            }
        case SELECTED_BRANDS:
            //falta hacer
            return {
                ...state,
                selectedBrand: action.payload
            }
        default:
            return state
    }
}
export default brandsReducer;