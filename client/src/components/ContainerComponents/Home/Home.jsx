import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getHighlightProd } from '../../../Redux/actions'
import styles from './Home.module.css'
import BannerContainer from '../../BannerContainer/BannerContainer';
import HighlightedProdContainer from '../HighlightedProdContainer/HighlightedProdContainer'
import Footer from '../Footer/Footer'
import Highlights from '../../Highlights/Highlights';
import CardContainerStyle from '../../StyledComponents/CardContainerStyle';
import SubtitleStyle from '../../StyledComponents/SubtitleStyle';
import ButtonGrey from '../../StyledComponents/ButtonGrey';
import AuthenticatedUser from '../../AuthUser.js/AuthenticatedUser';

function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHighlightProd())    
    }, [] )

    return(
    
        <div className={styles.HomeContainer}>
              <AuthenticatedUser />
            <div> 
                <BannerContainer></BannerContainer>
                <HighlightedProdContainer></HighlightedProdContainer>
            </div>
            <Highlights></Highlights>
            
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home;