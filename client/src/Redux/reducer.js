import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import categoryReducer from './reducers/productReducer';


export default combineReducers({

    user: userReducer,
    product: productReducer,
    category: categoryReducer

})

