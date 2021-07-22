import React from 'react';
import { useDispatch} from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Div from '../StyledComponents/Validation';

function Shipping() {
	const dispatch = useDispatch();
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			address: '',
			city: '',
			province: '',
			zipCode: '',
		},
		validationSchema: Yup.object({
            address: Yup.string().required(),
			city:  Yup.string().required(),
			province:  Yup.string().required(),
			zipCode:  Yup.string().required(),
		}),
		onSubmit: (values) => {
			console.log(values)
		},
	});

	return (
        <form handleSubmit={formik.handleSubmit}>
		<div className='bg-white'>
			<h1>How would you like to get your order?</h1>
			<button>Ship to your location</button>
			<button>Pick up at the store</button>
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
								<button
									type='submit'
									className=' btn btn-primary'
								>
									Sign in
								</button>
                                </div>
		</div>
        </form>
	);
}

export default Shipping;
