import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getSuggestions } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Navbar.css';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const [display, setDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	const [search, setSearch] = useState('');
	const wrapperRef = useRef(null);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		axios
			.get('http://localhost:3001/products')
			.then((res) => {
				const suggestions = res.data.product.map(({ name }) => name);
				setOptions(suggestions);
			})
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(event.target)) {
			setDisplay(false);
		}
	};

	const searchHandle = (product) => {
		setSearch(product);
		setDisplay(false);
	};

	const searchProduct = (event) => {
		event.preventDefault();
		history.push('/searchproduct');
		dispatch(getSuggestions(search));
		setSearch('');
	};

	return (
		<div className='navbar'>
			<div className='leftSide'>
				<div className='links' id={showLinks ? 'hidden' : ''}>
					<Link to='/LogIn'>Login</Link>
					<Link to='/register'>Register</Link>
					<Link to='/catalog'>Catalog</Link>
				</div>
				<button onClick={() => setShowLinks(!showLinks)}>Open</button>
			</div>

			<div className='rightSide'>
				<div className='flex-container flex-column pos-rel' ref={wrapperRef}>
					<input
						value={search}
						onClick={() => setDisplay(!display)}
						onChange={(event) => setSearch(event.target.value)}
						placeholder='Search...'
					/>
					{display && (
						<div className='autoContainer'>
							{options
								.filter((product) =>
									product.toLowerCase().includes(search.toLowerCase())
								)
								.slice(0, 7)
								.map((value, index) => {
									return (
										<div
											className='option'
											onClick={() => searchHandle(value)}
											key={index}
											tabIndex='0'
										>
											<span>{value}</span>
										</div>
									);
								})}
						</div>
					)}
				</div>
				<button onClick={searchProduct} className='search-btn'>
					Search
				</button>
			</div>
		</div>
	);
};

export default Navbar;
