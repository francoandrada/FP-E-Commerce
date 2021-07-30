import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterPrice } from '../../Redux/actions';
import styles from './OrderByPrice.module.css';

function OrderByPrice() {
	let category = useSelector((state) => state.category.selectedCategory);

	useEffect(() => unCheck(''), [category]);

	const dispatch = useDispatch();

	const [priceChecked, setPriceChecked] = useState('');

	useEffect(() => unCheck(priceChecked), [priceChecked]);

	useEffect(() => dispatch(filterPrice(priceChecked)), [priceChecked]);

	const unCheck = (category) => {
		let boxes = document.getElementsByClassName('orderE');
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].id === category
				? (boxes[i].checked = true)
				: (boxes[i].checked = false);
		}
	};

	const onClickedBox = (event) => {
		event.target.checked
			? setPriceChecked(event.target.id)
			: setPriceChecked('');
	};

	// console.log(categories.products)
	return (
		<div className={styles.divPrice}>
			<h6 className={styles.titlePrice}>Order by Price</h6>
			<div className='form-check'>
				<input
					className={`${'form-check-input'} ${'orderE'}`}
					type='checkbox'
					id='priceDes'
					// checked='true'
					onClick={(event) => onClickedBox(event)}
					// onClick={() => console.log(prueba.checked)}
				/>
				<label className='form-check-label' htmlFor='defaultCheck1'>
					Descending
				</label>
			</div>
			<div className='form-check'>
				<input
					className={`${'form-check-input'} ${'orderE'}`}
					type='checkbox'
					id='priceAsc'
					// checked='true'
					onClick={(event) => onClickedBox(event)}
					// onClick={() => console.log(prueba.checked)}
				/>
				<label className='form-check-label' htmlFor='defaultCheck1'>
					Ascending
				</label>
			</div>
			
			<hr></hr>
			<h6 className={styles.titlePrice}>Order by Rating</h6>
			<div className='form-check'>
				<input
					className={`${'form-check-input'} ${'orderE'}`}
					type='checkbox'
					id='ratingDes'
					// checked='true'
					onClick={(event) => onClickedBox(event)}
					// onClick={() => console.log(prueba.checked)}
				/>
				<label className='form-check-label' htmlFor='defaultCheck1'>
					Descending
				</label>
			</div>
			<div className='form-check'>
				<input
					className={`${'form-check-input'} ${'orderE'}`}
					type='checkbox'
					id='ratingAsc'
					// checked='true'
					onClick={(event) => onClickedBox(event)}
					// onClick={() => console.log(prueba.checked)}
				/>
				<label className='form-check-label' htmlFor='defaultCheck1'>
					Ascending
				</label>
			</div>
		</div>
	);
}

export default OrderByPrice;
