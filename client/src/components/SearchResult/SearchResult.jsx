import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './SearchResult.module.css';

const SearchResult = () => {
	const { suggestions } = useSelector((state) => state.user);

	return (
		<div className={styles.cardsContainer}>
			{/* cambiar por spinner */}
			{suggestions === undefined && (
				<h1
					style={{ color: 'white', display: 'flex', justifyContent: 'center' }}
				>
					Loading...
				</h1>
			)}
			{suggestions && !suggestions.length && (
				<h1
					style={{ color: 'white', display: 'flex', justifyContent: 'center' }}
				>
					Product not Found
				</h1>
			)}

			{suggestions &&
				suggestions.map((p) => (
					<Link key={p.id} to={`/catalog/${p.id}`}>
						<div className={styles.card}>
							<div className={styles.cardImage}>
								<img className={styles.img} src={p.image} alt='product' />
							</div>
							<div className={styles.data}>
								<span>{p.name}</span>
								<span>${p.price}</span>
							</div>
						</div>
					</Link>
				))}
		</div>
	);
};

export default SearchResult;
/*


			{suggestions &&
				suggestions.map((p, key) => {
					return (
						<div key={key} className={styles.card}>
							<div className={styles.cardImage}>
								<img className={styles.img} src={p.image} alt='product' />
							</div>
							<div className={styles.data}>
								<Link key={p.id} to={`/catalog/${p.id}`}>
									<span>{p.name}</span>
								</Link>
								<span>${p.price}</span>
							</div>
						</div>
					);
				})}
		</div>

*/
