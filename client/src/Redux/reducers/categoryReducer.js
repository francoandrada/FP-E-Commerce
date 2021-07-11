import { GET_CATEGORIES, SELECTED_CATEGORY, FILTER_CATEGORIES} from "../actionsName";

const initialState = {
    allCategories: [],
    selectCategory: [],
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            console.log(action.payload)
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
        case FILTER_CATEGORIES:
            return {
                    ...state,
                    selectedCategory: action.payload
                }
        default:
            return state
    }
}
export default categoryReducer;