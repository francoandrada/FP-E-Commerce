import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProducts } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';
import ButtonRed from '../StyledComponents/ButtonRed';

function Products() {
	let allProducts = useSelector((state) => state.product.allProducts);
	const filterCategory = useSelector(
		(state) => state.category.selectedCategory
	);
	const [ currentPage, setPage ] = useState({
        first: 0,
        last: 8
        })

	const dispatch = useDispatch();

	if(filterCategory){
		allProducts = allProducts.filter(product=>product.categories[0].name===filterCategory)
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



    function handleNextPage (event) {
        event.preventDefault()
        setPage({...currentPage, 
            first: currentPage.first + 8,
            last: currentPage.last + 8
        })        
    } 

    function handlePrevPage (event) {
        event.preventDefault()
        if (currentPage.first === 0){
            setPage({...currentPage, 
                first: 0,
                last: 8
            })

        } else {
            setPage({...currentPage, 
                first: currentPage.first - 8,
                last: currentPage.last - 8
            })
        }
      
    } 

	return (
		<div className={styles.cardsContainer}>
			<button onClick={handlePrevPage}>PREV</button>
			<button onClick={handleNextPage}>NEXT</button>

			{allProducts
				? allProducts.slice(currentPage.first, currentPage.last)
				.map((p) => {
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
							</div>
						);
				  })
				: null}
		</div>
	);
}

export default Products;
