import { FaShoppingCart } from 'react-icons/fa';
import { /*useDispatch,*/ useSelector } from 'react-redux';

import styled, { createGlobalStyle } from 'styled-components';
import FavModalDetail from './FavModalDetail'
import { useState, useEffect } from 'react';
import {FaRegHeart, FaHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { formatNumber } from '../../helper/priceFormater';
import styles from './FavouriteButton.module.css'

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

    @media only screen and (max-width: 430px){
	width: 330px;
    }
`;

const CartHeader = styled.div`
    padding: .5em 1em;
    align-items: center;
    display: flex;

    h3 {
        width: 50%;
        text-align: center;
    }
    h2 {
    font-size: 22px
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

    @media only screen and (max-width: 430px){
        width: 7.5em;
        font-size:18px
    }
`;




function FavModal() {
	const [active, setActive] = useState(false);
	const userFavorites = useSelector((state) => state.useraccount.userFavorites);

	const toggle = () => {
		if (userFavorites && userFavorites.length !== 0) {
			setActive(!active);
		}
	};

	useEffect(() => {
		if (userFavorites && userFavorites.length === 0) {
			setActive(false);
		}
	}, [active, userFavorites]);


	return (
		<>
			<GlobalStyle />
			<Icon onClick={toggle}>
                <FaHeart className={styles.btnHeart}/>
			</Icon>
			{active && (
				<CartContainer active={active} toggle={toggle}>
					<CartHeader>
						<h2>FAVORITES</h2>
						&nbsp;
						<FaHeart className={styles.btnHeart}/>
					</CartHeader>
					<ProductsCart>
						<ul>
							{userFavorites &&
								userFavorites.map((fav) => {
									let formatPrice = formatNumber.new(fav.price, '$');
									return (
										<li key={fav.id}>
											<FavModalDetail
												info={fav}
												image={fav.image}
												name={fav.name}
												price={formatPrice}
                                                stock={fav.stock}
											/>
										</li>
									);
								})}
						</ul>
					</ProductsCart>

					<CartPay>
						<ButtonClose onClick={toggle}>Close</ButtonClose>
                                
					</CartPay>
				</CartContainer>
			)}
		</>
	);
}

export default FavModal;