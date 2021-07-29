import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
	/*modifyProduct, */
	getBrands,
	getCategories,
	getProductById
} from '../../../Redux/actions';
import { useForm } from 'react-hook-form';
import ButtonRed from '../../../components/StyledComponents/ButtonRed';
import Swal from 'sweetalert2';
import styles from '../../Register/Register.module.css';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import Select from 'react-select';

const customStyles = {
	option: (provided, state) => ({
	  ...provided,
	  borderBottom: '1px dotted pink',
	  color: state.isSelected ? 'red' : 'blue',
	  padding: 20,
	}),
	control: () => ({
	  // none of react-select's styles are passed to <Control />
	  width: 200,
	}),
	singleValue: (provided, state) => {
	  const opacity = state.isDisabled ? 0.5 : 1;
	  const transition = 'opacity 300ms';
  
	  return { ...provided, opacity, transition };
	}
  }

function PutProduct() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [imagesFiles, setImagesFiles] = useState([]);
	const [oldImages, setOldImages] = useState();
	const { id } = useParams();

	const brand = useSelector((state) => state.brands.allBrands);
	const categories = useSelector((state) => state.category.allCategories);
	const productToEdit = useSelector((state) => state.admin.productToEdit);
	var [cate, setCate] = useState([]);

	useEffect(() => {
		dispatch(getBrands());
		dispatch(getCategories());
		dispatch(getProductById(id));
	}, [dispatch, id]);

	const [product, setProduct] = useState({
		id: '',
		name: '',
		price: '',
		priceSpecial: '',
		description: '',
		weight: '',
		image: '',
		stock: '',
		brand: '',
		category: ''
		// pictures:''
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
				brand: productToEdit.brand.id,
				category: productToEdit.categories[0].id
				// pictures:''
			});
		}
		if (productToEdit?.images) {
			setOldImages(productToEdit.images);
		}
	}, [productToEdit]);

	const {
		register,
		/*handleSubmit, */
		formState: { errors }
		/*reset, */
	} = useForm();
	function changeChange(e) {
		setCate((cate = e));
	}
	
	product.category = cate.map((c)=>c.value)
	
	const handleChange = (event) => {
		event.preventDefault();
		if (event.target.file) {
			convertToBase64();
		}
		setProduct({
			...product,
			[event.target.name]: event.target.value
		});
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

	const handleDeleteImage = async (event, id) => {
		event.preventDefault();
		try {
			setOldImages(oldImages.filter(oi => oi.id !== id));
			await axios
				.delete(`http://localhost:3001/admin/deleteImageProduct/${id}`)
				.then(() => {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'The image was successfully removed',
						showConfirmButton: false,
						timer: 1000
					});
				});
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = async event => {
		event.preventDefault();
		try {
			await axios
				.put('http://localhost:3001/admin/putproduct', {
					...product,
					images: imagesFiles
				})
				.then(() => {
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'The product was succesfully edited',
						showConfirmButton: false,
						timer: 1500
					});
					history.push('/admin');
				});
		} catch (error) {
			console.log(error.response.data.msg);
		}
	};
	const options = categories.map((c) => ({ label: c.name, value: c.id }));
	return (
		<div className={styles.registerFormContainer} id={styles.registerFormOne}>
			<div className={styles.btnBackContainer}>
				<Link to='/admin/products'>
					<MdArrowBack />
				</Link>
			</div>
			<form
				className=''
				onChange={e => handleChange(e)}
				onSubmit={onSubmit}
				encType='multipart/form-data'
			>
				<h6>Product</h6>

				<h6>Name</h6>
				<input
					className='form-group col-md-12'
					name='name'
					value={product.name}
					onChange={e => handleChange(e)}
					{...register('name', {
						maxLength: {
							value: 20,
							massage: 'menos de 20 caracteres'
						},
						minLength: {
							value: 3,
							message: 'mas de 3 caracteres'
						},
						pattern: {
							value: /^[a-zA-Z ]*$/,
							message: 'no debe ingresar numeros'
						}
					})}
				/>
				<span>{errors?.name?.message}</span>

				<h6>Price</h6>
				<input
					className='form-group col-md-12'
					type='number'
					name='price'
					value={product.price}
					onChange={e => handleChange(e)}
					{...register('price', {
						maxLength: {
							value: 8,
							massage: 'menos de 8 caracteres'
						},
						minLength: {
							value: 3,
							message: 'mas de 3 caracteres'
						}
					})}
				/>
				<span>{errors?.price?.message}</span>

				<h6>Special Price</h6>
				<input
					className='form-group col-md-12'
					type='number'
					name='priceSpecial'
					value={product.priceSpecial}
					onChange={e => handleChange(e)}
					{...register('priceSpecial', {
						maxLength: {
							value: 8,
							massage: 'menos de 8 caracteres'
						},
						minLength: {
							value: 3,
							message: 'mas de 3 caracteres'
						}
					})}
				/>
				<span>{errors?.priceSpecial?.message}</span>

				<h6>Description</h6>
				<textarea
					className='form-group col-md-12'
					type='text'
					name='description'
					value={product.description}
					onChange={e => handleChange(e)}
					{...register('description', {
						maxLength: {
							value: 200,
							massage: 'menos de 200 caracteres'
						},
						minLength: {
							value: 10,
							message: 'mas de 10 caracteres'
						},
						pattern: {
							value: /^[a-zA-Z ]*$/,
							message: 'no debe ingresar numeros'
						}
					})}
				/>
				<span>{errors?.description?.message}</span>

				<h6>Weight</h6>
				<input
					className='form-group col-md-12'
					type='number'
					name='weight'
					value={product.weight}
					onChange={e => handleChange(e)}
					{...register('weight', {
						maxLength: {
							value: 4,
							massage: 'menos de 4 caracteres'
						},
						minLength: {
							value: 1,
							message: 'mas de 1 caracteres'
						}
					})}
				/>
				<span>{errors?.weight?.message}</span>

				<h6>Image</h6>
				<input
					className='form-group col-md-12'
					type='text'
					name='image'
					value={product.image}
					onChange={e => handleChange(e)}
					{...register('image', {
						maxLength: {
							value: 20,
							massage: 'menos de 20 caracteres'
						},
						minLength: {
							value: 3,
							message: 'mas de 3 caracteres'
						},
						pattern: {
							value: /^[a-zA-Z]*$/,
							message: 'no debe ingresar numeros'
						}
					})}
				/>
				<input
					name='images'
					type='file'
					multiple
					onChange={e => convertToBase64(e.target.files)}
				/>
				<div className={styles.imagesNav}>
					{oldImages
						? oldImages.map((img, index) => (
								<div className={styles.btnDeleteImageContainer}>
									<img src={img.imageUrl} alt='product' />
									<button
										id={styles.btnDelete}
										onClick={e => handleDeleteImage(e, img.id)}
										className={styles.btnDeleteImage}
									>
										x
									</button>
								</div>
						  ))
						: null}
				</div>
				<span>{errors?.image?.message}</span>

				{/* <h6>Ingresa tus imagenes</h6>

				<input type='file' onChange={(event)=>imgUpload(event)}></input> */}

				<h6>Stock</h6>
				<input
					className='form-group col-md-12'
					type='number'
					name='stock'
					min='0'
					value={product.stock}
					onChange={e => handleChange(e)}
					{...register('stock', {
						maxLength: {
							value: 4,
							massage: 'menos de 4 caracteres'
						}
					})}
				/>
				<span>{errors?.stock?.message}</span>

				<h6>Brand</h6>
				<select
					className='form-group col-md-12'
					type='text'
					name='brand'
					value={product.brand.id}
					onChange={e => handleChange(e)}
				>
					{brand.map((x, index) => (
						<option
							key={index}
							value={x.id}
							selected={x.id === product.brand.id}
						>
							{x.name}
						</option>
					))}
				</select>
				<span>{errors?.brandId?.message}</span>
				<h6>Categories</h6>
						<Select
							styles={customStyles}
							menuColor='red'
							isMulti
							name='category'
							options={options}
							onChange={changeChange}
						/>

				{/* <h6>Category</h6> */}
				{/* <select
					className='form-group col-md-12'
					type='text'
					name='category'
					value={product.category}
					onChange={e => handleChange(e)}
				>
					{categories.map((x, index) => (
						<option
							key={index}
							value={x.id}
							selected={x.id === product.category.id}
						>
							{x.name}
						</option>
					))}
				</select> */}
				{/* <span>{errors?.category?.message}</span> */}
				<div className={styles.registerButtonRow}>
					<ButtonRed type='submit'>Confirm</ButtonRed>
				</div>
			</form>
		</div>
	);
}
export default PutProduct;
