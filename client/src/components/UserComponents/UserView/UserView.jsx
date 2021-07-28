import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getUserOrders, getProducts, getUserFavorites, logOut } from '../../../Redux/actions';
import UserOrdersList from '../UserOrders/UserOrdersList';
import EditAccount from '../UserAccount/EditAccount';
import UserAccount from '../UserAccount/UserAccount';
import UserFavorite from '../UserFavorites/UserFavorites';
import UserAddresses from '../UserAddresses/UserAddresses'
import style from './UserView.module.css';
import {
	FiUser,
	FiChevronRight,
	FiBox,
	FiHeart,
	FiHome,
	FiLogOut,
} from 'react-icons/fi';

function UserView() {
	const userInfo = useSelector((state) => state.user);
	const userData = userInfo.userData && userInfo.userData;
	const userId = useSelector((state) => state.user.userData.userId);
	const dispatch = useDispatch();
	const history = useHistory();
	const [selectedOption, setSelectedOption] = useState('account');

	useEffect(() => {
		dispatch(getUserOrders(userId));
		dispatch(getProducts());
		dispatch(getUserFavorites(userId));
	}, [dispatch]);

	function setOption(event) {
//		console.log('id', event.target.id);
//		setSelectedOption(event.target.id);
		setSelectedOption(prevOp => prevOp = event.target.id);
	}

	let currentPanel = null;


/*	if (selectedOption === 'orders') {
		currentPanel = <UserOrdersList />;
	} else if (selectedOption === 'account') {
		currentPanel = <UserAccount setOption={setOption} />;
	} else if (selectedOption === 'edit') {
		currentPanel = <EditAccount setOption={setOption} />;
	} */
  
    if (selectedOption === 'orders') {
        currentPanel = <UserOrdersList /> 
    } else if (selectedOption === 'account') {
        currentPanel = <UserAccount setOption={setOption}/>
    } else if (selectedOption === 'edit') {
        currentPanel = <EditAccount setOption={setOption}/>
    } else if (selectedOption === 'favorites') {
        currentPanel = <UserFavorite/>
    } else if (selectedOption === 'addresses') {
		currentPanel = <UserAddresses/>
	}

	const handleLogOut = () => {
		dispatch(logOut());
		history.push('/');
		window.location.reload();
	};

	return (
		<div>
			<div className={style.userViewContainer}>
				<div className={style.optionsPanelContainer}>
					<div className={style.optionsContainer}>
						<span>Welcome {userData.name}!</span>

						<div
							onClick={setOption}
							id='account'
							className={style.optionsLayoutdiv}
						>
							<div className={style.subcontainerOptions} onClick={setOption} id='account'>
								<FiUser onClick={setOption} id='account'/>
								<p className={style.textOptionStyle} onClick={setOption} id='account'>Account</p>
							</div>
							<FiChevronRight onClick={setOption} id='account'/>
						</div>
					
						<div
					onClick={setOption}
							id='orders'
							className={style.optionsLayoutdiv}
						>
							<div className={style.subcontainerOptions} onClick={setOption} id='orders'>
								<FiBox />
								<p className={style.textOptionStyle} onClick={setOption} id='orders'>My Orders</p>
							</div>
							<FiChevronRight onClick={setOption} id='orders'/>
						</div>

						<div
						onClick={setOption}
							id='favorites'
							className={style.optionsLayoutdiv}
						>
							<div className={style.subcontainerOptions} onClick={setOption} id='favorites'>
								<FiHeart onClick={setOption} id='favorites'/>
								<p className={style.textOptionStyle} onClick={setOption} id='favorites'>Favorites</p>
							</div>
							<FiChevronRight onClick={setOption} id='favorites'/>
						</div>

						<div
						onClick={setOption}
							id='addresses'
							className={style.optionsLayoutdiv}
						>
							<div className={style.subcontainerOptions} onClick={setOption} id='addresses'>
								<FiHome onClick={setOption} id='addresses'/>
								<p className={style.textOptionStyle} onClick={setOption} id='addresses'>Addresses</p>
							</div>
							<FiChevronRight onClick={setOption} id='addresses'/>
						</div>

						<div
						onClick={handleLogOut}
							id='signout'
							className={style.optionsLayoutdiv}
						>
							<div className={style.subcontainerOptions} onClick={handleLogOut} id='signout'>
								<FiLogOut onClick={handleLogOut} id='signout'/>
								<p className={style.textOptionStyle} onClick={handleLogOut} id='signout'>Log Out</p>
							</div>
							<FiChevronRight onClick={handleLogOut} id='signout'/>
						</div>
					</div>
				</div>

				<div className={style.userPanelSelectedContainer}>{currentPanel}</div>
			</div>
		</div>
	);
}

export default UserView;
