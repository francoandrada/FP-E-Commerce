import { GET_CATEGORIES, SELECTED_CATEGORY } from "../actionsName";

const initialState = {
    allCategories: [],
    selectCategory: [],
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload,
            }
        case SELECTED_CATEGORY:
            //falta hacer
            return {
                ...state,
                selectedCategory: action.payload
            }
        default:
            return state
    }
}
export default categoryReducer;