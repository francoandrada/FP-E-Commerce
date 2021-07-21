import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {modifyBrand} from "../../../Redux/actions"
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import styles from '../../Register/Register.module.css'
import { MdArrowBack } from 'react-icons/md'


function PutBrand (props) {
    const dispatch = useDispatch()
    const brands = useSelector((state)=> state.brands.allBrands)
    console.log(brands)
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
        for(let i=0 ; i< brands.length; i++){
            if(brands[i].name.toLowerCase() === data.name.toLowerCase()){
             return  Swal({
                    title: 'Existing name',
                    icon: 'warning',
                    button: 'ok',
                    timer: '5000',
                })
            }
        }
        if(data.name && data.name.length >0){
            dispatch(modifyBrand(data))
            e.target.reset()
            Swal({
                title:"Brand Modified!!",
                icon: "success",
                button: "ok",
                timer: "5000"
            })
            // .then(()=> dispatch(getProducts()))

            reset({data})

        }else{
            Swal({
                title:"Require Brand",
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
                
           <h6> New Name Brand</h6>
            <input
            className=""
            type="text"
            name="name"
            onChange={(e)=>changeInput(e)}
            {...register("name", {
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
            <button type="submit">Change</button>

            </form>

        </div>
    )
}
export default PutBrand;