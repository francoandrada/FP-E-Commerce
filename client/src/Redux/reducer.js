import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer';
import brandsReducer from './reducers/brandReducer';
import orderReducer from './reducers/orderReducer';
import cartReducer from './reducers/cartReducer';
import adminReducer from './reducers/adminReducer';
import stockReducer from './reducers/stockReducer';
import userAccountReducer from './reducers/userAccountReducer';
import reviewsReducer from './reducers/reviewsReducer';
import cryptoReducer from './reducers/cryptoReducer';

export default combineReducers({
	user: userReducer,
	product: productReducer,
	category: categoryReducer,
	brands: brandsReducer,
	order: orderReducer,
	cart: cartReducer,
	admin: adminReducer,
	stock: stockReducer,
	useraccount: userAccountReducer,
	reviews: reviewsReducer,
	crypto: cryptoReducer
});
