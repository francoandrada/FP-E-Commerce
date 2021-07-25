import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer';
import brandsReducer from './reducers/brandReducer';
import priceReducer from './reducers/priceReducer';
import cartReducer from './reducers/cartReducer';
import adminReducer from './reducers/adminReducer';
import stockReducer from './reducers/stockReducer';
import userAccountReducer from './reducers/userAccountReducer';
import chatBotReducer from './reducers/chatBotReducer';

import reviewsReducer from './reducers/reviewsReducer';
import cryptoReducer from './reducers/cryptoReducer';

export default combineReducers({
	user: userReducer,
	product: productReducer,
	category: categoryReducer,
	brands: brandsReducer,
	price: priceReducer,
	cart: cartReducer,
	admin: adminReducer,
	stock: stockReducer,
	useraccount: userAccountReducer,
<<<<<<< HEAD
	chatbot: chatBotReducer,
=======

	reviews: reviewsReducer,

	crypto: cryptoReducer

>>>>>>> main
});
