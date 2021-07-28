import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../StyledComponents/ButtonRedOther';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { postCart, postCartCrypto, saveAddress } from '../../Redux/actions';
import style from './SubTotal/SubTotal.module.css';
import { useHistory } from 'react-router-dom';

const Text = styled.p`
	font-size: 1.5rem;
	font-weight: 700;
	text-align: center;
`;

const Input = styled.input`
	display: none;
`;
const Div = styled.div`
	background-color: #F0F0F0;
	padding: 2rem;
	border-radius: 10px;
	border: 1px solid white;

`;

const Label = styled.label`
  border-style: none;
    border-radius: 5px;
    font-size: 18px;
    padding: .5rem;
    &:hover{
        background-color: black;
       color: white;
    } 
`;

const Mapouter = styled.div`
	text-align:right;
	height:457px;
	width:477px;

`;

const GmapCanvas = styled.div`
	overflow:hidden;
	background:none!important;
	display: flex;
	margin: auto;
	justify-content: center;
	height:300px;
	width:300px;
`;
const Shipping = () => {
	const cartProducts = useSelector((state) => state.cart.cart);

	const ammount = useSelector((state) => state.cart.ammount);
	const mercadoPago = useSelector((state) => state.cart.link);
	const history = useHistory();
	const [addr, setAddr] = useState({
		address: '',
		city: '',
		province: '',
		zipCode: '',
	});

	const { address, city, province, zipCode } = addr;

	const handleChange = (e) => {
		setAddr({
			...addr,
			[e.target.name]: e.target.value,
		});
	};

	if (mercadoPago !== '') {
		window.location.href = mercadoPago;
	}

	const userId = useSelector((state) => state.user.userData.userId);

	let array = [];

	for (let i = 0; i < cartProducts.length; i++) {
		const element = {
			prodId: cartProducts[i].id,
			name: cartProducts[i].name,
			price: cartProducts[i].price,
			qty: cartProducts[i].qty,
		};
		array.push(element);
	}

	let bodyObject;

	const dispatch = useDispatch();

	const [options, setOptions] = useState('');

	if (userId != null) {
		bodyObject = {
			id: userId,
			prodCarrito: array,
			status: 'created',
			address: addr,
			ammount: ammount,
		};
	}
	const handleClickMP =async (e) => {
		e.preventDefault();
		if (options === 'ship') {
			setAddr(addr);
		}
		if (options === 'pick') {
			setAddr('');
		}

		console.log('ANTES DE ENVIAR', bodyObject);
		dispatch(postCart(bodyObject));
		await Swal.fire({
			position: 'center',
			icon: 'success',
			title: `You'll redirected to Mercado Pago to finish your payment!`,
			showConfirmButton: true,
			timer: 3000,
		});
	};

	const handleClickCrypto = async (e) => {
		e.preventDefault();
		
		await Swal.fire({
			position: 'center',
			icon: 'success',
			title: `You'll redirected to Coinpayments to finish your payment!`,
			showConfirmButton: true,
			timer: 3000,
		});
		history.push('/catalog');
		console.log('DESDE CRIPTOP',bodyObject);
		dispatch(postCartCrypto(bodyObject));
		
	
	};

	return (
		<div className=' d-flex justify-content-center rounded p-5 '>
			<Div>
				<div className='rounded'>
					<Text>How would you like to get your order?</Text>

					<div className='text-center d-flex justify-content-center'>
						<div className=''>
							<Label>
								<Input
									type='radio'
									name='ship'
									value='ship'
									onClick={() => setOptions('ship')}
								/>
								Ship to your location
							</Label>
						</div>
						<div className=''>
							<Label>
								<Input
									type='radio'
									name='ship'
									value='pick'
									onClick={() => setOptions('pick')}
								/>
								Pick up at the store
							</Label>
						</div>
					</div>
				</div>
				{options === 'ship' ? (
					<form >
						<div>
							<div class='form-row'>
								<div class='col m-2'>
									<input
										type='text'
										placeholder='Address'
										className='form-control'
										name='address'
										onChange={handleChange}
										value={address}
									/>
								</div>

								<div class='col m-2'>
									<input
										type='text'
										placeholder='City'
										className='form-control'
										name='city'
										onChange={handleChange}
										value={city}
									/>
								</div>
							</div>
							<div class='form-row'>
								<div class='col m-2'>
									<input
										type='text'
										placeholder='Province'
										className='form-control'
										name='province'
										onChange={handleChange}
										value={province}
									/>
								</div>

								<div class='col m-2'>
									<input
										type='number'
										placeholder='ZIP Code'
										className='form-control'
										name='zipCode'
										onChange={handleChange}
										value={zipCode}
									/>
								</div>
							</div>
							<div className='d-flex justify-content-center m-3'>
								
								<button 
								onClick={handleClickMP}
								className={style.paymentButton}>
									Checkout with Mercado Pago
								</button>

								<button
								
									onClick={handleClickCrypto}
									className={style.paymentCrypto}
								>
									Checkout with CoinPayments
								</button>
							</div>
						</div>
					</form>
				) : options === 'pick' ? (
					<div className='d-flex justify-content-center'>
						<Mapouter>
							<div>
							<GmapCanvas>
								<iframe
									width='600'
									height='500'
									id='gmap_canvas'
									src='https://maps.google.com/maps?q=300%20Post%20St,%20San%20Francisco,%20CA%2094108,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed'
									frameborder='0'
									scrolling='no'
									marginheight='0'
									marginwidth='0'
								></iframe>
								<a href='https://fmovies-online.net'></a>
							</GmapCanvas>
							</div>
							<div>
							<form >
								<div className='d-flex justify-content-center m-2'>
									<button className={style.paymentButton}>
										Checkout with Mercado Pago
									</button>

									<button
									
										onClick={handleClickCrypto}
										className={style.paymentCrypto}
									>
										Checkout with CoinPayments
									</button>
								</div>
							</form>
							</div>
						</Mapouter>
					</div>
				) : null}
			</Div>
		</div>
	);
};

export default Shipping;

// onClick={() => setAdd(null)}
