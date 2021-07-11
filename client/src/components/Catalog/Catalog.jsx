import Products from "../Products/Products";
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCategories, getBrands } from '../../Redux/actions'



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
        <div>
            <Products />
        </div>
    )
}

export default Catalog;