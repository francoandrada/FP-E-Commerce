import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addToCart, getProductById } from '../../Redux/actions';
import styles from './productDetail.module.css';
import TitleStyle from '../StyledComponents/TitleStyle';
import ButtonRedOther from '../StyledComponents/ButtonRedOther';
import ButtonGreyOther from '../StyledComponents/ButtonGreyOther';
function DetailProduct(props) {
	const dispatch = useDispatch();
	const productDetail = useSelector((state) => state.product.detailProducts);

	useEffect(() => {
		dispatch(getProductById(props.match.params.id));
	}, []);

	return (
		<div className={styles.container}>
			{productDetail ? (
				<div>
					<div className={styles.card}>
						<div className={styles.imgContainer}>
							<img src={productDetail.image} alt='product' />
						</div>
						<div className={styles.productCard}>
							<TitleStyle>{productDetail.name}</TitleStyle>
							<p>${productDetail.price} </p>
							<span> Stock: {productDetail.stock} </span>
                            <div class='m-3 d-block'>
							<div class='m-3'>
                            <ButtonRedOther class='btn btn-outline-danger'
									type='submit'
									onClick={() => dispatch(addToCart(productDetail.id))}
								>
									Add to Cart
								</ButtonRedOther >
							</div>
                            <div class='m-3'>
								<ButtonGreyOther class='btn btn-secondary'
									type='submit'
									onClick={() => dispatch(addToCart(productDetail.id))}
								>
									Checkout
								</ButtonGreyOther >
							</div>
                            </div>
						</div>
					</div>
				</div>
			) : null}
			<div className={styles.descriptionProduct}>
				<p>{productDetail.description} </p>
				{productDetail.brand ? <p>{productDetail.brand.name} </p> : null}
				<p>{productDetail.weigth} </p>
			</div>
		</div>
	);
}

export default DetailProduct;
