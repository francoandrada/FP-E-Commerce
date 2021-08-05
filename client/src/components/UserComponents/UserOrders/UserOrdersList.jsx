import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserOrders from './UserOrders'
import UserOrderDetail from './UserOrderDetail';
import style from '../../UserComponents/UserOrders.module.css';
import styled from 'styled-components';

const ButtonRedLarge = styled.button`
    font-family: 'Roboto', sans-serif; 
    width: 100%;
    height: 30px;
    border-style: none;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    background-color: #FF3C4A;
    &:hover{
        background-color: #cc242f;
    } 
`;

function UserOrdersList() {
    const userId = useSelector((state) => state.user.userData.userId);
    const userOrders = useSelector((state) => state.useraccount.userOrdersList);
	
	const [selOrderId, setOrderId] = useState(0);

	console.log(userOrders)
	let orderDetailInfo = userOrders.filter(el => {
		if(el.orderId === selOrderId) {
			return el.orderProducts
		} })

	function setOption(event) {
        setOrderId(parseInt(event.target.id))
    }

	console.log('esto es lista prod', orderDetailInfo)
	
	return (
			<div className={style.userOptionContainer}>
            {selOrderId === 0 ?
				<div className={style.containerOrder}>
					<div className={style.selectedOptionTitle} >
					<h3>My Orders</h3>
					</div>

					{userOrders.length === 0 ?
					<div className={style.nothingHere}>
						<h1 >Nothing here yet!</h1>
						<div className={style.nothingHere2}>
						<Link to={'/catalog'}>
						<ButtonRedLarge>
							Go to Buy!
						</ButtonRedLarge>
						</Link>
						</div>
					</div>
					
					: userOrders && userOrders.map((order) => {
						return (
							<div style={{borderTop: '1px solid rgba(211, 211, 211, 0.611)', marginBottom: '0.5em'}}>
							<UserOrders
								prodInfo={order.orderProducts}
								status={order.status}
								ammount={order.ammount}
								orderId={order.orderId}
			
							/>
								<div className={style.detailIdButton}>
								<p id={order.orderId} onClick={setOption} className={style.textGoDetail}>See Order Detail</p>
								</div>
							</div>
							)
						}
					)}
					
				</div>
			
			: 
			<div>
				<div className={style.selectedOptionTitle} >
					<h3>Order Detail</h3>
				</div>
				{orderDetailInfo[0].orderProducts && orderDetailInfo[0].orderProducts.map((od) => {
					return (
						<div>
							
							<UserOrderDetail 
								image={od.image}
								name={od.name}
								oldprice={od.oldprice}
								prodInfo={od}
								id={od.id}
							
									
								/>
						</div>
					)
				})}
				<div style= {{padding: '10px'}}>
				<ButtonRedLarge 
					id={0} onClick={setOption}>
					Go back to Orders
				</ButtonRedLarge>
				</div>
			</div>		
		
		}	
			</div>
	);
}

export default UserOrdersList;