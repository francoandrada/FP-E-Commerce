import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProducts, getCategories } from '../../Redux/actions'

function Products() {
    const allProducts = useSelector(state => state.product.allProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [])

    const allCategories = useSelector(state=> state.category.allCategories)

    return(
        <div>
            {allProducts.map(p =>{
                return(
                    <div> 
                        <span>{p.name}</span>
                        <span>{p.price}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;