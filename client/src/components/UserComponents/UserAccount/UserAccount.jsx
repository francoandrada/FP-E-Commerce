import { useSelector } from 'react-redux';
import style from '../../UserComponents/UserOrders.module.css';


function UserAccount() {
    const userId = useSelector((state) => state.user.userData.userId);


	return (
		<div>
			<div className={style.userOptionContainer}>
            
			<div className={style.selectedOptionTitle} >
            <h3>My Account</h3>
            </div>

			<div className={style.UserPersonalInfo}>
				<p>First Name:</p>
				<p>Last Name:</p>
				<p>Email:</p>
				<p>Reset Password</p>
			</div>
        
			</div>
		</div>
	);
}

export default UserAccount;