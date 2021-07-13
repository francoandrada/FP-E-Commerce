import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProducts } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';
import ButtonRed from '../StyledComponents/ButtonRed';
import PagingBox from '../PagingBox/PagingBox';

function Products() {
	let allProducts = useSelector((state) => state.product.allProducts);
	const filterCategory = useSelector(
		(state) => state.category.selectedCategory
	);
	const filterBrand= useSelector((state)=> state.brands.selectedBrand)
	const orderPrice = useSelector((state) => state.price.order);

	const dispatch = useDispatch();

	if (filterCategory) {
		allProducts = allProducts.filter(
			(product) => product.categories[0].name === filterCategory
		);
	}

	if(orderPrice==='ascending'){
		allProducts.sort(function (a, b) {
			if (a.price > b.price) {
			  return 1;
			}
			if (a.price < b.price) {
			  return -1;
			}
			// a must be equal to b
			return 0;
		  });
	}

	if(orderPrice==='descending'){
		allProducts.sort(function (b, a) {
			if (b.price > a.price) {
			  return -1;
			}
			if (b.price < a.price) {
			  return 1;
			}
			// a must be equal to b
			return 0;
		  });
	}
	if(filterBrand.length > 0){
		allProducts= allProducts.filter(product=>product.brandId===parseInt(filterBrand))
	}



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

	  //Paginado
	  const productsPerPage = 9;
	  const pagesQty = Math.ceil(allProducts.length / productsPerPage);
	  const [actualPage, setActualPage] = useState(1);
	  const setPage = (value) => setActualPage(value);
	  const endIndex = productsPerPage * actualPage;
	  const initIndex = endIndex - productsPerPage;

	

	return (
		<div className={styles.cardsContainer}>
			{allProducts
				? 
				allProducts.slice(initIndex, endIndex).map((p) => {
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
									<div>
										<hr id={styles.line} />
									</div>
									<div className={styles.data}>
										<span className={styles.productName}>{p.name}</span>
									</div>
									<div className={styles.footerCard}>
										<div className={styles.productPrice}>
											<span>{formatPrice}</span>
										</div>
										<div className={styles.buttonBuy}>
											<button>Buy</button>
										</div>
									</div>
								</Link>
								<div id={styles.paginado}>
                </div>

							</div>
						);
					})
					: null}
					<PagingBox pagesQty={pagesQty} setPage={setPage} actualPage={actualPage}/>
		</div>
	);
}

export default Products;
