import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getUserOrders, getProducts } from '../../../Redux/actions';
import UserOrders from '../UserOrders/UserOrders';
import EditAccount from '../UserAccount/EditAccount';
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
	/* 	const [selectedOption, setSelectedOption] = useState({
		account: '',
		orders: '',
		favorites: '',
		adresses: '',
		signout: '',
	}); */

    console.log('hola')

	useEffect(() => {
		dispatch(getUserOrders(userId));
		dispatch(getProducts());
	}, [dispatch]);

	function setOption(event) {
		setSelectedOption(event.target.id);
	}

	let currentPanel = null;

    if (selectedOption === 'orders') {
        currentPanel = <UserOrders/> 
    } else if (selectedOption === 'account') {
        currentPanel = <UserAccount setOption={setOption}/>
    } else if (selectedOption === 'edit') {
        currentPanel = <EditAccount setOption={setOption}/>
    }


	return (
		<div>
			<div className={style.userViewContainer}>
				<div className={style.optionsPanelContainer}>
					<div className={style.optionsContainer}>
						<p>Welcome {userData.name}!</p>

						<div className={style.optionsLayoutdiv}>
							<div className={style.subcontainerOptions}>
								<FiUser />
								<p
									onClick={setOption}
									id='account'
									className={style.textOptionStyle}
								>
									Account
								</p>
							</div>
							<FiChevronRight />
						</div>

						<div className={style.optionsLayoutdiv}>
							<div className={style.subcontainerOptions}>
								<FiBox />
								<p
									onClick={setOption}
									id='orders'
									className={style.textOptionStyle}
								>
									My Orders
								</p>
							</div>
							<FiChevronRight />
						</div>

						<div className={style.optionsLayoutdiv}>
							<div className={style.subcontainerOptions}>
								<FiHeart />
								<p
									onClick={setOption}
									id='favorites'
									className={style.textOptionStyle}
								>
									Favorites
								</p>
							</div>
							<FiChevronRight />
						</div>

						<div className={style.optionsLayoutdiv}>
							<div className={style.subcontainerOptions}>
								<FiHome />
								<p
									onClick={setOption}
									id='adresses'
									className={style.textOptionStyle}
								>
									Adresses
								</p>
							</div>
							<FiChevronRight />
						</div>

						<div className={style.optionsLayoutdiv}>
							<div className={style.subcontainerOptions}>
								<FiLogOut />
								<p
									onClick={setOption}
									id='signout'
									className={style.textOptionStyle}
								>
									Sign Out
								</p>
							</div>
							<FiChevronRight />
						</div>
					</div>
				</div>

				<div className={style.userPanelSelectedContainer}>{currentPanel}</div>

				{/* 				<p>My Account</p>
				<div className={style.optionsContainer}>
					<p>Welcome {userData.name}!</p>

					<div className={style.optionsLayoutdiv}>
						<div className={style.subcontainerOptions}>
							<FiUser />
							<p
								onClick={setOption}
								id='account'
								className={style.textOptionStyle}
							>
								Account
							</p>
						</div>
						<FiChevronRight />
					</div>

					<div className={style.optionsLayoutdiv}>
						<div className={style.subcontainerOptions}>
							<FiBox />
							<p
								onClick={setOption}
								id='orders'
								className={style.textOptionStyle}
							>
								My Orders
							</p>
						</div>
						<FiChevronRight />
					</div>

					<div className={style.optionsLayoutdiv}>
						<div className={style.subcontainerOptions}>
							<FiHeart />
							<p
								onClick={setOption}
								id='favorites'
								className={style.textOptionStyle}
							>
								Favorites
							</p>
						</div>
						<FiChevronRight />
					</div>

					<div className={style.optionsLayoutdiv}>
						<div className={style.subcontainerOptions}>
							<FiHome />
							<p
								onClick={setOption}
								id='adresses'
								className={style.textOptionStyle}
							>
								Adresses
							</p>
						</div>
						<FiChevronRight />
					</div>

					<div className={style.optionsLayoutdiv}>
						<div className={style.subcontainerOptions}>
							<FiLogOut />
							<p
								onClick={setOption}
								id='signout'
								className={style.textOptionStyle}
							>
								Sign Out
							</p>
						</div>
						<FiChevronRight />
					</div>
				</div>
				<UserOrders /> */}

				<div className={style.optionsPanelContainer}>
					<div className={style.optionsContainer}>
						<p>Welcome {userData.name}!</p>

						<div className={style.optionsLayoutdiv}>
							<div className={style.subcontainerOptions}>
								<FiUser />
								<p
									onClick={setOption}
									id='account'
									className={style.textOptionStyle}
								>
									Account
								</p>
							</div>
							<FiChevronRight />
						</div>

						<div className={style.optionsLayoutdiv}>
							<div className={style.subcontainerOptions}>
								<FiBox />
								<p
									onClick={setOption}
									id='orders'
									className={style.textOptionStyle}
								>
									My Orders
								</p>
							</div>
							<FiChevronRight />
						</div>

						<div className={style.optionsLayoutdiv}>
							<div className={style.subcontainerOptions}>
								<FiHeart />
								<p
									onClick={setOption}
									id='favorites'
									className={style.textOptionStyle}
								>
									Favorites
								</p>
							</div>
							<FiChevronRight />
						</div>

						<div className={style.optionsLayoutdiv}>
							<div className={style.subcontainerOptions}>
								<FiHome />
								<p
									onClick={setOption}
									id='adresses'
									className={style.textOptionStyle}
								>
									Adresses
								</p>
							</div>
							<FiChevronRight />
						</div>

						<div className={style.optionsLayoutdiv}>
							<div className={style.subcontainerOptions}>
								<FiLogOut />
								<p
									onClick={setOption}
									id='signout'
									className={style.textOptionStyle}
								>
									Sign Out
								</p>
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