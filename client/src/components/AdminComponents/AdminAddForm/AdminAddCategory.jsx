import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {createdCategory, getCategories} from "../../../Redux/actions"
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import styles from '../../Register/Register.module.css'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom';


function AddCategory () {
    const dispatch = useDispatch()
    const nameCategory= useSelector((state)=> state.category.allCategories)
   
    console.log(nameCategory)
    useEffect(()=>{
     dispatch(getCategories())
    },[dispatch])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();

      
      const  changeInput = (e)=> {
          const value= e.target.value
          const name= e.target.name
          //  console.log(value, name)
          
        }

    const submit=(data, e)=>{
        // data.id = id
        console.log(data)
        for(let i=0 ; i< nameCategory.length; i++){
            if(nameCategory[i].name.toLowerCase() === data.name.toLowerCase()){
             return  swal({
                    title: 'Existing name',
                    icon: 'warning',
                    button: 'ok',
                    timer: '5000',
                })
            }
        }
        if(data.name && data.name.length > 0 ){
            dispatch(createdCategory(data))
            e.target.reset()
            swal({
                title:"Category Created!!",
                icon: "success",
                button: "ok",
                timer: "5000"
            })
            .then(()=> dispatch(getCategories()))

            reset({data})

        }else{
            swal({
                title:"Require name Category",
                icon: "error",
                button: "ok",
                timer: "5000"
            })
        }
    }



    return (
        <div>
              <div className={styles.btnBackContainer}>
            	<Link to='/admin/categories'>
					
                    <MdArrowBack />
                
            </Link>
            </div>
            <form
            className=""
            onChange={(e)=>changeInput(e)}
            onSubmit={handleSubmit(submit)}
            >
                
           <h6> Created Category</h6>
            <input
            className=""
            type="text"
            name="name"
            onChange={(e)=>changeInput(e)}
            {...register("name", {
            // required:{
            //     value: true,
            //     massage: "debe ingresar un nombre"
            // },
            maxLength:{
                value: 20,
                massage:"menos de 20 caracteres"
            },
            minLength:{
                value: 3,
                message:"mas de 3 caracteres"
            },
            pattern:{
                value: /^[a-zA-Z ]*$/,
                message:"no debe ingresar numeros"
            }
            })}
            >
            
            </input>
            <span>{errors?.name?.message}</span> 

            {/* <ButtonGrey type="submit">Modificar</ButtonGrey> */}
            <button type="submit">Add</button>

            </form>

        </div>
    )
}
export default AddCategory;