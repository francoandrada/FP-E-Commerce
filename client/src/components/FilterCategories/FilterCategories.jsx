import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, filterCategory } from '../../Redux/actions';
import styles from './Filter.module.css';
// import styles from './Filter.module.css'

function FilterCategories() {
	const categoriesName = useSelector((state) => state.category.allCategories);
	const categoriesProducts = useSelector(
		(state) => state.category.selectedCategory
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, []);

	// console.log(categories.products)
	return (
		<div className={styles.divCelena}>
			<h1 className={styles.title}>Hola</h1>
			{categoriesName ? (
				categoriesName.map((item, index) => (
					<ul>
						<button
							key={index}
							// value={item.name}
							onClick={() => dispatch(filterCategory(item.name))}
						></button>
						<p>{item.name}</p>
					</ul>
				))
			) : (
				<ul></ul>
			)}
		</div>
	);
}

export default FilterCategories;
