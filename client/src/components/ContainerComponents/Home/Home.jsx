import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getHighlightProd } from '../../../Redux/actions';
import styles from './Home.module.css';
import BannerContainer from '../../BannerContainer/BannerContainer';
import HighlightedProdContainer from '../HighlightedProdContainer/HighlightedProdContainer';
import Footer from '../Footer/Footer';
import AuthenticatedUser from '../../AuthUser.js/AuthenticatedUser';

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHighlightProd());
	}, []);

	return (
		<div className={styles.HomeContainer}>
			<AuthenticatedUser />
			<div>
				<BannerContainer></BannerContainer>
				<HighlightedProdContainer></HighlightedProdContainer>
			</div>

			<div>{/* <Footer></Footer> */}</div>
		</div>
	);

}

export default Home;
