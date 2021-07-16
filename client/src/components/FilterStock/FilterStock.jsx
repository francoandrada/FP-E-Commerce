import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterStock } from '../../Redux/actions';
import styles from '../FilterCategories/FilterCategories.module.css';

function FilterStock() {
	const dispatch = useDispatch();

	const [stock, setStock] = useState('');

	useEffect(() => unCheck(stock), [stock]);

	useEffect(() => dispatch(filterStock(stock)), [stock]);

	const unCheck = (stock) => {
		let boxes = document.getElementsByClassName('orderS');
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].id === stock
				? (boxes[i].checked = true)
				: (boxes[i].checked = false);
		}
	};

	const onClickedBox = (event) => {
		event.target.checked ? setStock(event.target.id) : setStock('');
	};

	// console.log(categories.products)
	return (
		<div className={styles.divCelena}>
    			<div className='form-check'>
				<input
					className={`${'form-check-input'} ${'orderS'}`}
					type='checkbox'
					id='true'
					// checked='true'
					key='yes'
					onClick={(event) => onClickedBox(event)}
					// onClick={() => console.log(prueba.checked)}
				/>
				<label className='form-check-label' for='defaultCheck1'>
					Yes
				</label>
			</div>
            <div className='form-check'>
				<input
					className={`${'form-check-input'} ${'orderS'}`}
					type='checkbox'
					id='false'
					// checked='true'
					key='no'
					onClick={(event) => onClickedBox(event)}
					// onClick={() => console.log(prueba.checked)}
				/>
				<label className='form-check-label' for='defaultCheck1'>
					No
				</label>
			</div>
		</div>
	);
}

export default FilterStock;
