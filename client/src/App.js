import { Route, Switch, withRouter } from 'react-router';

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
import Error404View from './components/ErrorComponents/Error404View';

import './App.css';

// import ProductCartModal from './components/CartModal/ProductCartModal';
import CartModal from './components/CartModal/CartModal';
import WebHook from './components/ShoppingCartComponents/WebHook';

function App({ location }) {
	/* ======================================================
		ALL THE PATH NEED TO GO IN THE Switch COMPONENTS
	=======================================================*/

	return (
		<div className='App'>
			<div></div>
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
					<Route path='/webhook' exact component={WebHook} />
					<Route path='/myaccount' exact component={UserView} />
					<Route path='/error' exact component={Error404View} />
				</Switch>
			</div>
			{!location.pathname.includes('/admin') && <Footer />}
		</div>
	);
}

export default withRouter(App);
