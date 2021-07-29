import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { orderProducts } from '../../Redux/actions';
import styles from './OrderByRating.module.css';

function OrderByRating() {
	
    const dispatch = useDispatch();
	
    //cada vez que user clickea en categoría, el orden se resetea
	let category = useSelector(state => state.category.selectedCategory);
	useEffect(() => unCheck(''), [category]);

	//cada vez que user clickea en brand, el orden se resetea
	let brand = useSelector(state => state.brands.selectedBrand);
	useEffect(() => unCheck(''), [brand]);

	const [ratingChecked, setRatingChecked] = useState({
		order_type: '',
		order_dir: ''
	});

	useEffect(() => unCheck(ratingChecked.order_dir), [ratingChecked]);

	useEffect(() => dispatch(orderProducts(ratingChecked)), [ratingChecked]);

	const unCheck = category => {
		let boxes = document.getElementsByClassName('orderR');
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].id === category
				? (boxes[i].checked = true)
				: (boxes[i].checked = false);
		}
	};

	const onClickedBox = event => {
        console.log(event)
		event.target.checked
			? setRatingChecked({
					order_type: event.target.name,
					order_dir: event.target.id
			  })
			: setRatingChecked({
					order_type: '',
					order_dir: ''
			  });
	};

	// console.log(categories.products)
	return (
		<div className={styles.divrating}>
			<h6 className={styles.titlerating}>Order by rating</h6>
			<hr></hr>
			<div className='form-check'>
				<input
					className={`${'form-check-input'} ${'orderR'}`}
					type='checkbox'
					name='rating'
					id='descending'
					// checked='true'
					onClick={event => onClickedBox(event)}
					// onClick={() => console.log(prueba.checked)}
				/>
				<label className='form-check-label' htmlFor='defaultCheck1'>
					Descending
				</label>
			</div>
			<div className='form-check'>
				<input
					className={`${'form-check-input'} ${'orderR'}`}
					type='checkbox'
					name='rating'
					id='ascending'
					// checked='true'
					onClick={event => onClickedBox(event)}
					// onClick={() => console.log(prueba.checked)}
				/>
				<label className='form-check-label' htmlFor='defaultCheck1'>
					Ascending
				</label>
			</div>
		</div>
	);
}

export default OrderByRating;
