// import logo from './logo.svg';
import LogIn from './components/LogIn/LogIn';
import './App.css';
import { Route } from 'react-router';
import Register from './components/Register/Register';
import { Link } from 'react-router-dom';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
	return (
		<div className='App'>
			<Link to='/search'>
				<button>SearchBar</button>
			</Link>
			<Link to='/login'>
				<button>LogIn</button>
			</Link>
			<br />
			<Link to='register'>
				<button>Register</button>
			</Link>
			<Route path='/LogIn' exact component={LogIn} />
			<Route path='/register' exact component={Register} />
			<Route path='/search' exact component={Searchbar} />
		</div>
	);
}

export default App;
