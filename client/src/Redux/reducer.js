import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer';
import brandsReducer from './reducers/brandReducer';
import priceReducer from './reducers/priceReducer';
import cartReducer from './reducers/cartReducer';


export default combineReducers({
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    brands: brandsReducer,
    price: priceReducer,
    cart: cartReducer

})

