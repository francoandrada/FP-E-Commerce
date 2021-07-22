import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap'
import { IoMdAddCircle } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { createdCategory, getCategories } from "../../../Redux/actions"
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import styles from '../../Register/Register.module.css'
import { MdArrowBack } from 'react-icons/md'



function ModalCategory() {
    const dispatch = useDispatch()
    const nameCategory = useSelector((state) => state.category.allCategories)

    console.log(nameCategory)
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const [Active, setActive] = useState(false)

    const openModal = () => {
        setActive(!Active);
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();


    const changeInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        //  console.log(value, name)

    }

    const submit = (data, e) => {
        // data.id = id
        console.log(data)
        for (let i = 0; i < nameCategory.length; i++) {
            if (nameCategory[i].name.toLowerCase() === data.name.toLowerCase()) {
                return Swal({
                    title: 'Existing name',
                    icon: 'warning',
                    button: 'ok',
                    timer: '5000',
                })
            }
        }
        if (data.name && data.name.length > 0) {
            dispatch(createdCategory(data))
            e.target.reset()
            Swal({
                title: "Category Created!!",
                icon: "success",
                button: "ok",
                timer: "5000"
            })
                .then(() => dispatch(getCategories()))

            reset({ data })

        } else {
            Swal({
                title: "Require name Category",
                icon: "error",
                button: "ok",
                timer: "5000"
            })
        }
    }

    return (
        <>
            <Button onClick={openModal}>
                {' '}
                <IoMdAddCircle /> Add Category{' '}
            </Button>

            <Modal isOpen={Active}>
                <ModalHeader>
                    Add Category
                </ModalHeader>

                <ModalBody>
                    <FormGroup
                        className=""
                        onChange={(e) => changeInput(e)}
                        onSubmit={handleSubmit(submit)}>
                            
                        <Label for='name'> Name: </Label>
                        <Input className=""
                            type="text"
                            name="name"
                            id='name'
                            onChange={(e) => changeInput(e)}
                            {...register("name", {
                                // required:{
                                //     value: true,
                                //     massage: "debe ingresar un nombre"
                                // },
                                maxLength: {
                                    value: 20,
                                    massage: "menos de 20 caracteres"
                                },
                                minLength: {
                                    value: 3,
                                    message: "mas de 3 caracteres"
                                },
                                pattern: {
                                    value: /^[a-zA-Z ]*$/,
                                    message: "no debe ingresar numeros"
                                }
                            })}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button type='submit'> Add </Button>
                    <Button onClick={openModal}> Close </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default ModalCategory