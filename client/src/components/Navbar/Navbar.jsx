import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../Searchbar/Searchbar.jsx';
import './Navbar.css';

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
	defaultOptions.push(`hardware ${i}`);
	defaultOptions.push(`keyboard ${i}`);
	defaultOptions.push(`RAM ${i}`);
}

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const [options, setOptions] = useState([]);
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3001/products')
			.then((res) => setSuggestions(res.data))
			.catch((error) => console.log(error));
	}, []);

	const productsSuggestions = suggestions.map(({ name }) => name.toLowerCase());

	const onInputChange = (event) => {
		if (event.target.value.trim().length)
			setOptions(
				productsSuggestions.filter((suggestion) =>
					suggestion.includes(event.target.value)
				)
			);
	};

	return (
		<div className='navbar'>
			<div className='leftSide'>
				<div className='links' id={showLinks ? 'hidden' : ''}>
					<Link to='/'>AuthUser</Link>
					<Link to='/LogIn'>Login</Link>
					<Link to='/register'>Register</Link>
				</div>
				<button onClick={() => setShowLinks(!showLinks)}>Open</button>
			</div>

			<div className='rightSide'>
				<SearchBar options={options} onInputChange={onInputChange} />
				<button className='search-btn'>Search</button>
			</div>
		</div>
	);
};

export default Navbar;
