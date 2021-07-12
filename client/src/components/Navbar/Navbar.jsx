import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { authUser, getSuggestions, logOut } from '../../Redux/actions';
// import { useModal } from '../../hooks/useModal';
// import { useKey } from '../../hooks/useKey';

import LogoStyle from '../StyledComponents/LogoStyle';
// import Modal from '../Modal/Modal';
import styles from './Navbar.module.css';
import AuthenticatedUser from '../AuthUser.js/AuthenticatedUser';

const Navbar = () => {
	// const [isOpenModal, openModal, closeModal] = useModal(false);
	// const [showLinks, setShowLinks] = useState(false);
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
				const suggestions = res.data.map(({ name }) => name);
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
		if (search.trim()) {
			history.push('/searchproduct');
			dispatch(getSuggestions(search));
			setSearch('');
		} else {
			setSearch('');
		}
	};

	const user = useSelector((state) => state.user.user);

	useEffect(() => {
		dispatch(authUser());
	}, []);

	const myFunction = () => {
		dispatch(logOut());
	};

	<button onclick='myFunction()'>Click me</button>;
	return (
		<div className={styles.navbarEcommerce}>
			<div className={styles.leftSideEcommerce}>
				<div className={styles.storeNameEcommerce}>
					<Link to='/'>
						<LogoStyle>HardwareStore</LogoStyle>
					</Link>
				</div>
			</div>

			<div className={styles.rightSideEcommerce}>
		<AuthenticatedUser />
	

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
					</div>
					<button className={styles.searchBtnEcommerce} onClick={searchProduct}>
						<i className='fas fa-search'></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
