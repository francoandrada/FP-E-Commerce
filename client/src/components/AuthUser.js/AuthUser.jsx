import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, logOut } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const AuthUser = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	const user = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(authUser());
	}, []);

	return (
		<div>
			{user ? (
				<div>
					<p>Hola usuario cleinte</p>
					<p>MERCADO PAGO</p>
					<button type='submit' onClick={() => dispatch(logOut())}>
						Log Out
					</button>
				</div>
			) : (
				<p>Hola usuario guest</p>
			)}
		</div>
	);
};

export default AuthUser;
