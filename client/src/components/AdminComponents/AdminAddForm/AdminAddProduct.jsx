
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {createdProduct, getProducts, getCategories, getBrands} from "../../../Redux/actions"
import { useForm } from 'react-hook-form';
import Select from 'react-select';
// import MultiSelect from "react-multi-select-component";
import swal from 'sweetalert';


function AddProduct () {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.allProducts)
    const brand = useSelector((state) => state.brands.allBrands);
	const categories = useSelector((state) => state.category.allCategories);
    // var id = props.match.params.id

	const [selectCategory, setCategory] = useState([]);
    useEffect(()=>{
		dispatch(getBrands())
		dispatch(getCategories());
    },[dispatch])
	
    const {
		register,
        handleSubmit,
        formState: { errors },
        reset
	} = useForm();
	
	const  changeInput = (e)=> {
		console.log(e)
	}

    const submit=(data, e)=>{
		// data.category =
        console.log(data)
        for(let i=0 ; i< products.length; i++){
            if(products[i].name.toLowerCase() === data.name.toLowerCase()){
             return  swal({
                    title: 'Existing name',
                    icon: 'warning',
                    button: 'ok',
                    timer: '5000',
                })
            }
        }
        if (
			(data.name && data.name.length > 0) &&
			(data.price && data.price.length > 0) &&
			(data.priceSpecial && data.priceSpecial.length > 0) &&
			(data.description && data.description.length > 0) &&
			(data.weight && data.weight.length > 0) &&
			(data.image && data.image.length > 0) &&
			(data.stock && data.stock.length > 0) &&
			(data.category && data.category.length > 0) &&
			(data.brandId && data.brandId.length > 0)
		){
            dispatch(createdProduct(data))
            e.target.reset()
            swal({
                title:"Product Created!!",
                icon: "success",
                button: "ok",
                timer: "5000"
            })
            .then(()=> dispatch(getProducts()))

            reset({data})

        }else{
            swal({
                title:"All fields are required",
                icon: "error",
                button: "ok",
                timer: "5000"
            })
        }
    }

	
	var options= categories.map((c)=>({label: c.name, value: c.id}))
    return (
        <div>
            <form
            className=""
            onChange={(e)=>changeInput(e)}
            onSubmit={handleSubmit(submit)}
            >
                
           <h6> Name Product</h6>
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


            
				<h6>Price</h6>
				<input
					className=''
					type='number'
					name='price'
                    min='0'
					onChange={(e) => changeInput(e)}
					{...register('price', {
						// required:{
						//     value: true,
						//     massage: "debe ingresar un nombre"
						// },
						maxLength: {
							value: 8,
							massage: 'menos de 8 caracteres',
						},
						minLength: {
							value: 3,
							message: 'mas de 3 caracteres',
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
					className=''
					type='number'
					name='priceSpecial'
                    min='0'
					onChange={(e) => changeInput(e)}
					{...register('priceSpecial', {
						// required:{
						//     value: true,
						//     massage: "debe ingresar un nombre"
						// },
						maxLength: {
							value: 8,
							massage: 'menos de 8 caracteres',
						},
						minLength: {
							value: 3,
							message: 'mas de 3 caracteres',
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
					className=''
					type='text'
					name='description'
					onChange={(e) => changeInput(e)}
					{...register('description', {
						// required:{
						//     value: true,
						//     massage: "debe ingresar un nombre"
						// },
						maxLength: {
							value: 200,
							massage: 'menos de 200 caracteres',
						},
						minLength: {
							value: 10,
							message: 'mas de 10 caracteres',
						},
						pattern: {
							value: /^[a-zA-Z ]*$/,
							message: 'no debe ingresar numeros',
						},
					})}
				/>
				<span>{errors?.description?.message}</span>
            




            	<h6>Weight</h6>
				<input
					className=''
					type='number'
					name='weight'
                    min='0'
					onChange={(e) => changeInput(e)}
					{...register('weight', {
						// required:{
						//     value: true,
						//     massage: "debe ingresar un nombre"
						// },
						maxLength: {
							value: 4,
							massage: 'menos de 4 caracteres',
						},
						minLength: {
							value: 1,
							message: 'mas de 1 caracteres',
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
					className=''
					type='text'
					name='image'
					// name="images[]"
					// id="fileInput"
					// multiple
					onChange={(e) => changeInput(e)}
					{...register('image', {
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
							value: /^[a-zA-Z]*$/,
							message: 'no debe ingresar numeros',
						},
					})}
				/>
				<span>{errors?.image?.message}</span>


                <h6>Stock</h6>
				<input
					className=''
					type='number'
					name='stock'
					min='0'
					onChange={(e) => changeInput(e)}
					{...register('stock', {
						// required:{
						//     value: true,
						//     massage: "debe ingresar un nombre"
						// },
						maxLength: {
							value: 4,
							massage: 'menos de 4 caracteres',
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
					className=''
					type='text'
					name='brandId'
					onChange={(e) => changeInput(e)}
					{...register('brandId', {
					
					})}
				>
					<option></option>
					{brand.map((x, index) => (
						<option key={index} value={x.id}>
							{x.name}
						</option>
					))}
				</select>
				{/* <span>{errors?.brandId.message}</span> */}

				<Select 
                       
						isMulti
                        className= ''
                        name='category'
						value={selectCategory}
						options={options}
                        onChange={(e) => changeInput(e)} 
						/>
                    
                 

			{/* <label for="type">Selected Categories</label>
              <MultiSelect
			  name= 'category'
              className=''
			  options={options}
			  value={selectedCategory}
			  onChange={(e) => changeInput(e)}
			//   {...register('category', {
				
			// })}
			  /> */}
			  {/* <h6>Category</h6> */}
				{/* <select
					className=''
					type='text'
					name='category'
					onChange={(e) => changeInput(e)}
					{...register('category', {
				
					})}
				>
					<option></option>
					{categories.map((x, index) => (
						<option key={index} value={x.id}>
							{x.name}
						</option>
					))}
				</select> */}
				{/* <span>{errors?.categories?.message}</span> */}
            {/* <ButtonGrey type="submit">Modificar</ButtonGrey> */}
            <button type="submit">Add</button>

            </form>

        </div>
    )
}
export default AddProduct;