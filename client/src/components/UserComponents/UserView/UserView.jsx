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
							<div className={style.subcontainerOptions}>
								<FiUser />
								<p className={style.textOptionStyle}>Account</p>
							</div>
							<FiChevronRight />
						</div>

						<div
							onClick={setOption}
							id='orders'
							className={style.optionsLayoutdiv}
						>
							<div className={style.subcontainerOptions}>
								<FiBox />
								<p className={style.textOptionStyle}>My Orders</p>
							</div>
							<FiChevronRight />
						</div>

						<div
							onClick={setOption}
							id='favorites'
							className={style.optionsLayoutdiv}
						>
							<div className={style.subcontainerOptions}>
								<FiHeart />
								<p className={style.textOptionStyle}>Favorites</p>
							</div>
							<FiChevronRight />
						</div>

						<div
							onClick={setOption}
							id='addresses'
							className={style.optionsLayoutdiv}
						>
							<div className={style.subcontainerOptions}>
								<FiHome />
								<p className={style.textOptionStyle}>Addresses</p>
							</div>
							<FiChevronRight />
						</div>

						<div
							onClick={setOption}
							id='signout'
							className={style.optionsLayoutdiv}
						>
							<div className={style.subcontainerOptions}>
								<FiLogOut />
								<p className={style.textOptionStyle}>Sign Out</p>
							</div>
							<FiChevronRight />
						</div>
					</div>
				</div>

				<div className={style.userPanelSelectedContainer}>{currentPanel}</div>
			</div>
		</div>
	);
}

export default UserView;
