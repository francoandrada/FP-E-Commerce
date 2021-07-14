import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


function CartList() {
    const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getCart());
	// }, []);


	return (
		<div>
			<h1>THIS IS SHOPPING CART</h1>
            <h1>LIST OF PRODUCTS ADDED</h1>
            <h1>SUBTOTAL AND GOT O PAY</h1>
		</div>
	);

}

export default CartList;