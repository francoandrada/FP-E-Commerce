//import styles from './productDetail.module.css'
import styled from 'styled-components';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart, adjustQty, removeFromCart } from '../../Redux/actions';
import { BsTrash } from 'react-icons/bs';

const ProductCart = styled.section`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 1fr 1fr;    
    grid-template-areas:
        "img info"
        "img price";
    align-items: center;
    width: 100%;
    margin: 15px 0px 15px 0px;
    padding: 3px 8px 3px 8px;


`;

const ProductName = styled.section`
grid-area: info;
display: flex;
flex-direction: column;
margin-left: 0.5em;
font-size: 18px;
    font-weight: 700;
`;

const Icon = styled.section`
    padding-left: 5px;
    cursor: pointer;
`;
const CantProducts = styled.section`
grid-area: price;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 0.5em;

div { 
    white-space: nowrap;
margin-right: 2em;
display: flex;
justify-content: center;
align-items: center;
padding-top: 0.5em;

button {
    margin-right: 0.5em;
}

span {
    margin-right: 0.5em;
    margin-left: 0.5em;
}
}
`;
const Price = styled.section`
    font-weight: 700;
    font-size: 20px;
    color: #ff3c4a;
    margin-top: 18px;
`;
const Image = styled.section`
    grid-area: img;
    width: 64px;
    height: 64px;

    img {
        width: 64px;
    }
`;

function ProductCartModal({ info, image, name, price, qty }) {
	const [productInfo, setProductInfo] = useState(info);
	const dispatch = useDispatch();

	function handlePlus() {
		setProductInfo(info);
		dispatch(addToCart(productInfo));
	}

	function handleMinus() {
		let newQty = qty;
		qty === 1 ? dispatch(removeFromCart(info.id)) : (newQty -= 1);
		dispatch(adjustQty(info.id, newQty));
	}

	return (
		<ProductCart>
			<Image>
				<img src={image} alt='' />
			</Image>
			<ProductName>{name}</ProductName>
			<div>
				<CantProducts>
					<div>
						<Icon onClick={handleMinus}>
							{qty === 1 ? <BsTrash size={26} /> : <FiMinusCircle size={26} />}
						</Icon>
						<span>{qty}</span>
						<Icon onClick={handlePlus}>
							<FiPlusCircle size={26} />
						</Icon>
					</div>
					<Price>
						<span>{price}</span>
					</Price>
				</CantProducts>
			</div>
		</ProductCart>
	);
}

export default ProductCartModal;
