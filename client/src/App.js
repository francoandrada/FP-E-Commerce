import LogIn from './components/LogIn/LogIn';
import './App.css';
import { Route } from 'react-router';
import Register from './components/Register/Register';
import { Link } from 'react-router-dom';
import AuthUser from './components/AuthUser.js/AuthUser';
import Navbar from './components/Navbar/Navbar';
import Catalog from './components/Catalog/Catalog';

function App() {
	return (
		<div className='App'>
			<Route path='/' exact component={AuthUser} />
			<Link to='/navbar'>
				<button>Navbar</button>
			</Link>
			<Route path='/LogIn' exact component={LogIn} />
			<Route path='/register' exact component={Register} />
			<Route path='/navbar' exact component={Navbar} />
			<Route path='/catalog' exact component={Catalog} />

		</div>
	);
}

export default App;
