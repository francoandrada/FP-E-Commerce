import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductById } from '../../Redux/actions'
import styles from './productDetail.module.css'

function DetailProduct(props) {
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.product.detailProducts)

    useEffect(() => {
        dispatch(getProductById(props.match.params.id))
    }, [])
    console.log(productDetail)
    return (
        <div className={styles.container}>
            {productDetail ?
                <div>
                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img src={productDetail.image} alt="product" />
                        </div>
                        <div className={styles.productCard}>
                            <p>{productDetail.name} </p>
                            <p>${productDetail.price} </p>
                            <button>Shop</button>
                        </div>
                    </div>
                </div> : null}
                        <div className={styles.data}>
                            <p>{productDetail.description} </p>
                            <p>{productDetail.brand} </p>
                            <p>{productDetail.weigth} </p>
                            <p>{productDetail.stock} </p>
                        </div>
        </div>
    )
}

export default DetailProduct