import LogIn from './components/LogIn/LogIn';
import { Route, Switch } from 'react-router';
import Register from './components/Register/Register';
// import { Link } from 'react-router-dom';
import AuthUser from './components/AuthUser.js/AuthUser';
import Navbar from './components/Navbar/Navbar';
import ForgotPassword from './components/LogIn/ForgotPassword';
import ResetPassword from './components/LogIn/ResetPassword';
import Catalog from './components/Catalog/Catalog';
import Home from './components/ContainerComponents/Home/Home';
import SearchProducts from './components/searchProducts/SearchProducts';

import './App.css';
import DetailProduct from './components/ProductDetail/ProductDetail';
function App() {
	return (
		<div className='App'>
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
			</Switch>
		</div>
	);
}

export default App;
