import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StarsAmmount } from '../../Redux/actionsReview';
import { BsFillStarFill } from 'react-icons/bs';
import ReactStars from 'react-rating-stars-component';
import styled from 'styled-components';

const CartContainer = styled.div`
      display: flex;
    justify-content: flex-end;
    margin: 0% 10% 0% 0%;
    background-color: #f8f9fa;
    position: absolute;
    z-index: 1000;
    top: 157px;
    right: 5%;
    border-radius: 5px;
    width: 440px;
    color: #495057;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 72%);
`;


const AllStars = () => {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();

	const toggle = () => {
		setActive(!active);
	};
	const productId = useSelector((state) => state.product.detailProducts.id);

	const stars = useSelector((state) => state.reviews.allStars);
	const average = useSelector((state) => state.reviews.stars);
	console.log(average);
	useEffect(() => {
		dispatch(StarsAmmount(productId));
	}, [productId]);

	const starAverage = useSelector((state) => state.reviews.stars);

	return (
		<div>
			<button onMouseEnter={toggle} onMouseLeave={() => setActive(false)}>
				hola
			</button>

			{active && (
				<div active={active} toggle={toggle}>
					<div>
						<div>
							{starAverage &&
							starAverage.length > 0 &&
							starAverage[0].rating !== null ? (
								<div>
									<ReactStars
										size={15}
										value={starAverage[0].rating}
										isHalf={true}
										edit={false}
										emptyIcon={BsFillStarFill}
										halfIcon={BsFillStarFill}
										filledIcon={BsFillStarFill}
										color='#CFCECE'
									/>
									<p>{parseFloat(starAverage[0].rating).toFixed(1)} out of 5</p>
								</div>
							) : null}

							{stars === undefined
								? null
								: stars &&
								  stars.map((arg) => {
										return (
											<div>
											{/* /<ReactStars */}
											{/* // 		size={15}
											// 		value={arg.rating}
											// 		isHalf={true}
											// 		edit={false}
											// 		emptyIcon={BsFillStarFill}
											// 		halfIcon={BsFillStarFill}
											// 		filledIcon={BsFillStarFill}
											// 		color='#CFCECE'
											// 	/>
											// 	<h1>{arg.stars}</h1> */}
											 </div>
										);
								  })}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AllStars;
