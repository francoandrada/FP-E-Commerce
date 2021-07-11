import Products from "../Products/Products";
import FilterCategories from "../FilterCategories/FilterCategories"
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCategories, getBrands } from '../../Redux/actions'
import styles from './Catalog.module.css'



function Catalog() {
    const allCategories = useSelector(state=> state.category.allCategories)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())    
    }, [] )

    useEffect(() => {
        dispatch(getBrands())    
    }, [] )


    return (
        <div id={styles.catalogue}>
            <FilterCategories id={styles.filterContainer}/> 
            <Products id={styles.productsContainer}/> 
        </div>
    )
}

export default Catalog;
