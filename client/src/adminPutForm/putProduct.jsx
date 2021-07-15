import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {modifyProduct, getBrands, getCategories, getProducts} from "../Redux/actions"
import { useForm } from 'react-hook-form';
import ButtonGrey from '../components/StyledComponents/ButtonGrey'
import swal from 'sweetalert';


function PutProduct(){
    const dispatch = useDispatch()

    useEffect(()=>{
     dispatch(getBrands())
     dispatch(getCategories())
     dispatch(getProducts())
    },[dispatch])

    
    const brand = useSelector((state)=> state.brands.allBrands)
    const categories = useSelector((state)=> state.category.allCategories)
    const products = useSelector((state)=> state.product.allProducts)
    console.log(products)
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
                dispatch(modifyProduct(data))
                e.target.reset()
                swal({
                    title:"prodcuto modif",
                    icon: "success",
                    button: "ok",
                    timer: "5000"
                })
                .then(()=> dispatch(getProducts()))

                reset({data})

            }else{
                swal({
                    title:"Debe ingresar product",
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


<h6>Product</h6>
            <select 
            className=""
            type="text"
            name="id"
            onChange={(e)=>changeInput(e)}
            {...register("id", {
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
            <option></option>
            {
               products.map((x, index)=>(
                   <option key={index} value={x.id}>{x.name}</option>
               )) 
            }
            </select>
            <span>{errors?.id?.message}</span> 


            <h6>Name</h6>
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
                value: /^[a-zA-Z]*$/,
                message:"no debe ingresar numeros"
            }
            })}
            />
            <span>{errors?.name?.message}</span>
            



            <h6>Price</h6>
            <input 
            className=""
            type="number"
            name="price"
            onChange={(e)=>changeInput(e)}
            {...register("price", {
            // required:{
            //     value: true,
            //     massage: "debe ingresar un nombre"
            // },
            maxLength:{
                value: 8,
                massage:"menos de 8 caracteres"
            },
            minLength:{
                value: 3,
                message:"mas de 3 caracteres"
            },
            // pattern:{
            //     value: /^[a-zA-Z]*$/,
            //     message:"no debe ingresar numeros"
            // }
            })}
            />
            <span>{errors?.price?.message}</span>




            <h6>Special Price</h6>
            <input 
            className=""
            type="number"
            name="priceSpecial"
            onChange={(e)=>changeInput(e)}
            {...register("priceSpecial", {
            // required:{
            //     value: true,
            //     massage: "debe ingresar un nombre"
            // },
            maxLength:{
                value: 8,
                massage:"menos de 8 caracteres"
            },
            minLength:{
                value: 3,
                message:"mas de 3 caracteres"
            },
            // pattern:{
            //     value: /^[a-zA-Z]*$/,
            //     message:"no debe ingresar numeros"
            // }
            })}
            />
            <span>{errors?.priceSpecial?.message}</span>




        <h6>Description</h6>
            <input 
            className=""
            type="text"
            name="description"
            onChange={(e)=>changeInput(e)}
            {...register("description", {
            // required:{
            //     value: true,
            //     massage: "debe ingresar un nombre"
            // },
            maxLength:{
                value: 200,
                massage:"menos de 200 caracteres"
            },
            minLength:{
                value: 10,
                message:"mas de 10 caracteres"
            },
            pattern:{
                value: /^[a-zA-Z]*$/,
                message:"no debe ingresar numeros"
            }
            })}
            />
            <span>{errors?.description?.message}</span>



            <h6>Weight</h6>
            <input 
            className=""
            type="number"
            name="weight"
            onChange={(e)=>changeInput(e)}
            {...register("weight", {
            // required:{
            //     value: true,
            //     massage: "debe ingresar un nombre"
            // },
            maxLength:{
                value: 4,
                massage:"menos de 4 caracteres"
            },
            minLength:{
                value: 1,
                message:"mas de 1 caracteres"
            },
            // pattern:{
            //     value: /^[a-zA-Z]*$/,
            //     message:"no debe ingresar numeros"
            // }
            })}
            />
            <span>{errors?.weight?.message}</span>




            <h6>Image</h6>
            <input 
            className=""
            type="text"
            name="image"
            onChange={(e)=>changeInput(e)}
            {...register("image", {
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
                value: /^[a-zA-Z]*$/,
                message:"no debe ingresar numeros"
            }
            })}
            />
            <span>{errors?.image?.message}</span>

            <h6>Stock</h6>
            <input 
            className=""
            type="number"
            name="stock"
            min="0"
            onChange={(e)=>changeInput(e)}
            {...register("stock", {
            // required:{
            //     value: true,
            //     massage: "debe ingresar un nombre"
            // },
            maxLength:{
                value: 4,
                massage:"menos de 4 caracteres"
            },
            // minLength:{
            //     value: 1,
            //     message:"mas de 3 caracteres"
            // },
            // pattern:{
            //     value: /^[a-zA-Z]*$/,
            //     message:"no debe ingresar numeros"
            // }
            })}
            />
            <span>{errors?.stock?.message}</span>




<h6>Brand</h6>
            <select 
            className=""
            type="text"
            name="brandId"
            onChange={(e)=>changeInput(e)}
            {...register("brandId", {
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
            <option></option>
            {
               brand.map((x, index)=>(
                   <option key={index} value={x.id}>{x.name}</option>
               )) 
            }
            </select>
            <span>{errors?.brandId?.message}</span>




<h6>Category</h6>
            <select 
            className=""
            type="text"
            name="category"
            onChange={(e)=>changeInput(e)}
            {...register("category", {
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
            <option></option>
            {
               categories.map((x, index)=>(
                   <option key={index} value={x.id}>{x.name}</option>
               )) 
            }
            </select>
            <span>{errors?.category?.message}</span> 





            <ButtonGrey type="submit">Modificar</ButtonGrey>

            </form>
        </div>
    )
}
export default PutProduct;