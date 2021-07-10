import LogIn from './components/LogIn/LogIn';
import { Route, Switch } from 'react-router';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import ForgotPassword from './components/LogIn/ForgotPassword';
import ResetPassword from './components/LogIn/ResetPassword';
import Catalog from './components/Catalog/Catalog';
import Home from './components/ContainerComponents/Home/Home';

import './App.css';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Route path='/' exact component={Home} />
			<Switch>
				<Route path='/LogIn' exact component={LogIn} />
				<Route path='/register' exact component={Register} />
				<Route path='/forgot-password' exact component={ForgotPassword} />
				<Route path='/reset-password/:resetLink' exact component={ResetPassword}/>
				<Route path='/catalog' exact component={Catalog} />
			</Switch>
		</div>
	);
}

export default App;
