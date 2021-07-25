import Products from '../Products/Products';
import FilterCategories from '../FilterCategories/FilterCategories';
// import OrderByPrice from '../OrderBox/OrderByPrice'
import { useDispatch /*useSelector*/ } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, getBrands, getProducts, getRates } from '../../Redux/actions';
import styles from './Catalog.module.css';
// import FilterBrands from '../FilterBrand/FilterBrands';

function Catalog() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getBrands());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);


	useEffect(() => {
		dispatch(getRates());
	}, [dispatch]);


	return (
		<div id={styles.catalogue}>
			<FilterCategories id={styles.filterContainer} />
			<Products id={styles.productsContainer} />
		</div>
	);
}

export default Catalog;
