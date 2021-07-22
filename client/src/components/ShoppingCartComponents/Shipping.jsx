import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Div from '../StyledComponents/Validation';
import Button from '../StyledComponents/ButtonRedOther';
function Shipping() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [address, setAddress] = useState('');
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
			console.log(values);
		},
	});
	console.log(address);
	return (
		<div className='bg-white'>
			<form handleSubmit={formik.handleSubmit}>
				<h4>How would you like to get your order?</h4>
				<div className='text-center'>
					<div>
			
				<input
					type='radio'
					name='ship'
					value='ship'
					onClick={() => setAddress('ship')}
				/>
					<label>Ship to your location</label>
				</div>
				<div>
				
				<input
					type='radio'
					name='ship'
					value='pick'
					onClick={() => setAddress('pick')}
				/>
				 <label>Pick up at the store</label>
				</div>
				</div>
				{address === 'ship' ? 


				<div>
				{formik.touched.address && formik.errors.address ? (
					<Div>{formik.errors.address}</Div>
				) : null}
				<div className='form-group d-flex justify-content-center'>
					<label>
						Address
						<input
							type='text'
							className='form-control'
							name='address'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.address}
						/>
					</label>
				</div>
				{formik.touched.city && formik.errors.city ? (
					<Div>{formik.errors.city}</Div>
				) : null}
				<div className='form-group d-flex justify-content-center'>
					<label>
						City
						<input
							type='text'
							className='form-control'
							name='city'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.city}
						/>
					</label>
				</div>
				{formik.touched.province && formik.errors.province ? (
					<Div>{formik.errors.province}</Div>
				) : null}
				<div className='form-group d-flex justify-content-center'>
					<label>
						Province
						<input
							type='text'
							className='form-control'
							name='province'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.province}
						/>
					</label>
				</div>
				{formik.touched.zipCode && formik.errors.zipCode ? (
					<Div>{formik.errors.zipCode}</Div>
				) : null}
				<div className='form-group d-flex justify-content-center'>
					<label>
						ZIP Code
						<input
							type='number'
							className='form-control'
							name='zipCode'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.zipCode}
						/>
					</label>
				</div>
				<div className='d-flex justify-content-center'>
					<Button type='submit' className=' btn btn-primary'>
						Submit
					</Button>
				</div>
				</div> : null }
			
				
			</form>
		</div>
	);
}

export default Shipping;
