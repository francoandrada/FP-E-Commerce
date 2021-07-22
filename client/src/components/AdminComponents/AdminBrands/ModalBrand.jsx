import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap'
import { IoMdAddCircle } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { createdBrand, getBrands } from '../../../Redux/actions';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import styles from '../../Register/Register.module.css'
import { MdArrowBack } from 'react-icons/md'



function ModalBrand() {
    
    const [Active, setActive] = useState(false)

    const openModal = () => {
        setActive(!Active);
    }
    
	const dispatch = useDispatch();
	const allBrands = useSelector((state) => state.brands.allBrands);
	// var id = props.match.params.id
	// console.log(allBrands);
	useEffect(() => {
		dispatch(getBrands());
	}, [dispatch]);

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
		// data.id = id
		console.log(data);
		for (let i = 0; i < allBrands.length; i++) {
			if (allBrands[i].name.toLowerCase() === data.name.toLowerCase()) {
				return new Swal({
					title: 'Existing name',
					icon: 'warning',
					button: 'ok',
					timer: '5000',
				});
			}
		}
		if (data.name && data.name.length > 0) {
			dispatch(createdBrand(data));
			e.target.reset();
			new Swal({
				title: 'Brand Created!!',
				icon: 'success',
				button: 'ok',
				timer: '5000',
			}).then(() => dispatch(getBrands()));

			reset({ data });
		} else {
			new Swal({
				title: 'Require Brand',
				icon: 'error',
				button: 'ok',
				timer: '5000',
			});
		}
	};
    return (
        <>
            <Button onClick={openModal}>
                {' '}
                <IoMdAddCircle /> Add Brand{' '}
            </Button>

            <Modal isOpen={Active}>
                <ModalHeader>
                    Add Brand
                </ModalHeader>

                <form className=''
				onChange={(e) => changeInput(e)}
				onSubmit={handleSubmit(submit)}>
                    <ModalBody>
                        <FormGroup>


                            <Label for='name'> Name: </Label>
                            <Input className=''
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
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button type='submit'> Add </Button>
                        <Button onClick={openModal}> Close </Button>
                    </ModalFooter>
                </form>
            </Modal>
        </>
    )
}
export default ModalBrand