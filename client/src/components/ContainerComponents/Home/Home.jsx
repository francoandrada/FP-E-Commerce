import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHighlightProd, logOut } from '../../../Redux/actions';
import styles from './Home.module.css';
import BannerContainer from '../../BannerContainer/BannerContainer';
import HighlightedProdContainer from '../HighlightedProdContainer/HighlightedProdContainer';


function Home() {
	const dispatch = useDispatch();



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
