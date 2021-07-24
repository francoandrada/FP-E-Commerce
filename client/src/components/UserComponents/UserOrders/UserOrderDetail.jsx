import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	addToCart,
} from '../../../Redux/actions';
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


function UserOrderDetail({image, name, price, prodInfo}) {
	const dispatch = useDispatch();

	return (
		<div className={style.orderDetailContainer}>
       
           <div className={style.SizeImagOrderDiv}>
           <img
				className={style.sizeImagOrder}
				src={image}
				alt='Product Image'
			/>
           </div>
            
            <div className={style.descriptionOrderStyle}>
            <p>{name}</p>   
            </div>

            <p>${price}</p>
    
            
            <Link to={'/shoppingcart'}>
				<ButtonRedSmall
					type='submit'
					onClick={() => dispatch(addToCart(prodInfo))}
				>
				Buy Again
				</ButtonRedSmall>
            </Link> 
			
		</div>
	);
}

export default UserOrderDetail;