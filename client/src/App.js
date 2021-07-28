import { Route, Switch, withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getHighlightProd, getRates } from './Redux/actions';

import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import ForgotPassword from './components/LogIn/ForgotPassword';
import ResetPassword from './components/LogIn/ResetPassword';
import Catalog from './components/Catalog/Catalog';
import Home from './components/ContainerComponents/Home/Home';
import SearchProducts from './components/searchProducts/SearchProducts';
import DetailProduct from './components/ProductDetail/ProductDetail';
import ShoppingCart from './components/ContainerComponents/ShoppingCart/ShoppingCart';
import Footer from './components/ContainerComponents/Footer/Footer';
import AdminRoutes from './components/Routes/AdminRoutes';
import UserView from './components/UserComponents/UserView/UserView';
import AboutView from './components/AboutSection/AboutView';
import ContactForm from './components/ContactForm/ContactForm';
import Error404View from './components/ErrorComponents/Error404View';
import CryptoSection from './components/CryptoSection/CryptoSection';

import './App.css';

// import ProductCartModal from './components/CartModal/ProductCartModal';
import CartModal from './components/CartModal/CartModal';
import WebHook from './components/ShoppingCartComponents/WebHook';
import Shipping from './components/ShoppingCartComponents/Shipping';
import UserReview from './components/Reviews/UserReview';
import Bot from './components/ChatBot/ChatBot';

function App({ location }) {
	//The next function allows the store to update the ars/btc rates every X time
	const dispatch = useDispatch();
	let updateInterval = 60000 * 5 //60000 miliseconds = 1 minuto
	let [timer, setTimer] = useState(0)
	useEffect(() => {
		dispatch(getRates());
	}, [timer]);
	setTimeout(()=>{
		console.log(timer)
		setTimer(timer+1)
	}, updateInterval);
	
	/* ======================================================
		ALL THE PATH NEED TO GO IN THE Switch COMPONENTS
	=======================================================*/
	return (
		<div className='App'>
			{!location.pathname.includes('/admin') && <Navbar />}
			<div className='totalvh'>
				{location.pathname.includes('/admin') && (
					<div className='adminn'>
						{/* <AdminRoutes /> */}
						<Route path='/admin' component={AdminRoutes} />
					</div>
				)}
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/LogIn' exact component={LogIn} />
					<Route path='/register' exact component={Register} />
					<Route path='/forgot-password' exact component={ForgotPassword} />
					<Route
						path='/reset-password/:resetLink'
						exact
						component={ResetPassword}
					/>
					<Route path='/catalog' exact component={Catalog} />
					<Route path='/catalog/:id' exact component={DetailProduct} />
					<Route path='/searchproduct' exact component={SearchProducts} />
					<Route path='/cartTest' exact component={CartModal} />
					<Route path='/shoppingcart' exact component={ShoppingCart} />
					<Route path='/shoppingcart/shipping' exact component={Shipping} />
					<Route path='/webhook' exact component={WebHook} />
					<Route path='/myaccount' exact component={UserView} />
					<Route path='/about' exact component={AboutView} />
					<Route path='/cryptopayments' exact component={CryptoSection} />
					<Route path='/error' exact component={Error404View} />
					<Route path='/review/:id' exact component={UserReview} />
					<Route path='/bot' exact component={Bot} />
					<Route path='/contact' exact component={ContactForm} />
				</Switch>
			</div>
			{!location.pathname.includes('/admin') && <Footer />}
		</div>
	);
}

export default withRouter(App);
