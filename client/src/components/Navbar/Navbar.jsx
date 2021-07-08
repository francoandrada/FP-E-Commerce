import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Searchbar/Searchbar';
import './Navbar.css';

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
	defaultOptions.push(`option ${i}`);
	defaultOptions.push(`suggestion ${i}`);
	defaultOptions.push(`advice ${i}`);
}

function Navbar() {
	const [showLinks, setShowLinks] = useState(false);
	const [options, setOptions] = useState([]);
	const onInputChange = (event) => {
		setOptions(
			defaultOptions.filter((option) => option.includes(event.target.value))
		);
	};

	return (
		<div className='navbar'>
			<div className='leftSide'>
				<div className='links' id={showLinks ? 'hidden' : ''}>
					<Link to='/LogIn'>Login</Link>
					<Link to='/register'>Register</Link>
				</div>
				<button onClick={() => setShowLinks(!showLinks)}>Open</button>
			</div>

			<div className='rightSide'>
				<SearchBar options={options} onInputChange={onInputChange} />
			</div>
		</div>
	);
}

export default Navbar;
