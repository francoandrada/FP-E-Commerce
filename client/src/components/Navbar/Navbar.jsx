import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartModal from '../CartModal/CartModal';
import {
	authUser,
	getSuggestions,
	logOut,
	cleanSuggestions,
} from '../../Redux/actions';

import LogoStyle from '../StyledComponents/LogoStyle';
import styles from './Navbar.module.css';

const Navbar = () => {
	const [display, setDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	const [search, setSearch] = useState('');
	const wrapperRef = useRef(null);
	const dispatch = useDispatch();
	const history = useHistory();
	const token = useSelector((state) => state.user.token);

	//CARRITO
	const [cartCount, SetCartCount] = useState(0);

	const cart = useSelector((state) => state.cart.cart);

	useEffect(() => {
		let count = 0;
		if (cart !== null) {
			cart.forEach((item) => {
				count = count + item.qty;
			});
		}
		SetCartCount(count);
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart, cartCount]);

	useEffect(() => {
		axios
			.get('http://localhost:3001/products')
			.then((res) => {
				const suggestions = res.data.map(({ name }) => name);
				setOptions(suggestions);
			})
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		dispatch(authUser());
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
		if (search.trim()) {
			dispatch(cleanSuggestions());
			history.push('/searchproduct');
			dispatch(getSuggestions(search));
			setSearch('');
		} else {
			setSearch('');
		}
	};

	<button onclick='myFunction()'>Click me</button>;
	return (
		<>
			<div className={styles.navbarEcommerce}>
				<div className={styles.leftSideEcommerce}>
					<div className={styles.storeNameEcommerce}>
						<Link to='/'>
							<LogoStyle>HardwareStore</LogoStyle>
						</Link>
					</div>
				</div>

				<div className={styles.rightSideEcommerce}>
					<div className={styles.theSearchBarEcommerce}>
						<div
							className={`${styles.flexContainerEcommerce} ${styles.flexColumnEcommerce} ${styles.posRelEcommerce}`}
							ref={wrapperRef}
						>
							<input
								className={styles.inputEcommerce}
								value={search}
								onClick={() => setDisplay(!display)}
								onChange={(event) => setSearch(event.target.value)}
								placeholder='Search...'
							/>
							{display && (
								<div className={styles.autoContainerEcommerce}>
									{options
										.filter((product) =>
											product.toLowerCase().includes(search.toLowerCase())
										)
										.slice(0, 7)
										.map((value, index) => {
											return (
												<div
													className={styles.optionEcommerce}
													onClick={() => searchHandle(value)}
													key={index}
													tabIndex='0'
												>
													<span className={styles.spanEcommerce}>{value}</span>
												</div>
											);
										})}
								</div>
							)}

							<button
								className={styles.searchBtnEcommerce}
								onClick={searchProduct}
							>
								<i className='fas fa-search'></i>
							</button>
						</div>
					</div>
				</div>
				<div className={styles.linksNavEcommerce}>
					{token ? (
						<button
							type='submit'
							className={styles.but}
							onClick={() => {
								dispatch(logOut());
							}}
						>
							Log Out
						</button>
					) : (
						<>
							<Link to='/register'>Sign Up</Link>
							<Link to='/LogIn'>Login</Link>
						</>
					)}
					<div className={styles.cartLogoContainer}>
						<CartModal />
						{cartCount !== 0 ? (
							<div className={styles.countCart}>
								<p>{cartCount}</p>
							</div>
						) : null}
					</div>
				</div>
			</div>
			<div className={styles.sectionsContainer}>
				<div className={styles.sections}>
					<Link to='/'>Home</Link>
					<Link to='/catalog'>Catalog</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
