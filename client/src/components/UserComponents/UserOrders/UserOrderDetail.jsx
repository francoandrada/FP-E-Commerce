import { useSelector } from 'react-redux';
import style from './UserOrders.module.css';


function UserOrderDetail({ammount, status}) {

	return (
		<div>
			<div className={style.orderDetailContainer}>
            <div>
            <p>{status}</p>
            </div>  
            <div>
            <p>DESCRIPTION</p>   
            </div>
            <p>${ammount}</p>
            
			</div>
		</div>
	);
}

export default UserOrderDetail;