import React from 'react';
import style from '../../UserComponents/UserOrders.module.css';
import styled from 'styled-components';

const ButtonRedSmall = styled.button`
    font-family: 'Roboto', sans-serif; 
    width: 80px;
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




function UserOrders({orderId, status, ammount}) {

	return (
		<div className={style.orderDiv}>
            
                <div className={style.orderNumberDiv}>
                    <p>Order Number: {orderId}</p>
                </div>

                <div className={style.statusDiv}>
                    <p>Status:</p>
                    <p className={style.statusStyle}>{status}</p> 
                </div>
                <div className={style.totalOrderDiv}>
                    <p>TOTAL: $ {ammount}</p>
                </div>
                
			
		</div>
	);
}

export default UserOrders;