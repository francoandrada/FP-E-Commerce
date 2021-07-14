import LogIn from './components/LogIn/LogIn';
import { Route, Switch } from 'react-router';
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
import Table from './components/Table/Table';
import './App.css';

function App() {
	return (
		<div className='App'>
			<div class='totalvh'>
				<Navbar />
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

					<Route path='/shoppingcart' exact component={ShoppingCart} />

					
					<Route path='/table' exact component={Table} />

				</Switch>
			</div>
			<Route path='/' component={Footer} />
		</div>
	);
}

export default App;
