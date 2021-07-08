// import logo from './logo.svg';

import LogIn from './components/LogIn/LogIn';
import './App.css';
import { Route, Switch } from 'react-router';
import Register from './components/Register/Register';
// import { Link } from 'react-router-dom';
import AuthUser from './components/AuthUser.js/AuthUser';

import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<div className='App'>
			{/* <Link to='/navbar'>
				<button>Navbar</button>
			</Link>
			<Link to='/login'>
				<button>LogIn</button>
			</Link>
			<br />
			<Link to='register'>
				<button>Register</button>
			</Link> */}
			<Navbar />
			<Switch>
				<Route path='/' exact component={AuthUser} />
				<Route path='/LogIn' exact component={LogIn} />
				<Route path='/register' exact component={Register} />
				{/* <Route path='/navbar' exact component={Navbar} /> */}
			</Switch>
		</div>
	);
}

export default App;
