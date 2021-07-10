import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './Filter.module.css';

function FilterCategories() {
	const categories = useSelector((state) => state.category.allCategories);

	return (
		<div className={styles.divCelena}>
			<h1 className={styles.title}>Hola</h1>
			{categories.map((item, index) => (
				<div className={styles.div_celena} key={index}>
					<p>{item.name}</p>
				</div>
			))}
		</div>
	);
}

export default FilterCategories;
