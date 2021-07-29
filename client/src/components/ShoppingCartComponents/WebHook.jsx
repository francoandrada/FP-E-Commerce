import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getPayInfo } from '../../Redux/actions';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const WebHook = () => {
	const search = useLocation().search;
	const id = new URLSearchParams(search).get('collection_id');
	const status = new URLSearchParams(search).get('collection_status');
	const userData = useSelector(state => state.user.userData);
	const userPay = useSelector(state => state.cart.userPay);
	const [orderStatus, setOrderStatus] = React.useState('');
	const dispatch = useDispatch();

	useEffect(async () => {
		console.log('RESPUESTA');
			const res = await axios.post('http://localhost:3001/webhooks', {
			 	id: id,
			 	email: userData.email
			 });
			//  console.log('RESPUESTA', res.data.status);
		
	}, [dispatch]);

	dispatch(deleteCart());

	// React.useEffect(() => {
	// 	axios.put(`http://localhost:3001/orders/order/${id}`, {
	// 		status: orderStatus,
	// 		email: userData.email
	// 	});
	// }, [orderStatus]);

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
