import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../Redux/actions';
import style from '../../UserComponents/UserOrders.module.css';
import styled from 'styled-components';
import UserReview from '../../Reviews/UserReview';
import { saveData } from '../../../Redux/actionsReview';
import { compose } from 'redux';

const ButtonRedSmall = styled.button`
    font-family: 'Roboto', sans-serif; 
    width: 80px;
    height: 50px;
    border-style: none;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    background-color: #FF3C4A;
    &:hover{
        background-color: #cc242f;
    } 
`;

const ButtonGreySmall = styled.button`
    font-family: 'Roboto', sans-serif; 
    width: 80px;
    height: 50px;
	margin: 1rem;
    border-style: none;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    background-color: #424242;
    &:hover{
        background-color:  #989898;;
    } 
`;

function UserOrderDetail({ image, name, oldprice, prodInfo, id }) {
	const dispatch = useDispatch();
	const userOrders = useSelector((state) => state.useraccount.userOrdersList);

	return (
		<div className={style.orderDetailContainer}>
			<div className={style.SizeImagOrderDiv}>
				<img className={style.sizeImagOrder} src={image} alt='Product Image' />
			</div>
			<div className='d-flex justify-content-center'>
				<div className='d-flex justify-content-center align-items-center'>
					<div className={style.descriptionOrderStyle}>
						<p>{name}</p>
					</div>
					<p> <b>Price:</b> ${oldprice}</p>
				</div>
				<div className='d-flex justify-content-center align-items-center'>
				<Link to={'/shoppingcart'}>
					<ButtonRedSmall
						type='submit'
						onClick={() => dispatch(addToCart(prodInfo))}
					>
						Buy Again
					</ButtonRedSmall>
				</Link>

				<Link to={`/review/${id}`}>
					<ButtonGreySmall>Leave feedback</ButtonGreySmall>
				</Link>
				</div>
			</div>
		</div>
	);
}

export default UserOrderDetail;
