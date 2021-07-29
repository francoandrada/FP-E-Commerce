import Products from '../Products/Products';
import FilterCategories from '../FilterCategories/FilterCategories';
// import OrderByPrice from '../OrderBox/OrderByPrice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, getBrands, getProducts, getRates } from '../../Redux/actions';
import styles from './Catalog.module.css';
import Loader from '../Loader/Loader';
// import FilterBrands from '../FilterBrand/FilterBrands';

function Catalog() {
	const dispatch = useDispatch();
	const allProducts = useSelector(state => state.product.allProducts)
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
			{allProducts.length > 0 ? (
			<Products id={styles.productsContainer} />
			) : <div className={styles.loader}>
				<Loader />
			</div> 
		}
		</div>
	);
}

export default Catalog;
