import { GET_PRODUCTS, PRODUCT_DETAIL } from "../actionsName";

const initialState = {
    allProducts: [],
    detailProducts: {},
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            }
        case PRODUCT_DETAIL:
            return {
                ...state,
                detailProducts: action.payload
            }
        default:
            return state
    }
}
export default productReducer;