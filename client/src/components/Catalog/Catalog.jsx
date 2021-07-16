import Products from "../Products/Products";
import FilterCategories from "../FilterCategories/FilterCategories"
import OrderByPrice from '../OrderBox/OrderByPrice'
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

        
                <FilterCategories id={styles.filterContainer}/> 
                 <Products id={styles.productsContainer}/> 
        
       </div> 

    )
}

export default Catalog;
