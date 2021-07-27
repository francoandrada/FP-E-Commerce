import React, { useEffect, Fragment, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { getAverage, StarsAmmount } from '../../Redux/actionsReview';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

import style from './Review.module.css';
import styled from 'styled-components';

import { Bar} from 'react-chartjs-2';

const CartContainer = styled.div`
 position: absolute;
   top: 56%;
   left: 56%;
   background-color: #F5F5F5;
   border: 1px solid #D2D2D2;
   padding: 1rem;
   display: block;

 `;

const Title = styled.div`
   font-size: 1rem;
 margin-left: .5rem;
   text-align: start;
   margin-top: 0;
 `;

const Review = ({ productInfo }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAverage(productInfo.id));
	}, [productInfo]);

	const starAverage = useSelector((state) => state.reviews.stars);
	const rating = useSelector((state) => state.reviews.allStars);

	var num = [0, 0, 0, 0, 0];
	function insertAt(array, index, ...num) {
		array.splice(index, 1, ...num);
		return num.flat();
	}

	if (rating !== undefined) {
		for (let i = 0; i < rating.length; i++) {
			insertAt(num, rating[i].stars - 1, parseInt(rating[i].ammount));
		}
	}
	const res = num.reduce((p, c) => p + c);

	if (res !== 0) {
		for (let i = 0; i < num.length; i++) {
			num[i] = (num[i] * 100) / res;
		}
	}

	const [active, setActive] = useState(false);

	const toggle = () => {
		setActive(!active);
	};

	const data = {
		labels: ['star 5', 'star 4', 'star 3', 'star 2', 'star 1'],
		datasets: [
			{
				data: num.reverse(),
				fill: false,
				backgroundColor: ['rgb(255, 215, 0)'],
				borderColor: ['rgb(255, 215, 0)'],
				borderWidth: 1,
			},
		],
	};

	const options = {
		indexAxis: 'y',
		scales: {
			x: {
				suggestedMin: 50,
				suggestedMax: 100,
				display: false
			},
		},
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	const stars = useSelector((state) => state.reviews.allStars);

	useEffect(() => {
		dispatch(StarsAmmount(productInfo.id));
	}, [productInfo.id]);

	return (
		<Fragment>
			{starAverage &&
			starAverage.length > 0 &&
			starAverage[0].rating !== null ? (
				<div>
					<div
						onMouseEnter={() => setActive(!active)}
						onMouseLeave={() => setActive(false)}
					>
						<ReactStars
							size={25}
							value={starAverage[0].rating}
							a11y={true}
							isHalf={true}
							edit={false}
							emptyIcon={BsStarFill}
							halfIcon={BsStarHalf}
							filledIcon={BsStarFill}
							color='#CFCECE'
						/>
					</div>

					<h6 className={style.review}>Reviews</h6>
				</div>
			) : null}
			{active && (
				<CartContainer active={active} toggle={toggle}>
					<div className='d-block'>
						{starAverage &&
						starAverage.length > 0 &&
						starAverage[0].rating !== null ? (
							<div className='d-flex'>
								<ReactStars
									size={15}
									value={starAverage[0].rating}
									isHalf={true}
									edit={false}
									emptyIcon={BsStarFill}
									halfIcon={BsStarHalf}
									filledIcon={BsStarFill}
									color='#CFCECE'
								/>
								<Title>
									{parseFloat(starAverage[0].rating).toFixed(1)} out of 5
								</Title>
							</div>
						) : null}

						{stars === undefined ? null : <Bar data={data} options={options} />}
					</div>
				</CartContainer>
			 )}
		</Fragment>
	);
};

export default Review;
