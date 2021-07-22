import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { modifyCateogry } from '../../../Redux/actions';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap'
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from '../AdminCategories/AdminCategories.module.css';
import { MdArrowBack } from 'react-icons/md';

function PutCategory(props) {
	const dispatch = useDispatch();
	const nameCategory = useSelector((state) => state.category.allCategories);
	console.log(nameCategory);
	var id = props.category;
	useEffect(() => {
		//  dispatch(getBrands())
		//  dispatch(getCategories())
		//  dispatch(getProducts())
	}, [dispatch]);

	const [Active, setActive] = useState(false)

	const openModal = () => {
		setActive(!Active);
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const changeInput = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		//  console.log(value, name)
	};

	const submit = (data, e) => {
		data.id = id;
		console.log(data.id);
		for (let i = 0; i < nameCategory.length; i++) {
			if (nameCategory[i].name.toLowerCase() === data.name.toLowerCase()) {
				return new Swal({
					title: 'Existing name',
					icon: 'warning',
					button: 'ok',
					timer: '5000',
				});
			}
		}
		if (data.name && data.name.length > 0) {
			dispatch(modifyCateogry(data));
			e.target.reset();
			new Swal({
				title: 'Category modificada!!',
				icon: 'success',
				button: 'ok',
				timer: '5000',
			});
			// .then(()=> dispatch(getProducts()))

			reset({ data });
		} else {
			new Swal({
				title: 'Debe ingresar Category',
				icon: 'error',
				button: 'ok',
				timer: '5000',
			});
		}
	};

	return (
		<>
			{/* <div className={styles.btnBackContainer}>
				<Link to='/admin/categories'>
					<MdArrowBack />
				</Link>
			</div> */}
			<Button onClick={openModal}> <MdModeEdit /></Button>
			<Modal isOpen={Active}>
				<ModalHeader>
					Edit Category
				</ModalHeader>
				<form className=''
				onChange={(e) => changeInput(e)}
				onSubmit={handleSubmit(submit)}>
					<ModalBody>
						<FormGroup>
							<Label> New Name Category </Label>
							<Input className=''
					type='text'
					name='name'
					autoComplete='off'
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
					})}/>
						</FormGroup>

					</ModalBody>

					<ModalFooter>
					<Button type='submit'> Confirm </Button>
					<Button onClick={openModal}> Close </Button>
					</ModalFooter>
				</form>
			</Modal>
			{/* <form
				className=''
				onChange={(e) => changeInput(e)}
				onSubmit={handleSubmit(submit)}
			>
				<h6> New Name Category</h6>
				<input
					className=''
					type='text'
					name='name'
					autoComplete='off'
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

				<button type='submit'>Change</button>
			</form> */}
		</>
	);
}
export default PutCategory;
