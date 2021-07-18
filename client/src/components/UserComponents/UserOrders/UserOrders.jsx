import { useDispatch, useSelector } from 'react-redux';
import UserOrderDetail from './UserOrderDetail'
import style from './UserOrders.module.css';


function UserOrders() {
    const userId = useSelector((state) => state.user.userData.userId);
    const userOrders = useSelector((state) => state.useraccount.userOrdersList);
	const orderProducts = useSelector((state) => state.product.allProducts);
	const dispatch = useDispatch();


	return (
		<div>
			<div className={style.userOptionContainer}>
            
            <h3>My Orders</h3>
            <div>
			{userOrders && userOrders.map((order) => {
				return (
					<div>
					<UserOrderDetail
						ammount={order.ammount}
						status={order.status}
					/>
					</div>
				)
			}

			)}


            </div>
            
			</div>
		</div>
	);
}

export default UserOrders;