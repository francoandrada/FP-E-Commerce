import { useSelector } from 'react-redux';
import UserOrderDetail from './UserOrderDetail'
import style from '../../UserComponents/UserOrders.module.css';


function UserOrders() {
    const userId = useSelector((state) => state.user.userData.userId);
    const userOrders = useSelector((state) => state.useraccount.userOrdersList);


	return (
		<div>
			<div className={style.userOptionContainer}>
            
			<div className={style.selectedOptionTitle} >
            <h3>My Orders</h3>
            </div>

			{userOrders && userOrders.map((order) => {
				return (
					
					<UserOrderDetail
						prodInfo={order.orderDetails[0].product}
						price={order.orderDetails[0].product.price}
						name={order.orderDetails[0].product.name}
						image={order.orderDetails[0].product.image}
						status={order.status}
					/>
					
					)
				}
			)}

			</div>
		</div>
	);
}

export default UserOrders;