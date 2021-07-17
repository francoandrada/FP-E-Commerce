import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import style from './UserOrders.module.css';


function UserOrders() {
    const userId = useSelector((state) => state.user.userData.userId);
    // const userAllOrders = useSelector((state) => state.userOrders);
	const dispatch = useDispatch();

    // useEffect(() => {
	// 	getUserOrders(userId);

	// });
   

	return (
		<div>
			<div className={style.userOptionContainer}>
            
            <h3>My Orders</h3>
            <div>
                


            </div>
            
			</div>
		</div>
	);
}

export default UserOrders;