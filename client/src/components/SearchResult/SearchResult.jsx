import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { cleanSuggestions } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import styles from './SearchResult.module.css';

const SearchResult = () => {
	let { suggestions } = useSelector((state) => state.user);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	return () => dispatch(cleanSuggestions());
	// }, [dispatch]);

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

	const isEqual = (a, b) => a.name === b.name;
	return (
		<div className={styles.cardsContainer}>
			{/* cambiar por spinner */}
			{suggestions === undefined && <Loader />}
			{suggestions && !suggestions.length && (
				<h1
					style={{ color: 'white', display: 'flex', justifyContent: 'center' }}
				>
					Product not Found
				</h1>
			)}

			{suggestions &&
				suggestions
					.filter(
						(value) =>
							value === suggestions.find((item) => isEqual(item, value))
					)
					.map((p) => {
						if (p.name.length > 55) {
							var aux = p.name.slice(0, 55).concat('...');
							p.name = aux;
						}
						var formatPrice = formatNumber.new(p.price, '$');
						return (
							<div key={p.id} className={styles.card}>
								<Link to={`/catalog/${p.id}`}>
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
					})}
		</div>
	);
};

export default SearchResult;
