import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { getProductById } from '../../Redux/actions';
import { BsFillStarFill } from 'react-icons/bs';
import ButtonRedOther from '../StyledComponents/ButtonRedOther';
import style from './Review.module.css';
import { postReview } from '../../Redux/actionsReview';

const UserReview = (props) => {
	const productInfo = useSelector((state) => state.product.detailProducts);
	const userId = useSelector((state) => state.user.userData.userId);
	console.log(userId);
	const [descrip, setDescrip] = useState({
		description: '',
	});

	const [star, setStar] = useState('0');
	const { description } = descrip;

	const handleChange = (e) => {
		setDescrip({
			...descrip,
			[e.target.name]: e.target.value,
		});
	};
	console.log(descrip);

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductById(props.match.params.id));
	}, []);

	const ratingChanged = (newRating) => {
		setStar({
			newRating,
		});
	};
	// userId, productId, description, stars
	let obj = {
		productId: props.match.params.id,
		stars: star.newRating,
		description: descrip.description,
		userId: userId,
	};

	return (
		<div className='d-flex justify-content-center bg-dark '>
			<div className=' bg-light p-3 rounded my-5 border'>
				<div className='text-center border-bottom mb-3'>
					<h6 className={style.title}>Your feedback</h6>
				</div>
				<div className='d-flex justify-content-center '>
					{productInfo !== undefined ? (
						<div className=' d-flex justify-content-center'>
							<div className='w-50 text-center'>
								<h5 className={style.comments}>{productInfo.name}</h5>
								<img
									className={style.img}
									src={productInfo.image}
									alt='Product Image'
								/>
							</div>
							<div className='d-flex justify-content-center p-4'>
								<div className='d-block '>
									<div className='d-flex justify-content-center mb-3'>
										<ReactStars
											size={30}
											count={5}
											color='#CFCECE'
											activeColor='#ffd700'
											emptyIcon={BsFillStarFill}
											halfIcon={BsFillStarFill}
											filledIcon={BsFillStarFill}
											onChange={ratingChanged}
										/>
									</div>
									<div className='d-block my-4'>
										<div className='text-center'>
											<h3 className={style.comments}>Comments:</h3>
										</div>
										<form onSubmit={handleSubmit} className='mt-3'>
											<textarea
												rows='6'
												type='text'
												cols='40'
												name='description'
												onChange={handleChange}
												value={description}
											></textarea>
											<div className='d-flex justify-content-center m-3 '>
												<ButtonRedOther
													type='submit'
													onClick={() => dispatch(postReview(obj))}
												>
													Submit
												</ButtonRedOther>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default UserReview;
