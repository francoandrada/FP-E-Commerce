import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';
import ReactStars from 'react-rating-stars-component';
import style from './Review.module.css';



const AllReviews = () => {
	const review = useSelector((state) => state.reviews.review);

	return (
		<div className={style.container}>
			<h4 className={style.title}>Customer Reviews</h4>
			{review === undefined ? (
				<p>There are not reviews yet</p>
			) : (
				review &&
				review.map((arg) => {
					return (
						<div className={style.container} >
							<div className='d-flex'>
								<div>
									<AiOutlineUser size={40} />
								</div>

								<p className={style.user}>{arg.user.name}</p>
							</div>

							<div className='border-bottom border-light'>
								<ReactStars
									size={15}
									value={arg.stars}
									isHalf={true}
									edit={false}
									emptyIcon={BsFillStarFill}
									halfIcon={BsFillStarFill}
									filledIcon={BsFillStarFill}
									color='#CFCECE'
								/>
								<p>{arg.description}</p>
							</div>
						</div>
					);
				})
			)}
	
		</div>
	);
};

export default AllReviews;
