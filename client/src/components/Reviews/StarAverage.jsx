import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { getAverage } from '../../Redux/actionsReview';

const Review = () => {
	const dispatch = useDispatch();
	const productId = useSelector((state) => state.product.detailProducts.id);

	useEffect(() => {
		dispatch(getAverage(productId));
	}, [productId]);

	const starAverage = useSelector((state) => state.reviews.stars);
	console.log((starAverage[0].rating))
	var subTotalFormatted=parseFloat(starAverage[0].rating).toFixed(2);
	console.log(subTotalFormatted)
	return (
		<div>
			{starAverage.length > 0 && starAverage[0].rating  !== null? (
				<div>
					<ReactStars size={35}
                     value={starAverage[0].rating} 
                     isHalf={true} 
                     edit={false} 
                     color='#000000' />
				
		<p>{parseFloat(starAverage[0].rating).toFixed(2)}</p>
				</div>
			) : null
            }
      
		</div>
	);
};

export default Review;
