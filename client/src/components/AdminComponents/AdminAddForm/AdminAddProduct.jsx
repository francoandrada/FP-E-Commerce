import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
	createdProduct,
	getProducts,
	getCategories,
	getBrands,
} from '../../../Redux/actions';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

// import Select from "react-multi-select-component";
// import swal from 'sweetalert';

// import { createdProduct, getProducts, getCategories, getBrands } from "../../../Redux/actions"
// import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import styles from './stylesForms.module.css';
import { MdArrowBack } from 'react-icons/md';
import ButtonRed from '../../StyledComponents/ButtonRed';

function AddProduct() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.allProducts);
	const brand = useSelector((state) => state.brands.allBrands);
	const categories = useSelector((state) => state.category.allCategories);
	// console.log(categories)
	var [cate, setCate] = useState([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		dispatch(getBrands());
		dispatch(getCategories());
	}, [dispatch]);

	function changeChange(e) {
		setCate((cate = e));
	}
	const changeInput = (e) => {
		//   const value= e.target.value
		//   const name= e.target.name
	};

	const submit = (data, e) => {
		data.category = cate.map((x) => x.value);

		for (let i = 0; i < products.length; i++) {
			if (products[i].name.toLowerCase() === data.name.toLowerCase()) {
				return swal({
					title: 'Existing name',
					icon: 'warning',
					button: 'ok',
					timer: '5000',
				});
			}
		}
		if (
			data.name &&
			data.name.length > 0 &&
			data.price &&
			data.price.length > 0 &&
			data.priceSpecial &&
			data.priceSpecial.length > 0 &&
			data.description &&
			data.description.length > 0 &&
			data.weight &&
			data.weight.length > 0 &&
			data.image &&
			data.image.length > 0 &&
			data.stock &&
			data.stock.length > 0 &&
			data.category &&
			data.category.length > 0 &&
			data.brandId &&
			data.brandId.length > 0
		) {
			dispatch(createdProduct(data));
			e.target.reset();
			swal({
				title: 'Product Created!!',
				icon: 'success',
				button: 'ok',
				timer: '5000',
			}).then(() => dispatch(getProducts()));

			reset({ data });
		} else {
			swal({
				title: 'All fields are required',
				icon: 'error',
				button: 'ok',
				timer: '5000',
			});
		}
	};

	const options = categories.map((c) => ({ label: c.name, value: c.id }));
	return (
		<div className={styles.background}>
			<div className={styles.btnBackContainer}>
				<Link to='/admin/products'>
					<MdArrowBack />
				</Link>
			</div>
			<div className={styles.formContainer}>
				<form
					className=''
					onChange={(e) => changeInput(e)}
					onSubmit={handleSubmit(submit)}
				>
					<div className={styles.box1}>
						<label> Name Product: </label>
						<input
							className={styles.input}
							type='text'
							name='name'
							onChange={(e) => changeInput(e)}
							{...register('name', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 20,
									massage: 'menos de 20 caracteres',
								},
								minLength: {
									value: 3,
									message: 'mas de 3 caracteres',
								},
								pattern: {
									value: /^[a-zA-Z ]*$/,
									message: 'no debe ingresar numeros',
								},
							})}
						></input>
						<span>{errors?.name?.message}</span>

						<label>Price:</label>
						<input
							className={styles.input}
							type='number'
							name='price'
							min='0'
							onChange={(e) => changeInput(e)}
							{...register('price', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 8,
									massage: 'menos de 8 caracteres',
								},
								minLength: {
									value: 3,
									message: 'mas de 3 caracteres',
								},
								// pattern:{
								//     value: /^[a-zA-Z]*$/,
								//     message:"no debe ingresar numeros"
								// }
							})}
						/>
						<span>{errors?.price?.message}</span>
					</div>
					<div className={styles.box1}>
						<label>Special Price:</label>
						<input
							className={styles.input}
							type='number'
							name='priceSpecial'
							min='0'
							onChange={(e) => changeInput(e)}
							{...register('priceSpecial', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 8,
									massage: 'menos de 8 caracteres',
								},
								minLength: {
									value: 3,
									message: 'mas de 3 caracteres',
								},
								// pattern:{
								//     value: /^[a-zA-Z]*$/,
								//     message:"no debe ingresar numeros"
								// }
							})}
						/>
						<span>{errors?.priceSpecial?.message}</span>

						<label>Description:</label>
						<input
							className={styles.input}
							type='text'
							name='description'
							onChange={(e) => changeInput(e)}
							{...register('description', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 200,
									massage: 'menos de 200 caracteres',
								},
								minLength: {
									value: 10,
									message: 'mas de 10 caracteres',
								},
								pattern: {
									value: /^[a-zA-Z ]*$/,
									message: 'no debe ingresar numeros',
								},
							})}
						/>
						<span>{errors?.description?.message}</span>
					</div>
					<div className={styles.box1}>
						<label>Weight:</label>
						<input
							className={styles.input}
							type='number'
							name='weight'
							min='0'
							onChange={(e) => changeInput(e)}
							{...register('weight', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 4,
									massage: 'menos de 4 caracteres',
								},
								minLength: {
									value: 1,
									message: 'mas de 1 caracteres',
								},
								// pattern:{
								//     value: /^[a-zA-Z]*$/,
								//     message:"no debe ingresar numeros"
								// }
							})}
						/>
						<span>{errors?.weight?.message}</span>

						<label>Image:</label>
						<input
							className={styles.input}
							type='text'
							name='image'
							// name="images[]"
							// id="fileInput"
							// multiple
							onChange={(e) => changeInput(e)}
							{...register('image', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 20,
									massage: 'menos de 20 caracteres',
								},
								minLength: {
									value: 3,
									message: 'mas de 3 caracteres',
								},
								pattern: {
									value: /^[a-zA-Z]*$/,
									message: 'no debe ingresar numeros',
								},
							})}
						/>
						<span>{errors?.image?.message}</span>
					</div>
					<div className={styles.box1}>
						<label>Stock:</label>
						<input
							className={styles.input}
							type='number'
							name='stock'
							min='0'
							onChange={(e) => changeInput(e)}
							{...register('stock', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 4,
									massage: 'menos de 4 caracteres',
								},
								// minLength:{
								//     value: 1,
								//     message:"mas de 3 caracteres"
								// },
								// pattern:{
								//     value: /^[a-zA-Z]*$/,
								//     message:"no debe ingresar numeros"
								// }
							})}
						/>
						<span>{errors?.stock?.message}</span>

						<label>Brand:</label>
						<select
							className=''
							type='text'
							name='brandId'
							onChange={(e) => changeInput(e)}
							{...register('brandId', {})}
						>
							<option></option>
							{brand.map((x, index) => (
								<option key={index} value={x.id}>
									{x.name}
								</option>
							))}
						</select>

						<label for='type'>Selected Categories</label>
						<Select
							isMulti
							name='category'
							options={options}
							onChange={changeChange}
						/>
					</div>

					<ButtonRed type='submit'> Add </ButtonRed>
				</form>
			</div>
		</div>
	);
}
export default AddProduct;
