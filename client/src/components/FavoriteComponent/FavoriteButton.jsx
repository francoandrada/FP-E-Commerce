import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFavorites } from '../../Redux/actions';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import styles from './FavouriteButton.module.css';

function FavoriteButton({ prod }) {
	const fav = useSelector(state => state.useraccount.userFavorites);
	const isFav = fav.some(elem => elem.id === prod.id);
	const dispatch = useDispatch();

	function handleIsFav() {
		if (isFav === true) {
			dispatch(removeFavorites(prod));
		} else {
			dispatch(addToFavorites(prod));
		}
	}

	return (
		<div className={styles.buttonContainer}>
			{isFav ? (
				<button onClick={handleIsFav} id={styles.btn}>
					<FaHeart class={styles.btnHeart} />
				</button>
			) : (
				<button onClick={handleIsFav} id={styles.btn}>
					<FaRegHeart class={styles.btnHeart} />
				</button>
			)}
		</div>
	);
}

export default FavoriteButton;
