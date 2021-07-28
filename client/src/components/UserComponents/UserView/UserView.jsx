import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getUserOrders, getProducts, getUserFavorites } from '../../../Redux/actions';
import UserOrdersList from '../UserOrders/UserOrdersList';
import EditAccount from '../UserAccount/EditAccount';
import UserAccount from '../UserAccount/UserAccount';
import UserFavorite from '../UserFavorites/UserFavorites'
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
    }

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
					onClick={setOption}
							id='signout'
							className={style.optionsLayoutdiv}
						>
							<div className={style.subcontainerOptions} onClick={setOption} id='signout'>
								<FiLogOut onClick={setOption} id='signout'/>
								<p className={style.textOptionStyle} onClick={setOption} id='signout'>Sign Out</p>
							</div>
							<FiChevronRight onClick={setOption} id='signout'/>
						</div>
					</div>
				</div>

				<div className={style.userPanelSelectedContainer}>{currentPanel}</div>
			</div>
		</div>
	);
}

export default UserView;
