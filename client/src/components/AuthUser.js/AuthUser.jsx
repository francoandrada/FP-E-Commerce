import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, logIn, logOut } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const AuthUser = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	const user = useSelector((state) => state.user);
	console.log('imprimiento authenticated', user);

	useEffect(() => {
		dispatch(authUser());
	}, []);

	return (
		<div>
			{user ? (
				<div>
					<p>Hola</p>

					<button type='submit' onClick={() => dispatch(logOut())}>
						Log Out
					</button>
				</div>
			) : (
				<>
					<Link to='/logIn'>
						<button>LogIn</button>
					</Link>
					<Link to='/register'>
						<button>Register</button>
					</Link>
				</>
			)}
		</div>
	);
};

export default AuthUser;
