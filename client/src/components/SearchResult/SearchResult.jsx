import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanSuggestions } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import styles from './SearchResult.module.css';

const SearchResult = () => {
	const { suggestions } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => dispatch(cleanSuggestions());
	}, [dispatch]);

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
	);
};

export default SearchResult;
