import { useDispatch } from 'react-redux';
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

function UserFavoritesDetail({ addressId, address, city, province, zipCode}) {
	const dispatch = useDispatch();

	return (
		<div className={style.orderAddressContainer}>
            <h4>Adress {addressId +1}</h4>
			<div className={style.orderAddressInnerContainer}>
				<div>
					<p>Address: {address}</p>
				</div>
				<div>
					<p>City: {city}</p>
				</div>
                <div>
					<p>Province: {province}</p>
				</div>
                <div>
					<p>Zip Code: {zipCode}</p>
				</div>
			</div>
			<div className={style.buttons}>
				
			</div>
		</div>
	);
}

export default UserFavoritesDetail;