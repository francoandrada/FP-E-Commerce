import React, { useEffect, Fragment } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { getAverage } from '../../Redux/actionsReview';
import { BsFillStarFill } from 'react-icons/bs';
import style from './Review.module.css';

const Review = () => {
	const dispatch = useDispatch();
	const productId = useSelector((state) => state.product.detailProducts.id);

	useEffect(() => {
		dispatch(getAverage(productId));
	}, [productId]);

	const starAverage = useSelector((state) => state.reviews.stars);

	return (
		<Fragment>
		
			{starAverage && starAverage.length > 0 && starAverage[0].rating !== null ? (
				<div className={style.star}>
			
					<ReactStars
						size={25}
						value={starAverage[0].rating}
						isHalf={true}
						edit={false}
						emptyIcon={BsFillStarFill}
						halfIcon={BsFillStarFill}
						filledIcon={BsFillStarFill}
						color='#CFCECE'
					/>
				
					<h6 className={style.review}>Reviews</h6>
				
				</div>
			) : null}
		</Fragment>
	);
};

export default Review;
