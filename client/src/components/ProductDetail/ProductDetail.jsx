import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductById } from '../../Redux/actions'

function DetailProduct(props) {
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productReducer.productDetail)
    useEffect(() => {
        dispatch(getProductById(props.match.params.id))
    }, [])

    retrun(
        <div>
            {productDetail ? 
            <>
                <p>{productDetail.name} </p>
                <p>{productDetail.price} </p>
                <p>{productDetail.description} </p>
                <p>{productDetail.image} </p>
                <p>{productDetail.brand} </p>
                <p>{productDetail.weigth} </p>
                <p>{productDetail.stock} </p>
            </> : null}
        </div>
    )
}

export default DetailProduct