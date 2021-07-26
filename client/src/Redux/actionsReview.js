import axios from 'axios';
import { ALL_REVIEWS, ALL_STARS, DELETE, GET_AVERAGE, POST_REVIEW, SAVE_DATA } from './actionsName';

export function getAverage(productId) {
	return async (dispatch) => {
        console.log('ID PRODUCTO', productId)
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
			console.log(res.data)
			dispatch({
				type: ALL_REVIEWS,
				payload: res.data
			})
		} catch (error) {
			console.log(error);
		}
	};
}





export function AllStars() {
	return async (dispatch) => {

		try {
			const res = await axios.get('http://localhost:3001/reviews');
			dispatch({
				type: ALL_STARS,
				payload: res.data
			})
		} catch (error) {
			console.log(error);
		}
	};
}
