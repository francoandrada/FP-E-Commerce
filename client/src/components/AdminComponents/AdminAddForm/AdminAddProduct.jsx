import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
	createdProduct,
	getProducts,
	getCategories,
	getBrands
} from '../../../Redux/actions';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import styles from './stylesForms.module.css';
import { MdArrowBack } from 'react-icons/md';
import ButtonRed from '../../StyledComponents/ButtonRed';
import Swal from 'sweetalert2';

function AddProduct() {
	const dispatch = useDispatch();
	const products = useSelector(state => state.product.allProducts);
	const brand = useSelector(state => state.brands.allBrands);
	const categories = useSelector(state => state.category.allCategories);
	const [imagesFiles, setImagesFiles] = useState([]);
	var [cate, setCate] = useState([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();

	useEffect(() => {
		dispatch(getBrands());
		dispatch(getCategories());
	}, [dispatch]);

	function changeChange(e) {
		setCate((cate = e));
	}
	const changeInput = e => {
		e.preventDefault();
		if (e.target.file) {
			convertToBase64();
		}
	};

	const submit = (data, e) => {
		data.category = cate.map(x => x.value);

		for (let i = 0; i < products.length; i++) {
			if (products[i].name.toLowerCase() === data.name.toLowerCase()) {
				return new Swal({
					title: 'Existing name',
					icon: 'warning',
					button: 'ok',
					timer: '5000'
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
			dispatch(createdProduct(data, { images: imagesFiles }));
			e.target.reset();
			new Swal({
				title: 'Product Created!!',
				icon: 'success',
				button: 'ok',
				timer: '5000'
			}).then(() => dispatch(getProducts()));
			reset({ data });
		} else {
			new Swal({
				title: 'All fields are required',
				icon: 'error',
				button: 'ok',
				timer: '5000'
			});
		}
	};

	const convertToBase64 = files => {
		var arrayAux = [];
		Array.from(files).forEach(file => {
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function() {
				let base64 = reader.result;
				arrayAux.push(base64);
			};
		});
		setImagesFiles(arrayAux);
	};
	const options = categories.map(c => ({ label: c.name, value: c.id }));
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
					onChange={e => changeInput(e)}
					onSubmit={handleSubmit(submit)}
				>
					<div className={styles.box1}>
						<label> Name Product: </label>

						<input
							className={styles.input}
							type='text'
							name='name'
							autoComplete='off'
							onChange={e => changeInput(e)}
							{...register('name', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 20,
									massage: 'less than 20 characters required'
								},
								minLength: {
									value: 3,
									message: 'requires more than 3 characters'
								},
								pattern: {
									value: /^[a-zA-Z ]*$/,
									message:
										'does not require numbers, does not accept symbols "! # $% & / () =.; - *"'
								}
							})}
						></input>
						<span>{errors?.name?.message}</span>

						<label>Price:</label>
						<input
							className={styles.input}
							type='number'
							name='price'
							min='0'
							onChange={e => changeInput(e)}
							{...register('price', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 7,
									massage: 'less than 7 characters required'
								},
								minLength: {
									value: 3,
									message: 'requires more than 3 characters'
								}
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
							onChange={e => changeInput(e)}
							{...register('priceSpecial', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 7,
									massage: 'less than 7 characters required'
								},
								minLength: {
									value: 3,
									message: 'requires more than 3 characters'
								}
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
							onChange={e => changeInput(e)}
							{...register('description', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 200,
									massage: 'less than 200 characters required'
								},
								minLength: {
									value: 10,
									message: 'requires more than 10 characters'
								},
								pattern: {
									value: /^[a-zA-Z ]*$/,
									message:
										'does not require numbers, does not accept symbols "! # $% & / () =.; - *"'
								}
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
							maxLength='4'
							onChange={e => changeInput(e)}
							{...register('weight', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 4,
									massage: 'less than 4 characters required'
								},
								minLength: {
									value: 1,
									message: 'requires more than 1 characters'
								}
								// pattern:{
								//     value: /^[a-zA-Z]*$/,
								//     message:"no debe ingresar numeros"
								// }
							})}
						/>
						<span>{errors?.weight?.message}</span>

						<label className={styles.labelSelect}>Image:</label>
						{/* <input
							className={styles.input}
							type='text'
							name='image'
							// name="images[]"
							// id="fileInput"
							// multiple
							onChange={e => changeInput(e)}
							{...register('image', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								// maxLength: {
								// 	value: 20,
								// 	massage: 'less than 20 characters required'
								// },
								// minLength: {
								// 	value: 3,
								// 	message: 'requires more than 3 characters'
								// }
								// pattern: {
								// 	value: /^[a-zA-Z]*$/,
								// 	message: 'no debe ingresar numeros',
								// },
							})}
						/> */}
						<input
							name='images'
							type='file'
							multiple
							onChange={e => convertToBase64(e.target.files)}
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
							onChange={e => changeInput(e)}
							{...register('stock', {
								// required:{
								//     value: true,
								//     massage: "debe ingresar un nombre"
								// },
								maxLength: {
									value: 4,
									massage: 'less than 4 characters required'
								},
								minLength: {
									value: 1,
									message: 'requires more than 1 characters'
								}
								// pattern:{
								//     value: /^[a-zA-Z]*$/,
								//     message:"no debe ingresar numeros"
								// }
							})}
						/>
						<span>{errors?.stock?.message}</span>

						<label className={styles.labelSelect}>Brand:</label>
						<select
							className={styles.selectBrand}
							type='text'
							name='brandId'
							onChange={e => changeInput(e)}
							{...register('brandId', {})}
						>
							<option></option>
							{brand.map((x, index) => (
								<option key={index} value={x.id}>
									{x.name}
								</option>
							))}
						</select>

						<label for='type' className={styles.labelSelect}>
							Selected Categories
						</label>
						<Select
							isMulti
							name='category'
							options={options}
							onChange={changeChange}
							id={styles.selectCategories}
						/>
					</div>

					<ButtonRed type='submit'> Add </ButtonRed>
				</form>
			</div>
		</div>
	);
}
export default AddProduct;
