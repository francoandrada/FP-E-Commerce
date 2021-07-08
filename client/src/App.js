import { Route, Switch } from 'react-router';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import AuthUser from './components/AuthUser.js/AuthUser';
import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route path='/' exact component={AuthUser} />
				<Route path='/LogIn' exact component={LogIn} />
				<Route path='/register' exact component={Register} />
			</Switch>
		</div>
	);
}

export default App;
