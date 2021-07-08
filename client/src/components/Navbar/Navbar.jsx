import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Searchbar/SearchBar.jsx';
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
	const onInputChange = (event) => {
		if (event.target.value.trim().length)
			setOptions(
				defaultOptions.filter((option) => option.includes(event.target.value))
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
/*
		<NavContainer>
			<LeftSide>
				<div className='links' id={showLinks ? 'hidden' : ''}>
					<Link to='/'>AuthUser</Link>
					<Link to='/LogIn'>Login</Link>
					<Link to='/register'>Register</Link>
				</div>
				<button onClick={() => setShowLinks(!showLinks)}>Open</button>
			</LeftSide>

			<RightSide>
				<SearchBar options={options} onInputChange={onInputChange} />
				<SearchButton>Search</SearchButton>
			</RightSide>
		</NavContainer>
*/
