import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHighlightProd, logOut } from '../../../Redux/actions';
import styles from './Home.module.css';
import BannerContainer from '../../BannerContainer/BannerContainer';
import HighlightedProdContainer from '../HighlightedProdContainer/HighlightedProdContainer';
import Swal from 'sweetalert2';


function Home() {
	const dispatch = useDispatch();

	const setError = useSelector((state) => state.user.setError);

	console.log(setError)
	useEffect(() => {
		if (setError) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Your session has expired, please login again',
			  })
			dispatch(logOut());
		}
	}, [setError]);

	useEffect(() => {
		dispatch(getHighlightProd());
	}, []);

	return (
		<div className={styles.HomeContainer}>
		
			<div>
				<BannerContainer></BannerContainer>
				<HighlightedProdContainer></HighlightedProdContainer>
			</div>

		</div>
	);

}

export default Home;
