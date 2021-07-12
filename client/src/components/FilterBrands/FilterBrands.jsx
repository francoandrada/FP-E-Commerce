import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
// import styles from './FilterBrands.module.css';
import styles from '../FilterCategories/Filter.module.css';
import { getBrands, filterBrandProduct, getProducts } from '../../Redux/actions';


function FilterBrands () {
    const BrandName = useSelector((state) => state.brands.allBrands)
    
    const category= useSelector((state)=>state.category.selectedCategory)

    const products= useSelector((state)=> state.product.allProducts)
	const dispatch = useDispatch();
    const [brand, setBrand] = useState("")

    useEffect(()=>unCheck(brand),[brand]
    )

    useEffect(()=>dispatch(filterBrandProduct(brand)),[brand]
    )
    const unCheck = (arg)=>{
        let boxes = document.getElementsByClassName("form-check-input")
        for(let i=0;i<boxes.length;i++){
            boxes[i].id===arg?
            boxes[i].checked= true
            : boxes[i].checked= false
        }
    }
    const onClickedBox=(event)=>{
        event.target.checked?setBrand(event.target.id):setBrand("")
       
    }

    if(category.length > 0){
       var allProducts = products.filter(product=>product.categories[0].name===category)
       
        var array=[]
       for(let i=0; i< BrandName.length; i++){
           for(let j=0; j< allProducts.length; j++){
               if(BrandName[i].id === allProducts[j].brandId){
                array.push(BrandName[i])
               }
           }
       }
       const dataArr = new Set(array);
       var result = [...dataArr];
      
    }


return (

	<div className={styles.div_cont_filter}>
			<h6 className={styles.title}>Filter by Brands</h6>
            <hr></hr>
			{category ? (
                result.map((item, index) => (
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
							id={item.id}
                            // checked='true'
							key={index}
							onClick={(event) => onClickedBox(event)}
                            // onClick={() => console.log(prueba.checked)}

						/>
						<label className='form-check-label' for='defaultCheck1'>
							{item.name}
						</label>
					</div>
				))
				
			) : (
				BrandName.map((item, index) => (
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
							id={item.id}
                            // checked='true'
							key={index}
							onClick={(event) => onClickedBox(event)}
                            // onClick={() => console.log(prueba.checked)}

						/>
						<label className='form-check-label' for='defaultCheck1'>
							{item.name}
						</label>
					</div>
				))
			)}
                  
		</div>
    
)
}
export default FilterBrands;