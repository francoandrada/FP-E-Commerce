import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { getProductById } from '../../Redux/actions';
import {AiOutlineStar} from 'react-icons/fa/ai';
import { BsFillStarFill, IconName } from 'react-icons/bs';

const UserReview = (props) => {
	const productInfo = useSelector((state) => state.product.detailProducts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductById(props.match.params.id));
	}, []);

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
	return (
		<div className='bg-white w-100'>
			{productInfo !== undefined ? (
				<div>
					<div>
						<h4>{productInfo.name}</h4>
						<img src={productInfo.image} alt='Product Image' />
					</div>
					<div className='m-5'>
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={40}
							isHalf={true}
							emptyIcon={AiOutlineStar}
							halfIcon={<i className='fa fa-star-half-alt'></i>}
							fullIcon={<i className='fa fa-star'></i>}
							activeColor='#ffd700'
						/>
						,
					</div>
				</div>
			) : null}
		</div>
	);
};

export default UserReview;
