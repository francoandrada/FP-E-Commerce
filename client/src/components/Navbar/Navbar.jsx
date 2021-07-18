import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
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
	const userData = useSelector((state) => state.user.userData)
	const userName = useSelector((state) => state.user.userData);


	const errorToken = useSelector((state) => state.user.errorToken);
	console.log(errorToken);
	useEffect(() => {
		if (errorToken) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Your session has expired, please login again',
			});
			dispatch(logOut());
		}
	}, [errorToken]);




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
		localStorage.setItem("userData", JSON.stringify(userName));
	}, [userName]);

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
	console.log(userData)
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
					{userData && userData.admin!== true ? (
						<Link to='/myaccount'> My Account </Link>
					) : null }
					{userData && userData.admin === true ? (
					<div>
						<Link to='/admin'>Admin Panel</Link>
					</div>
					) : null
					}
					{token ? (
						<div class='d-block mt-4'>
							<button
								type='submit'
								className={styles.but}
								onClick={() => {
									dispatch(logOut());
								}}
							>
								Log Out
							</button>
							{Array.isArray(userName) ? <p class='text-white h6' >Hi, {userName.email}!</p>

								:
								<p class='text-white h6' >Hi, {userName.name}!</p>

							}

						</div>
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
