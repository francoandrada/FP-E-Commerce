import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {modifyCateogry} from "../../../Redux/actions"
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


function PutCategory(props) {
    const dispatch = useDispatch()
    const nameCategory= useSelector((state)=> state.category.allCategories)
    console.log(nameCategory)
var id = props.match.params.id
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

        data.id = id
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
        if(data.name && data.name.length >0 ){
            dispatch(modifyCateogry(data))
            e.target.reset()
            swal({
                title:"Category modificada!!",
                icon: "success",
                button: "ok",
                timer: "5000"
            })
            // .then(()=> dispatch(getProducts()))

            reset({data})

        }else{
            swal({
                title:"Debe ingresar Category",
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
                
           <h6> New Name Category</h6>
            <input
            className=""
            type="text"
            name="name"
            autoComplete="off"
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

           
            <button type="submit">Change</button>

            </form>

        </div>
    )
}
export default PutCategory;