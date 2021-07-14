import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {modifyBrand} from "../Redux/actions"
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


function PutBrand () {
    const dispatch = useDispatch()

    useEffect(()=>{
    //  dispatch(getBrands())
    //  dispatch(getCategories())
    //  dispatch(getProducts())
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
        // console.log(data)
        if(data.id && data.id.length >0){
            dispatch(modifyBrand(data))
            e.target.reset()
            swal({
                title:"Brand Modified!!",
                icon: "success",
                button: "ok",
                timer: "5000"
            })
            // .then(()=> dispatch(getProducts()))

            reset({data})

        }else{
            swal({
                title:"Require Brand",
                icon: "error",
                button: "ok",
                timer: "5000"
            })
        }
    }



    return (
        <div>
            <form
            className=""
            onChange={(e)=>changeInput(e)}
            onSubmit={handleSubmit(submit)}
            >
                
           <h6> New Name Brand</h6>
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
            // maxLength:{
            //     value: 20,
            //     massage:"menos de 20 caracteres"
            // },
            // minLength:{
            //     value: 3,
            //     message:"mas de 3 caracteres"
            // },
            // pattern:{
            //     value: /^[a-zA-Z]*$/,
            //     message:"no debe ingresar numeros"
            // }
            })}
            >
            
            </input>
            <span>{errors?.name?.message}</span> 

            {/* <ButtonGrey type="submit">Modificar</ButtonGrey> */}
            <button type="submit"></button>

            </form>

        </div>
    )
}
export default PutBrand;