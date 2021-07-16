import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router';

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
import Table from './components/AdminComponents/Table/Table';
import Swal from 'sweetalert2';
import AdminRoutes from './components/Routes/AdminRoutes';

import './App.css';

// import ProductCartModal from './components/CartModal/ProductCartModal';
import CartModal from './components/CartModal/CartModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logOut } from './Redux/actions';

function App({ location }) {
	/* ======================================================
		ALL THE PATH NEED TO GO IN THE Switch COMPONENTS
	=======================================================*/

	const dispatch = useDispatch();
	const errorToken = useSelector((state) => state.user.errorToken);
	console.log(errorToken);
	useEffect(() => {
		if (errorToken) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Your session has expired, please login again',
			});
			dispatch(logOut());
		}
	}, [errorToken]);

	return (
		<div className='App'>
			<div class='totalvh'>
				{!location.pathname.includes('/admin') && <Navbar />}

				<AdminRoutes />

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

					<Route path='/table' exact component={Table} />
				</Switch>
			</div>
			<Route path='/' component={Footer} />
		</div>
	);
}

export default withRouter(App);
