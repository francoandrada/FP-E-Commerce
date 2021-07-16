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
import Table from './components/AdminComponents/Table/Table'
import './App.css';

import ProductCartModal from './components/CartModal/ProductCartModal';
import CartModal from './components/CartModal/CartModal';
import Admin from './components/AdminComponents/Admin/Admin'
import AdminCategories from './components/AdminComponents/AdminCategories/AdminCategories.jsx';
import PutCategory from './components/AdminComponents/adminPutForm/putCategory'
import PutProduct from './components/AdminComponents/adminPutForm/putProduct'
import AdminBrands from './components/AdminComponents/AdminBrands/AdminBrands'
import PutBrand from './components/AdminComponents/adminPutForm/putBrand'
import AdminUsers from './components/AdminComponents/AdminUsers/AdminUsers';
import UserPanel from './components/AdminComponents/AdminUsers/UserPanel';
import Success from './components/ShoppingCartComponents/Success';




function App() {
	return (
		<div className='App'>
			<div class='totalvh'>
				<Navbar />
					<Route path='/admin' exact component={Admin}/>
					<Route path='/admin/products' exact component={Table}/>
					<Route path='/admin/putproduct/:id' exact component={PutProduct}/>
					<Route path='/admin/user/:email' exact component={UserPanel}/>
					<Route path='/admin/users' exact component={AdminUsers}/>
					<Route path='/admin/orders' exact component={Admin}/>
					<Route path='/admin/categories' exact component={AdminCategories}/>
					<Route path='/admin/putCategory/:id' exact component={PutCategory}/>
					<Route path='/admin/brands' exact component={AdminBrands}/>
					<Route path='/admin/putbrands/:id' exact component={PutBrand}/>
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


					<Route path='mercadopago/success' exact component={Success} />
				
				</Switch>
			</div>
			<Route path='/' component={Footer} />
		</div>
	);
}

export default App;
