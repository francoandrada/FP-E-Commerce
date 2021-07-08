import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../Redux/actions'

function Products() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    
    }, [products])

    return(
        <div>
            {products.map(p =>{
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