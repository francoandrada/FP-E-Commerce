import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
	modifyProduct,
	getBrands,
	getCategories,
	getProductById,
} from '../../../Redux/actions';
import { useForm } from 'react-hook-form';
import ButtonRed from '../../../components/StyledComponents/ButtonRed';
import Swal from 'sweetalert2';
import styles from '../../Register/Register.module.css';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';




function PutProduct(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	const { id } = useParams();

	const brand = useSelector((state) => state.brands.allBrands);
	const categories = useSelector((state) => state.category.allCategories);
	const productToEdit = useSelector((state) => state.admin.productToEdit);



	useEffect(() => {
		dispatch(getBrands());
		dispatch(getCategories());
		dispatch(getProductById(id));
	}, []);

	const [product, setProduct] = useState({
		id:'',
		name: '',
		price: '',
		priceSpecial: '',
		description: '',
		weight: '',
		image: '',
		stock: '',
		brand: '',
		category:'',
	});

	useEffect(() => {
		if (productToEdit) {
			setProduct({
				id: productToEdit.id,
				name: productToEdit.name,
				price: productToEdit.price,
				priceSpecial: productToEdit.priceSpecial,
				description: productToEdit.description,
				weight: productToEdit.weight,
				image: productToEdit.image,
				stock: productToEdit.stock,
				brand: productToEdit.brand.name,
				category: productToEdit.category,
			});
		}
	}, [productToEdit]);

	console.log(product);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const handleChange = (event) => {
		console.log(event)
		setProduct({
			...product,
			[event.target.name]: event.target.value,
		});
	};



    const onSubmit = async ()=>{
			try {
				await axios.put('http://localhost:3001/admin/putproduct',product)
                .then(()=>{
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'The user was succesfully edited',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    history.push('/');
                }
                )

			} catch (error) {
				console.log(error.response.data.msg);
			}
	};

	return (
		<div className={styles.registerFormContainer} id={styles.registerFormOne}>
			<form
				className=''
				onChange={(e) => handleChange(e)}
				onSubmit={onSubmit}
			>
				<h6>Product</h6>
	

				<h6>Name</h6>
				<input
					className='form-group col-md-12' 
					name='name'
					value={product.name}
					onChange={(e) => handleChange(e)}
					{...register('name', {
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
				/>
				<span>{errors?.name?.message}</span>

				<h6>Price</h6>
				<input
					className='form-group col-md-12' 
					type='number'
					name='price'
					value={product.price}
					onChange={(e) => handleChange(e)}
					{...register('price', {
						maxLength: {
							value: 8,
							massage: 'menos de 8 caracteres',
						},
						minLength: {
							value: 3,
							message: 'mas de 3 caracteres',
						},
					})}
				/>
				<span>{errors?.price?.message}</span>

				<h6>Special Price</h6>
				<input
					className='form-group col-md-12'
					type='number'
					name='priceSpecial'
					value={product.priceSpecial}

					onChange={(e) => handleChange(e)}
					{...register('priceSpecial', {
						maxLength: {
							value: 8,
							massage: 'menos de 8 caracteres',
						},
						minLength: {
							value: 3,
							message: 'mas de 3 caracteres',
						},
					})}
				/>
				<span>{errors?.priceSpecial?.message}</span>

				<h6>Description</h6>
				<textarea
					className='form-group col-md-12' 
					type='text'
					name='description'
					value={product.description}

					onChange={(e) => handleChange(e)}
					{...register('description', {
						maxLength: {
							value: 200,
							massage: 'menos de 200 caracteres',
						},
						minLength: {
							value: 10,
							message: 'mas de 10 caracteres',
						},
						pattern: {
							value: /^[a-zA-Z]*$/,
							message: 'no debe ingresar numeros',
						},
					})}
				/>
				<span>{errors?.description?.message}</span>

				<h6>Weight</h6>
				<input
					className='form-group col-md-12'
					type='number'
					name='weight'
					value={product.weight}

					onChange={(e) => handleChange(e)}
					{...register('weight', {
						maxLength: {
							value: 4,
							massage: 'menos de 4 caracteres',
						},
						minLength: {
							value: 1,
							message: 'mas de 1 caracteres',
						},
					})}
				/>
				<span>{errors?.weight?.message}</span>

				<h6>Image</h6>
				<input
					className='form-group col-md-12' 
					type='text'
					name='image'
					value={product.image}

					onChange={(e) => handleChange(e)}
					{...register('image', {
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

				<h6>Stock</h6>
				<input
					className='form-group col-md-12'
					type='number'
					name='stock'
					min='0'
					value={product.stock}

					onChange={(e) => handleChange(e)}
					{...register('stock', {
						maxLength: {
							value: 4,
							massage: 'menos de 4 caracteres',
						},
					})}
				/>
				<span>{errors?.stock?.message}</span>

				<h6>Brand</h6>
				<select
					className='form-group col-md-12' 
					type='text'
					name='brand'
					value={product.brand}

					onChange={(e) => handleChange(e)}
					{...register('brandId', {
					})}
				>
					<option></option>
					{brand.map((x, index) => (
						<option key={index} value={x.name}>
							{x.name}
						</option>
					))}
				</select>
				<span>{errors?.brandId?.message}</span>

				<h6>Category</h6>
				<select
					className='form-group col-md-12'
					type='text'
					name='category'
					value={product.category}

					onChange={(e) => handleChange(e)}
					{...register('category', {
					})}
				>
					<option></option>
					{categories.map((x, index) => (
						<option key={index} value={x.id}>
							{x.name}
						</option>
					))}
				</select>
				<span>{errors?.category?.message}</span>
				<div className={styles.registerButtonRow}>
							<ButtonRed type='submit'>Confirm</ButtonRed>
				</div>
			</form>
		</div>
	);
}
export default PutProduct;
