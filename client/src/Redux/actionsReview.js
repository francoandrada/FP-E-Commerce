import axios from 'axios';
import { DELETE, GET_AVERAGE, POST_REVIEW, SAVE_DATA } from './actionsName';

export function getAverage(productId) {
	return async (dispatch) => {
        console.log('ID PRODUCTO', productId)
		try {
			const res = await axios.post('http://localhost:3001/reviews/averaged', {productId});
            console.log(res.data)
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
        console.log('ID PRODUCTO', data)
		try {
			const res = await axios.post('http://localhost:3001/reviews', data);
		} catch (error) {
			console.log(error);
		}
	};
}




