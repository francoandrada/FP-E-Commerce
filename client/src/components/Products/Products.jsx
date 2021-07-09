import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../Redux/actions'
import { Link } from 'react-router-dom'

function Products() {
    const allProducts = useSelector(state => state.productReducer.allProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())

    }, [allProducts])

    return (
        <div>
            {allProducts.map(p => {
                return (
                    <div>
                        <Link key={p.id} to={`/catalog/${p.id}`}>
                            <span>{p.name}</span>
                        </Link>
                        <span>{p.price}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;