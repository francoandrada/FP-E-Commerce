import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { addToCart, getProductById } from '../../Redux/actions';
import styles from './productDetail.module.css';
import TitleStyle from '../StyledComponents/TitleStyle';
import ButtonRedOther from '../StyledComponents/ButtonRedOther';
import ButtonGreyOther from '../StyledComponents/ButtonGreyOther';
import { Link } from 'react-router-dom';
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
							<div className='m-3 d-block'>
								{productDetail.stock > 0 ? (
									<div className='m-3'>
										<ButtonRedOther
											className='btn btn-outline-danger'
											type='submit'
											onClick={() => dispatch(addToCart(productDetail))}
										>
											Add to Cart
										</ButtonRedOther>
									</div>
								) : (
									<ButtonRedOther type='submit'>Sin Stock</ButtonRedOther>
								)}
								<div className='m-3'>
									<Link to='/shoppingcart'>
										<ButtonGreyOther
											className='btn btn-secondary'
											type='submit'
											onClick={() => dispatch(addToCart(productDetail))}
										>
											Checkout
										</ButtonGreyOther>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}

			<div className={styles.descriptionProduct}>
				<div className='container'>
					<div className='row'>
						<div className='col col-lg-2 '>
							<p>Description</p>
						</div>

						<div className='col'>
							<p>{productDetail.description} </p>
						</div>
						<div className='w-100 d-none d-md-block'></div>

						{productDetail.brand ? (
							<Fragment>
								<div className='col col-lg-2 '>
									<p>Brand</p>
								</div>
								<div className='col '>
									<p>{productDetail.brand.name} </p>
								</div>
							</Fragment>
						) : null}
						<div className='w-100 d-none d-md-block'></div>
						{productDetail.weigth ? (
							<Fragment>
								<div className='col-6 col-sm-4'>
									<p>{productDetail.brand.name} </p>
								</div>
								<div className='col-6 col-sm-4'>
									<p>Weigth</p>
								</div>
							</Fragment>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailProduct;
