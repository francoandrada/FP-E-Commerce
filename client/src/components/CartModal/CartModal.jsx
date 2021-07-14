import styles from './CartModal.module.css';
import { FaShoppingCart } from 'react-icons/fa';

import styled, { createGlobalStyle } from 'styled-components';
import ProductCartModal from './ProductCartModal';

const Icon = styled.div`
  color: #ff3c4a;
  font-size: 55px;
  display: flex;
    justify-content: flex-end;
    margin: 0em 10% 0em 0em;
    cursor: pointer;
`;

const GlobalStyle = createGlobalStyle`
    body {
      color: black;
	  font-family: 'Roboto', sans-serif ;
}
`;

const CardContainer = styled.div`
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
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;

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
	return (
		<>
			<GlobalStyle />
			<Icon>
				<FaShoppingCart />
			</Icon>

			<CardContainer>
				<CartHeader>
					<h3>Cart</h3>

					<div>
						<p>Subtotal</p>
						<span>$3.000,00</span>
					</div>
				</CartHeader>
				<ProductsCart>
					<ul>
						<li>
							<ProductCartModal />
						</li>
						<li>
							<ProductCartModal />
						</li>
						<li>
							<ProductCartModal />
						</li>
						<li>
							<ProductCartModal />
						</li>
					</ul>
				</ProductsCart>
				<CartPay>
					<ButtonClose>Close</ButtonClose>
					<ButtonPay>Pay</ButtonPay>
				</CartPay>
			</CardContainer>
		</>
	);
}

export default CartModal;
