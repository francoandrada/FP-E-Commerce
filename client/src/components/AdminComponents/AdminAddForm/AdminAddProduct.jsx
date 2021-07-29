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
			// data.image &&
			// data.image.length > 0 &&
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
						<label className={styles.titles}> Name Product: </label>

						<input
							className={styles.input}
							type='text'
							name='name'
							autoComplete='off'
							onChange={e => changeInput(e)}
							{...register('name', {
								maxLength: {
									value: 20,
									message: 'Less than 20 letter characters required'
								},
								minLength: {
									value: 3,
									message: 'requires more than 3 characters'
								},
								pattern: {
									value: /^[a-zA-Z ]*$/,
									message:
										'Does not require numbers, does not accept symbols(( "! # $% & / () =.; - *"))'
								}
							})}
						></input>
						<span className={styles.err}>{errors?.name?.message}</span>

						<label className={styles.titles}>Price:</label>
						<input
							className={styles.input}
							type='number'
							name='price'
							min='0'
							onChange={e => changeInput(e)}
							{...register('price', {
								maxLength: {
									value: 7,
									message:
										'No more than seven characters of numeric type are required'
								},
								minLength: {
									value: 3,
									message: 'requires more than 3 characters'
								}
							})}
						/>
						<span className={styles.err}>{errors?.price?.message}</span>

						<label className={styles.titles}>Special Price:</label>
						<input
							className={styles.input}
							type='number'
							name='priceSpecial'
							min='0'
							onChange={e => changeInput(e)}
							{...register('priceSpecial', {
								maxLength: {
									value: 7,
									message:
										'No more than seven characters of numeric type are required.'
								},
								minLength: {
									value: 3,
									message: 'Requires more than 3 characters'
								}
							})}
						/>
						<span className={styles.err}>{errors?.priceSpecial?.message}</span>

						<label className={styles.titles}>Description:</label>
						<input
							className={styles.input}
							type='text'
							name='description'
							onChange={e => changeInput(e)}
							{...register('description', {
								maxLength: {
									value: 200,
									message: 'Less than 200 characters type letters required'
								},
								minLength: {
									value: 10,
									message: 'Requires more than 10 characters'
								},
								pattern: {
									value: /^[a-zA-Z ]*$/,
									message:
										'Does not require numbers, does not accept symbols (("! # $% & / () =.; - *"))'
								}
							})}
						/>
						<span className={styles.err}>{errors?.description?.message}</span>

						<label className={styles.titles}>Weight:</label>
						<input
							className={styles.input}
							type='number'
							name='weight'
							min='0'
							maxLength='4'
							onChange={e => changeInput(e)}
							{...register('weight', {
								maxLength: {
									value: 4,
									message:
										'No more than four characters of numeric type are required.'
								},
								minLength: {
									value: 1,
									message: 'requires more than 1 characters'
								}
							})}
						/>
						<span>{errors?.weight?.message}</span>

						<label className={styles.titles}>Image:</label>
						{/* <input
					className={styles.input}
					type='text'
					name='image'
					onChange={e => changeInput(e)}
					{...register('image', {
						// maxLength: {
						// 	value: 20,
						// 	massage: 'menos de 20 caracteres'
						// },
						// minLength: {
						// 	value: 3,
						// 	message: 'mas de 3 caracteres'
						// }
					})}
				/> */}
						<input
							name='images'
							type='file'
							multiple
							onChange={e => convertToBase64(e.target.files)}
						/>
						<span className={styles.err}>{errors?.image?.message}</span>

						<label className={styles.titles}>Stock:</label>
						<input
							className={styles.input}
							type='number'
							name='stock'
							min='0'
							onChange={e => changeInput(e)}
							{...register('stock', {
								maxLength: {
									value: 4,
									message:
										'No more than four characters of numeric type are required.'
								},
								minLength: {
									value: 1,
									message: 'requires more than 1 characters'
								}
							})}
						/>
						<span className={styles.err}>{errors?.stock?.message}</span>

						<label className={styles.titles}>Brand:</label>
						<select
							className={styles.input1}
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

						<label className={styles.titles} for='type'>
							Selected Categories
						</label>
						<Select
							className={styles.input1}
							width='20px'
							isMulti
							name='category'
							options={options}
							onChange={changeChange}
						/>
					</div>

					<ButtonRed className={styles.btn} type='submit'>
						{' '}
						Add{' '}
					</ButtonRed>
				</form>
			</div>
		</div>
	);
}
export default AddProduct;
