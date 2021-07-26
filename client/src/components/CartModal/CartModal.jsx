// import styles from './CartModal.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { /*useDispatch,*/ useSelector } from 'react-redux';

import styled, { createGlobalStyle } from 'styled-components';
import ProductCartModal from './ProductCartModal';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../helper/priceFormater';

const Icon = styled.div`
  color: #ff3c4a;
  font-size: 30px;
  display: flex;
    justify-content: flex-end;
    margin: 0em 10% 0em 0em;
    cursor: pointer;

    @media only screen and (max-width: 430px) {
        font-size:20px;
        margin-right: 0.5em
    }
`;

const GlobalStyle = createGlobalStyle`
    body {
      color: black;
	  font-family: 'Roboto', sans-serif ;
}
`;

const CartContainer = styled.div`
      /* display: flex;
    justify-content: flex-end;
    margin: 0% 10% 0% 0%; */
    background-color: #f8f9fa;
    position: absolute;
    z-index: 1000;
    top: 157px;
    right: 5%;
    border-radius: 5px;
    width: 440px;
    color: #495057;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 72%);
`;

const CartHeader = styled.div`
    padding: .5em 1em;
    align-items: center;
    display: flex;

    h3 {
        width: 50%;
        text-align: center;
    }

    div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    width: 80%;

    span {
        font-size: 25px;
        display: block;
    font-weight: 700;
    color: #ff3c4a;
    }

    p {
        margin-right: .5em;
    font-weight: 700;
    }
    }
`;

const ProductsCart = styled.section`
    max-height: 350px;
    overflow-y: scroll;
    border-top: 2px solid rgb(128 128 128 / 35%);
    border-bottom: 2px solid rgb(128 128 128 / 35%);
    ul {
        list-style: none;
        padding: 0px;
    }
`;

const CartPay = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 22px 20px;

`;

const ButtonClose = styled.section`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: black;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    border: 1px solid;
    border-radius: 5px;

    &:hover {
        background-color:#919090;
        color: white;
        transition: 200ms;
    }
`;

const ButtonPay = styled.section`
        width: 120px;
    border: 1px solid;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #ff3c4a;
    color: white;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        background-color: #d4202d;
        transition: 200ms;
    }
`;

// const SubtotalContainer = styled.div`
// /*
//     display: flex;
//     justify-content: center;
//     align-items: flex-end;
//     flex-direction: column; */

// `;
//
// max-height: 350px;
// overflow-y: scroll;
// border-top: 2px solid var(--gray-06);
// border-bottom: 2px solid var(--gray-06);
// color='#ff3c4a'
function CartModal() {
	const [active, setActive] = useState(false);
	const cartProducts = useSelector((state) => state.cart.cart);

	const toggle = () => {
		if (cartProducts && cartProducts.length !== 0) {
			setActive(!active);
		}
	};

	useEffect(() => {
		if (cartProducts && cartProducts.length === 0) {
			setActive(false);
		}
	}, [active, cartProducts]);

	let subtotal = function () {
		let subTotal = 0;
		cartProducts &&
			cartProducts.map((product) => {
				subTotal += product.price * product.qty;
			});
		return subTotal;
	};

	let subtot = subtotal();
	let formatsubtotal = formatNumber.new(subtot, '$');

	return (
		<>
			<GlobalStyle />
			<Icon onClick={toggle}>
				<FaShoppingCart />
			</Icon>
			{active && (
				<CartContainer active={active} toggle={toggle}>
					<CartHeader>
						<h2>CART</h2>
						&nbsp;
						<FaShoppingCart />
						<div>
							<p>Subtotal</p>
							{subtotal() ? <span>{formatsubtotal}</span> : <span>0</span>}
						</div>
					</CartHeader>
					<ProductsCart>
						<ul>
							{cartProducts &&
								cartProducts.map((product) => {
									let formatPrice = formatNumber.new(product.price, '$');
									return (
										<li key={product.id}>
											<ProductCartModal
												info={product}
												image={product.image}
												name={product.name}
												price={formatPrice}
                                                stock={product.stock}
												qty={product.qty}
											/>
										</li>
									);
								})}
						</ul>
					</ProductsCart>
					<CartPay>
						<ButtonClose onClick={toggle}>Close</ButtonClose>
						<Link to='/shoppingcart'>
							<ButtonPay onClick={toggle}>Checkout</ButtonPay>
						</Link>
					</CartPay>
				</CartContainer>
			)}
		</>
	);
}

export default CartModal;
