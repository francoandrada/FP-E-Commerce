import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
	getProducts,
	getFilteredProducts,
	selectPage,
	cleanFilters,
	addToCart,
	removeFromCart,
} from '../../Redux/actions';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';
import PagingBox from '../PagingBox/PagingBox';

import ButtonRed from '../StyledComponents/ButtonRed';

function Products() {
	let allProducts = useSelector((state) => state.product.allProducts);

	let filteredProducts = useSelector(
		(state) => state.product.filterByCategories
	);

	console.log(allProducts[0])

	let productsToRender = allProducts;

	if (filteredProducts) {
		productsToRender = filteredProducts;
	}

	let categoryS = useSelector((state) => state.category.selectedCategory);
	let brandS = useSelector((state) => state.brands.selectBrand);
	let priceS = useSelector((state) => state.price.order);
	let actualPage = useSelector((state) => state.product.page);
	let productsPerPage = 9;

	let [query, setQuery] = useState({
		category: categoryS,
		brand: brandS,
		price: priceS,
		page: actualPage,
		qty: productsPerPage,
	});

	useEffect(() => {
		setQuery({
			category: categoryS,
			brand: brandS,
			price: priceS,
			page: actualPage,
			qty: productsPerPage,
		});
		return () => {
			console.log('unmount');
			dispatch(cleanFilters());
		};
	}, []);

	// useEffect(() =>
	// {dispatch(getFilteredProducts(query));
	// 	return () => {
	// 		console.log('unmount')
	// 	  }
	// }, []);

	useEffect(() => {
		setQuery({
			...query,
			category: categoryS,
		});
	}, [categoryS]);

	useEffect(() => {
		setQuery({
			...query,
			brand: brandS,
		});
	}, [brandS]);

	useEffect(() => {
		setQuery({
			...query,
			price: priceS,
		});
	}, [priceS]);

	useEffect(() => {
		setQuery({
			...query,
			page: actualPage,
		});
	}, [actualPage]);

	useEffect(() => {
		dispatch(getFilteredProducts(query));
	}, [query]);

	const dispatch = useDispatch();

	var formatNumber = {
		separator: '.',
		decimalSeparator: ',',
		formatear: function (num) {
			num += '';
			var splitStr = num.split('.');
			var splitLeft = splitStr[0];
			var splitRight =
				splitStr.length > 1 ? this.decimalSeparator + splitStr[1] : '';
			var regx = /(\d+)(\d{3})/;
			while (regx.test(splitLeft)) {
				splitLeft = splitLeft.replace(regx, '$1' + this.separator + '$2');
			}
			return this.simbol + splitLeft + splitRight;
		},
		new: function (num, simbol) {
			this.simbol = simbol || '';
			return this.formatear(num);
		},
	};

	return (
		<div className={styles.cardsContainer}>
			{productsToRender
				? productsToRender.map((p) => {
						if (p.name.length > 55) {
							var aux = p.name.slice(0, 55).concat('...');
							p.name = aux;
						}
						var formatPrice = formatNumber.new(p.price, '$');
						return (
							<div className={styles.card}>
								<Link key={p.id} to={`/catalog/${p.id}`}>
									<div className={styles.cardImage}>
										<img className={styles.img} src={p.image} alt='product' />
									</div>
								</Link>
								<div>
									<hr id={styles.line} />
								</div>
								<div className={styles.data}>
									<span className={styles.productName}>{p.name}</span>
								</div>
								<div class='d-block '>
									<div class='d-flex justify-content-center m-3'>{formatPrice}</div>

									<div class='d-flex justify-content-center mb-2'>
										<ButtonRed
											type='submit'
											onClick={() => dispatch(addToCart(p))}
										>
											Add to Cart
										</ButtonRed>
										
									</div>
								</div>

								<div id={styles.paginado}></div>
							</div>
						);
				  })
				: null}
			<PagingBox productsPerPage={productsPerPage} />
		</div>
	);
}


export default Products;

// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
// import {
// 	getProducts,
// 	getFilteredProducts,
// 	selectPage,
// 	cleanFilters,
// 	addToCart,
// 	removeFromCart,
// } from '../../Redux/actions';
// import { Link } from 'react-router-dom';
// import styles from './Products.module.css';
// import PagingBox from '../PagingBox/PagingBox';
// import ButtonRed from '../StyledComponents/ButtonRed';
// function Products() {
// 	let allProducts = useSelector((state) => state.product.allProducts);

// 	let filteredProducts = useSelector(
// 		(state) => state.product.filterByCategories
// 	);

