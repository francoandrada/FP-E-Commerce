import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, logOut } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';



const AuthenticatedUser = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user.user);

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
				null
			)}
		</div>
	);
};

export default AuthenticatedUser;
