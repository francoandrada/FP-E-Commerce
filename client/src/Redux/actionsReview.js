import axios from 'axios';
import { ALL_REVIEWS, ALL_STARS, GET_AVERAGE } from './actionsName';

export function getAverage(productId) {
	return async (dispatch) => {
		try {
			const res = await axios.post('http://localhost:3001/reviews/averaged', {productId});

			 dispatch({
			 	type: GET_AVERAGE,
			 	payload: res.data
			 })
		} catch (error) {
			console.log(error);
		}
	};
}


export function postReview(data) {
	return async (dispatch) => {
		try {
			const res = await axios.post('http://localhost:3001/reviews', data);
		} catch (error) {
			console.log(error);
		}
	};
}


export function allReviews(productId) {
	return async (dispatch) => {

		try {
			const res = await axios.post('http://localhost:3001/reviews/byproduct', {productId});
		
			dispatch({
				type: ALL_REVIEWS,
				payload: res.data
			})
		} catch (error) {
			console.log(error);
		}
	};
}





export function StarsAmmount(productId) {
	return async (dispatch) => {

		try {
			const res = await axios.post('http://localhost:3001/reviews/allStars', {productId});
			dispatch({
				type: ALL_STARS,
				payload: res.data
			})
		} catch (error) {
			console.log(error);
		}
	};
}