// 	let productsToRender = allProducts;

// 	if (filteredProducts) {
// 		productsToRender = filteredProducts;
// 	}

// 	let categoryS = useSelector((state) => state.category.selectedCategory);
// 	let brandS = useSelector((state) => state.brands.selectBrand);
// 	let priceS = useSelector((state) => state.price.order);
// 	let actualPage = useSelector((state) => state.product.page);
// 	let productsPerPage = 9;

// 	let [query, setQuery] = useState({
// 		category: categoryS,
// 		brand: brandS,
// 		price: priceS,
// 		page: actualPage,
// 		qty: productsPerPage,
// 	});

// 	useEffect(() => {
// 		setQuery({
// 			category: categoryS,
// 			brand: brandS,
// 			price: priceS,
// 			page: actualPage,
// 			qty: productsPerPage,
// 		});
// 		return () => {
// 			console.log('unmount');
// 			dispatch(cleanFilters());
// 		};
// 	}, []);

// 	// useEffect(() =>
// 	// {dispatch(getFilteredProducts(query));
// 	// 	return () => {
// 	// 		console.log('unmount')
// 	// 	  }
// 	// }, []);

// 	//FIJARSE SI SE PUEDE REEMPLAZAR ESTO:
// 	// useEffect(() => {
// 	// 	setQuery({
// 	// 		...query,
// 	// 		brand: brandS,
// 	// 	});
// 	// }, [brandS]);

// 	// useEffect(() => {
// 	// 	setQuery({
// 	// 		...query,
// 	// 		price: priceS,
// 	// 	});
// 	// }, [priceS]);

// 	// useEffect(() => {
// 	// 	setQuery({
// 	// 		...query,
// 	// 		page: actualPage,
// 	// 	});
// 	// }, [actualPage]);

// 	//POR ESTO:
// 	useEffect(() => {
// 		setQuery({
// 			...query,
// 			category: categoryS,
// 			price: priceS,
// 			brand: brandS,
// 			page: actualPage,
// 		});
// 	}, [categoryS, brandS, priceS, actualPage]);

// 	useEffect(() => {
// 		dispatch(getFilteredProducts(query));
// 	}, [query]);

// 	const dispatch = useDispatch();

// 	var formatNumber = {
// 		separator: '.',
// 		decimalSeparator: ',',
// 		formatear: function (num) {
// 			num += '';
// 			var splitStr = num.split('.');
// 			var splitLeft = splitStr[0];
// 			var splitRight =
// 				splitStr.length > 1 ? this.decimalSeparator + splitStr[1] : '';
// 			var regx = /(\d+)(\d{3})/;
// 			while (regx.test(splitLeft)) {
// 				splitLeft = splitLeft.replace(regx, '$1' + this.separator + '$2');
// 			}
// 			return this.simbol + splitLeft + splitRight;
// 		},
// 		new: function (num, simbol) {
// 			this.simbol = simbol || '';
// 			return this.formatear(num);
// 		},
// 	};

// 	return (
// 		<div className={styles.cardsContainer}>
// 			{productsToRender
// 				? productsToRender.map((p) => {
// 						if (p.name.length > 55) {
// 							var aux = p.name.slice(0, 55).concat('...');
// 							p.name = aux;
// 						}
// 						var formatPrice = formatNumber.new(p.price, '$');
// 						return (
// 							<div className={styles.card}>
// 								<Link key={p.id} to={`/catalog/${p.id}`}>
// 									<div className={styles.cardImage}>
// 										<img className={styles.img} src={p.image} alt='product' />
// 									</div>
// 								</Link>

// 									<hr id={styles.line} />

// 								<div className={styles.data}>
// 									<span className={styles.productName}>{p.name}</span>
// 								</div>
// 								<div class='d-flex justify-content-center'>
// 									{/* <div className={styles.productPrice}> */}
// 										{/* <span class='d-flex justify-content-center'> */}
// 											{formatPrice}
// 										{/* </span> */}
// 									{/* </div> */}
// 								</div>
// 								<div class='d-flex justify-content-center m-2'>
// 									<ButtonRed
// 										type='submit'

// 										onClick={() => dispatch(addToCart(p))}
// 									>
// 										Add to Cart
// 									</ButtonRed>
// 								</div>

// 								<div id={styles.paginado}></div>
// 							</div>
// 						);
// 				  })
// 				: null}
// 			<PagingBox productsPerPage={productsPerPage} />
// 		</div>
// 	);
// }

// export default Products;
