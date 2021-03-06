import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFavorites } from '../../../Redux/actions';
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

function UserFavoritesDetail({ image, name, price, prodInfo, id }) {
	const dispatch = useDispatch();
	const userOrders = useSelector((state) => state.useraccount.userFavorites);

	return (
		<div className={style.orderDetailContainer}>
			<div className={style.SizeImagOrderDiv}>
				<img className={style.sizeImagOrder} src={image} alt='Product Image' />
			</div>

			<div className={style.descriptionOrderStyle}>
				<div>
					<p>{name}</p>
				</div>
				<div>
					<p> <b> ${price} </b></p>
				</div>
			</div>
			<div className={style.buttons}>
				<div className={style.button}>
					<Link to={'/shoppingcart'}>
						<ButtonRedSmall
							type='submit'
							onClick={() => dispatch(addToCart(prodInfo))}
						>
							Buy
						</ButtonRedSmall>
					</Link>
				</div>
				<div className={style.button}>
					<ButtonRedSmall
						type='submit'
						onClick={() => dispatch(removeFavorites(prodInfo))}
					>
						Remove
					</ButtonRedSmall>
				</div>
			</div>
		</div>
	);
}

export default UserFavoritesDetail;
