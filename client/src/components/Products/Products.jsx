import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../Redux/actions'

function Products() {
    const allProducts = useSelector(state => state.productReducer.allProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    
    }, [allProducts])

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