import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import CartModal from '../CartModal/CartModal';
import FavModal from '../FavoriteComponent/FavModal';
import {
	authUser,
	getSuggestions,
	logOut,
	cleanSuggestions,
	getCartUser,
	postCartUser,
	postUserFavorites,
	getUserFavorites,
	deleteCart
} from '../../Redux/actions';

import { FaHeart } from 'react-icons/fa';
import LogoStyle from '../StyledComponents/LogoStyle';
import styles from './Navbar.module.css';
import './index.css';

const Navbar = () => {
	const [display, setDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	const [search, setSearch] = useState('');
	const wrapperRef = useRef(null);
	const dispatch = useDispatch();
	const history = useHistory();

	const token = useSelector(state => state.user.token);
	const userData = useSelector(state => state.user.userData);
	const userName = useSelector(state => state.user.userData);

	const errorToken = useSelector(state => state.user.errorToken);
	const userId = useSelector(state => state.user.userData.userId);

	useEffect(() => {
		if (errorToken) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Your session has expired, please login again'
			});
			dispatch(logOut());
			dispatch(deleteCart());
		}
	}, [errorToken]);

	//CARRITO
	const [cartCount, SetCartCount] = useState(0);
	const authenticated = useSelector(state => state.user.authenticated);
	const cart = useSelector(state => state.cart.cart);

	useEffect(() => {
		if (authenticated) {
			setTimeout(() => {
				dispatch(getCartUser(userId));
			}, 1000);
		}
	}, [authenticated]);

	useEffect(() => {
		let count = 0;
		if (cart !== null) {
			cart.forEach(item => {
				count = count + item.qty;
			});
		}
		SetCartCount(count);
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart, cartCount]);

	//FAVORITES
	const favorites = useSelector(state => state.useraccount.userFavorites);

	useEffect(() => {
		localStorage.setItem('userFavorites', JSON.stringify(favorites));
	}, [favorites]);

	useEffect(() => {
		if (authenticated) {
			// localStorage.removeItem('userFavorites', JSON.stringify(favorites));
			setTimeout(() => {
				dispatch(getUserFavorites(userId));
			}, 2000);
		}
	}, [authenticated]);

	useEffect(() => {
		localStorage.setItem('userData', JSON.stringify(userName));
	}, [userName]);

	useEffect(() => {
		axios
			.get('http://localhost:3001/products')
			.then(res => {
				const suggestions = res.data.map(({ name }) => name);
				setOptions(suggestions);
			})
			.catch(error => console.log(error));
	}, []);

	useEffect(() => {
		dispatch(authUser());
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleClickOutside = event => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(event.target)) {
			setDisplay(false);
		}
	};

	const searchHandle = product => {
		setSearch(product);
		setDisplay(false);
	};

	const searchProduct = event => {
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
	const handleClick = () => {
			axios.put('http://localhost:3001/favorites/user/favoritesupdate', {userId, favorites})
			.then((res) => {
				console.log(res);
			})
			.catch((error) => console.log(error));

			axios.put('http://localhost:3001/shoppingcart/userCart/update', {userId, cart})
			.then((res) => {
				console.log(res);
			})
			.catch((error) => console.log(error));

			setTimeout(() => {
				dispatch(logOut());
				history.push('/');
				window.location.reload();
			}, 1500);
		
	};

	return (
		<div className={styles.mainContainer}>
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
								onChange={event => setSearch(event.target.value)}
								placeholder='Search...'
							/>
							{display && (
								<div className={styles.autoContainerEcommerce}>
									{options
										.filter(product =>
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
					{userData && userData.admin === false ? (
						<Link to='/myaccount'> My Account </Link>
					) : null}
					{userData && userData.admin === true ? (
						<div>
							<Link to='/admin'>Admin Panel</Link>
						</div>
					) : null}
					{token ? (
						<div
							className={
								window.screen.width > 430 ? 'd-block mt-4' : 'LogOutContainer'
							}
						>
							<button
								type='submit'
								className={styles.but}
								onClick={() => handleClick()}
							>
								Log Out
							</button>

							{Array.isArray(userName) ? (
								<p
									className={
										window.screen.width > 430 ? 'text-white h6' : 'HiUser'
									}
								>
									Hi, {userName.email}!
								</p>
							) : (
								<p
									className={
										window.screen.width > 430 ? 'text-white h6' : 'HiUser'
									}
								>
									Hi, {userName.name}!
								</p>
							)}
						</div>
					) : (
						<>
							<Link to='/register'>Sign Up</Link>
							<Link to='/LogIn'>Login</Link>
						</>
					)}
					<div className={styles.IconsContainer}>
						<div className={styles.favHeartContainer}>
							<FavModal />
						</div>

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
			</div>
			<div className={styles.sectionsContainer}>
				<div className={styles.sections}>
					<Link to='/'>Home</Link>
					<Link to='/catalog'>Catalog</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
