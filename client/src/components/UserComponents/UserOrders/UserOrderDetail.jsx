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

function UserOrderDetail({ image, name, oldprice, prodInfo, id }) {
	const dispatch = useDispatch();
	const userOrders = useSelector((state) => state.useraccount.userOrdersList);

	return (
		<div className={style.orderDetailContainer}>
			<div className={style.SizeImagOrderDiv}>
				<img className={style.sizeImagOrder} src={image} alt='Product Image' />
			</div>
			<div>
				<div className={style.divData}>
					<div className={style.descriptionOrderStyle}>
						<p>{name}</p>
					</div>
					<p> <b>Price:</b> ${oldprice}</p>
				</div>
				<Link to={'/shoppingcart'}>
					<ButtonRedSmall
						type='submit'
						onClick={() => dispatch(addToCart(prodInfo))}
					>
						Buy Again
					</ButtonRedSmall>
				</Link>

				<Link to={`/review/${id}`}>
					<button onClick={() => <p>hola</p>}>Leave feedback</button>
				</Link>
			</div>
		</div>
	);
}

export default UserOrderDetail;
