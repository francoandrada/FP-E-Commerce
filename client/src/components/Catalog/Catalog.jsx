import Products from "../Products/Products";
import FilterCategories from "../FilterCategories/FilterCategories"
import FilterBrands from "../FilterBrands/FilterBrands";
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCategories, getBrands,getProducts } from '../../Redux/actions'
import styles from './Catalog.module.css'



function Catalog() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())    
    }, [] )

    useEffect(() => {
        dispatch(getBrands())    
    }, [] )

    useEffect(() => {
		dispatch(getProducts());
	}, []);


    return (
        <div id={styles.catalogue}>

                
                <div id={styles.filterContainer}>
                <FilterCategories id={styles.filterContaine} /> 
                 <FilterBrands id={styles.filter}/>

                </div>
                 <Products id={styles.productsContainer}/>
        
        
       </div> 

    )
}

export default Catalog;
