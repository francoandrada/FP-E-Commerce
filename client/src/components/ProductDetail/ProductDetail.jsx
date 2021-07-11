import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductById } from '../../Redux/actions'
import styles from './productDetail.module.css'
import TitleStyle from '../StyledComponents/TitleStyle'
import ButtonRed from '../StyledComponents/ButtonRed'
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
                            <TitleStyle>
                                {productDetail.name}
                            </TitleStyle>
                            <p>${productDetail.price} </p>
                            <span> Stock: {productDetail.stock} </span>
                            <div>
                                <ButtonRed>
                                    Shop
                                </ButtonRed>
                            </div>
                        </div>
                    </div>
                </div> : null}
            <div className={styles.descriptionProduct}>
                <p>{productDetail.description} </p>
                {productDetail.brand ?
                    <p>{productDetail.brand.name} </p>
                    : null
                }
                <p>{productDetail.weigth} </p>
            </div>
        </div>
    )
}

export default DetailProduct