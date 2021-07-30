import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterCategory } from '../../Redux/actions';
import styles from './FilterCategories.module.css';
import OrderByPrice from '../OrderBox/OrderByPrice';
import FilterStock from '../FilterStock/FilterStock';
import FilterBrands from '../FilterBrand/FilterBrands';

function FilterCategories() {
	const categoriesName = useSelector((state) => state.category.allCategories);

	const dispatch = useDispatch();

	const [categoryChecked, setCategoryChecked] = useState('');

	// let prueba = undefined;
	// if (document.getElementById('monitores')) {
	// 	prueba = document.getElementById('monitores');
	// }

	useEffect(() => unCheck(categoryChecked), [categoryChecked]);

	useEffect(
		() => dispatch(filterCategory(categoryChecked)),
		[dispatch, categoryChecked]
	);

	const unCheck = (category) => {
		let boxes = document.getElementsByClassName('orderC');
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].id === category
				? (boxes[i].checked = true)
				: (boxes[i].checked = false);
		}
	};

	const onClickedBox = (event) => {
		event.target.checked
			? setCategoryChecked(event.target.id)
			: setCategoryChecked('');
	};

	// console.log(categories.products)
	return (
		<div className={styles.divCelena}>
			<h6 className={styles.title}>Filter by categories</h6>
			<hr></hr>
			{categoriesName ? (
				categoriesName.map((item, index) => (
					<div key={index} className={styles.categoriesContainer}>
						<input
							className={`${'form-check-input'} ${'orderC'}`}
							type='checkbox'
							id={item.name}
							// checked='true'
							// key={index}
							onClick={(event) => onClickedBox(event)}
							// onClick={() => console.log(prueba.checked)}
						/>
						<label className='form-check-label' htmlFor='defaultCheck1'>
							{item.name}
						</label>
					</div>
				))
			) : (
				<ul></ul>
			)}
			<hr></hr>
			<OrderByPrice id={styles.filterContainer} />
			<hr></hr>
			<h6 className={styles.title}>Filter by stock</h6>
			<FilterStock id={styles.filterContainer} />
			<hr></hr>
			<FilterBrands className={styles.div_cont_filter} />
		</div>
	);
}

export default FilterCategories;
