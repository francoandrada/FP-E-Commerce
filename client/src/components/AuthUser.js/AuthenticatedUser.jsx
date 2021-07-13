import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, logOut } from '../../Redux/actions';
import styles from '../Navbar/Navbar.module.css';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const AuthenticatedUser = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const token = useSelector((state) => state.user.token);

	console.log(token);

	useEffect(() => {
		dispatch(authUser());
		
	}, []);

	
	
	return (
		<div className={styles.linksNavEcommerce}>
			<Link to='/'>Home</Link>
			<Link to='/catalog'>Catalog</Link>

			{token ? (
				<button type="submit" 
				className={styles.but}
				onClick={() =>{ dispatch(logOut())}}
				>Log Out</button>
	
			) : (
				<Fragment>
					<Link to='/register'>Sing Up</Link>
					<Link to='/LogIn'>Login</Link>
				</Fragment>
			)}
		</div>
	);
};

export default AuthenticatedUser;
