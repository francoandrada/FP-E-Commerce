import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { orderProducts } from '../../Redux/actions';
import styles from './OrderByPrice.module.css';

function OrderByPrice() {

	const dispatch = useDispatch();

	//cada vez que user clickea en categoría, el orden se resetea
	let category = useSelector(state => state.category.selectedCategory);
	useEffect(() => unCheck(''), [category]);

	//cada vez que user clickea en brand, el orden se resetea
	let brand = useSelector(state => state.brands.selectedBrand);
	useEffect(() => unCheck(''), [brand]);


	const [priceChecked, setPriceChecked] = useState({
		order_type: '',
		order_dir: ''
	});

	useEffect(() => unCheck(priceChecked.order_dir), [priceChecked]);

	useEffect(() => dispatch(orderProducts(priceChecked)), [priceChecked]);

	const unCheck = category => {
		let boxes = document.getElementsByClassName('orderE');
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].id === category
				? (boxes[i].checked = true)
				: (boxes[i].checked = false);
		}
	};

	const onClickedBox = event => {
		console.log(event)
		event.target.checked
			? setPriceChecked({
					order_type: event.target.name,
					order_dir: event.target.id
			  })
			: setPriceChecked({
					order_type: '',
					order_dir: ''
			  });
	};

	// console.log(categories.products)
	return (
		<div className={styles.divPrice}>
			<h6 className={styles.titlePrice}>Order by Price</h6>
			<hr></hr>
			<div className='form-check'>
				<input
					className={`${'form-check-input'} ${'orderE'}`}
					type='checkbox'
					name='price'
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
					className={`${'form-check-input'} ${'orderE'}`}
					type='checkbox'
					name='price'
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

export default OrderByPrice;
