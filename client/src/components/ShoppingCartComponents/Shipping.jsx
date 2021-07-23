import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '../StyledComponents/ButtonRedOther';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { postCart, saveAddress, saveAmmount } from '../../Redux/actions';

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
	padding: 3rem;
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
	height:357px;
	width:337px;
`;

const GmapCanvas = styled.div`
	overflow:hidden;
	background:none!important;
	height:337px;
	width:337px;
`;
const Shipping = () => {
	const dispatch = useDispatch();

	const [options, setOptions] = useState('');

	const formik = useFormik({
		initialValues: {
			address: '',
			city: '',
			province: '',
			zipCode: '',
		},
		validationSchema: Yup.object({
			address: Yup.string().required(),
			city: Yup.string().required(),
			province: Yup.string().required(),
			zipCode: Yup.string().required(),
		}),
		onSubmit: (values) => {
			if (options === 'ship') {
				console.log(values);
				dispatch(saveAddress(values));
			} else if (options === 'pick') {
				dispatch(saveAddress(null));
			}
			dispatch(postCart(bodyObject))
		},
	});

	const cartProducts = useSelector((state) => state.cart.cart);
	const address = useSelector((state) => state.cart.address);
	const ammount = useSelector((state) => state.cart.ammount);
	const mercadoPago = useSelector((state) => state.cart.link);
	
	if (mercadoPago !== '') {
		window.location.href = mercadoPago;
	}

	console.log('AMOUNTTT', ammount)
	const userId = useSelector((state) => state.user.userData.userId);



	let array = [];

	for (let i = 0; i < cartProducts.length; i++) {
		const element = {
			prodId: cartProducts[i].id,
			name: cartProducts[i].name,
			price: cartProducts[i].price,
			qty: cartProducts[i].qty,
			address: address,
		};
		array.push(element);
	}

	let bodyObject;
	if (userId != null) {
		bodyObject = {
			id: userId,
			prodCarrito: array,
			status: 'created',
			address: address,
			ammount: ammount
		};
	}
	//ammount, status, address, prodCarrito, id
	console.log(bodyObject);

	return (
		<div className=' d-flex justify-content-center rounded p-5 w-100 h-100'>
			<Div>
				<div className='rounded'>
					<Text>How would you like to get your order?</Text>

					<div className='text-center d-flex justify-content-center'>
						<div className='m-2'>
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
						<div className='m-2 h-100'>
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
					<form onSubmit={formik.handleSubmit}>
						<div>
							<div class='form-row'>
								<div class='col m-2'>
									{formik.touched.address && formik.errors.address ? (
										<div>{formik.errors.address}</div>
									) : null}

									<input
										type='text'
										placeholder='Address'
										className='form-control'
										name='address'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.address}
									/>
								</div>

								<div class='col m-2'>
									{formik.touched.city && formik.errors.city ? (
										<div>{formik.errors.city}</div>
									) : null}

									<input
										type='text'
										placeholder='City'
										className='form-control'
										name='city'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.city}
									/>
								</div>
							</div>
							<div class='form-row'>
								<div class='col m-2'>
									{formik.touched.province && formik.errors.province ? (
										<div>{formik.errors.province}</div>
									) : null}

									<input
										type='text'
										placeholder='Province'
										className='form-control'
										name='province'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.province}
									/>
								</div>

								<div class='col m-2'>
									{formik.touched.zipCode && formik.errors.zipCode ? (
										<div>{formik.errors.zipCode}</div>
									) : null}

									<input
										type='number'
										placeholder='ZIP Code'
										className='form-control'
										name='zipCode'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.zipCode}
									/>
								</div>
							</div>
							<div className='d-flex justify-content-center m-3'>
								<Button className=' btn btn-primary' type='submit'>
									Continue
								</Button>
							</div>
						</div>
					</form>
				) : options === 'pick' ? (
					<div className='d-flex justify-content-center'>
						<Mapouter>
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
							<form onSubmit={formik.handleSubmit}>
								<div className='d-flex justify-content-center m-3'>
									<Button type='submit' className=' btn btn-primary'>
										Continue
									</Button>
								</div>
							</form>
						</Mapouter>
					</div>
				) : null}
			</Div>
		</div>
	);
};

export default Shipping;
