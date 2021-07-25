import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPayInfo } from '../../Redux/actions';
import { useLocation } from 'react-router-dom';

const WebHook = () => {
	const search = useLocation().search;
	const id = new URLSearchParams(search).get('collection_id');
	const status = new URLSearchParams(search).get('collection_status');
	const userData = useSelector((state) => state.user.userData);
	const cart = useSelector((state) => state.cart.cart);

	
	const dispatch = useDispatch();

	
		localStorage.removeItem('cart');

		

	useEffect(() => {
		dispatch(getPayInfo({id, email: userData.email, items: cart} ));
	}, []);

	return (

		<div class=' d-sm-flex justify-content-center m-5 text-center'>
			<div class='bg-white p-5'>
				<h2 class='mb-2 '>Thanks for buying in HardwareStore! </h2>

				<h5>Details of your purchase</h5>
				<p>Id: {id}</p>
				<p>Status: {status}</p>

				<p className=' p-2 bg-secondary'>

					An email has been sent with more info about your purchase
				</p>
			</div>
		</div>
	);
};

export default WebHook;
