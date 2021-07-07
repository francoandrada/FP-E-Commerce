import logo from './logo.svg';
import LogIn from './components/LogIn/LogIn';
import './App.css';
import { Route } from 'react-router';
import Register from './components/Register/Register';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Link to='/login'>
				<buttom>LogIn</buttom>
			</Link>
			<br />
			<Link to='register'>
				<buttom>Register</buttom>
			</Link>
			<Route path='/LogIn' exact component={LogIn} />
			<Route path='/register' exact component={Register} />
		</div>
	);
}

export default App;
