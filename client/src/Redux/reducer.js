import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
export default combineReducers({
user: userReducer,
product: productReducer

})
// const rootReducer = combineReducers({user: userReducer, product: productReducer})


// export default rootReducer;