import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import CartProducts from '../../CartProducts/CartProducts'
import style from './ShoppingCart.module.css'

function ShoppingCart() {
    const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getCart());
	// }, []);


	return (
		<div className={style.shoppingCartMain}>
            <CartProducts></CartProducts>
		</div>
	);

}

export default ShoppingCart;