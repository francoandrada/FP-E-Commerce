import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { addToCart, getProductById } from '../../Redux/actions';
import styles from './productDetail.module.css';
import TitleStyle from '../StyledComponents/TitleStyle';
import ButtonRedOther from '../StyledComponents/ButtonRedOther';
import ButtonGreyOther from '../StyledComponents/ButtonGreyOther';
import AllStars from '../Reviews/AllStars';
import Review from '../Reviews/StarAverage';
import AllReviews from '../Reviews/AllReviews';
import { allReviews } from '../../Redux/actionsReview';
import { Link } from 'react-scroll';
import './index.css';
function DetailProduct(props) {
	const dispatch = useDispatch();
	const productDetail = useSelector((state) => state.product.detailProducts);

	useEffect(() => {
		dispatch(getProductById(props.match.params.id));
	}, []);

	useEffect(() => {
		dispatch(allReviews(props.match.params.id));
	}, []);

	return (
		<div className={styles.container}>
			{productDetail ? (
				<div>
					<div className={styles.card}>
						<div className={styles.imgContainer}>
							<img
								className={styles.imag}
								src={productDetail.image}
								alt='product'
							/>
						</div>

						<div className={styles.productCard}>
							<TitleStyle>{productDetail.name}</TitleStyle>
							<Link to='review' spy={true} smooth={true}>
								<Review className={styles.hei} />
							</Link>
							<AllStars />
							<p className={styles.texto}>${productDetail.price} </p>

							<span> Stock: {productDetail.stock} </span>

							<div
								className={
									window.screen.width > 430 ? 'm-3 d-block' : 'buttons'
								}
							>
								{productDetail.stock > 0 ? (
									<>
										<div
											className={window.screen.width > 430 ? 'm-3' : 'button'}
										>
											<button
												className={
													window.screen.width > 430
														? 'btn btn-outline-danger'
														: 'btnCart'
												}
												type='submit'
												onClick={() => dispatch(addToCart(productDetail))}
											>
												Add to Cart
											</button>
										</div>
										<Link to='/shoppingcart'>
											<div class='m-3'>
												<ButtonGreyOther
													className={
														window.screen.width > 430
															? 'btn btn-outline-danger'
															: 'btnCheckout'
													}
													type='submit'
													onClick={() => dispatch(addToCart(productDetail))}
												>
													Checkout
												</ButtonGreyOther>
											</div>
										</Link>
									</>
								) : (
									<>
										<ButtonRedOther type='submit'>Sin Stock</ButtonRedOther>
										<input type='checkbox' />{' '}
										<label className={styles.label}>
											{' '}
											I want to know when it is available
										</label>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			) : null}

			<div className={styles.descriptionProduct}>
				<div className=''>
					<div className={styles.containerDescription}>
						<div className={styles.Tittle}>
							<h6>Description</h6>
						</div>
						<hr className={styles.line} />
						<div className={styles.description}>
							<p>{productDetail.description} </p>
						</div>
					</div>
					{productDetail.brand ? (
						<Fragment>
							<div className={styles.containerBrand}>
								<div className={styles.Tittle}>
									<h6>Brand</h6>
								</div>
								<div className={styles.brand}>
									<span>{productDetail.brand.name} </span>
								</div>
							</div>
						</Fragment>
					) : null}
					{productDetail.weigth ? (
						<Fragment>
							<div className={styles.containerWeigth}>
								<div className={styles.Tittle}>
									<h6>Weigth</h6>
								</div>
								<div className={styles.weigth}>
									<span>{productDetail.brand.name} </span>
								</div>
							</div>
						</Fragment>
					) : null}
				</div>
			</div>
			<div className='w-100 ' id='review'>
				<div className={styles.descriptionProduct}>
					<AllReviews />
				</div>
			</div>
		</div>
	);
}

export default DetailProduct;
