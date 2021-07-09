import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../Redux/actions'
import { Link } from 'react-router-dom'
import styles from './Products.module.css'

function Products() {
    const allProducts = useSelector(state => state.product.allProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const allCategories = useSelector(state=> state.categories.allCategories)




    return (
        <div className={styles.cardsContainer}>
            {allProducts.map(p => {
                return (
                    <div className={styles.card}>
                        <div className={styles.cardImage}> 
                        <img className={styles.img} src={p.image} alt="product" />
                        </div>
                        <div className={styles.data}> 
                        <Link key={p.id} to={`/catalog/${p.id}`}>
                            <span>{p.name}</span>
                        </Link>
                        <span>${p.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;