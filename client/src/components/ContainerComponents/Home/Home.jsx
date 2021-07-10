import styles from './Home.module.css'
import BannerContainer from '../../BannerContainer/BannerContainer';
import HighlightedProdContainer from '../HighlightedProdContainer/HighlightedProdContainer'
import Footer from '../Footer/Footer'

import CardContainerStyle from '../../StyledComponents/CardContainerStyle';
import SubtitleStyle from '../../StyledComponents/SubtitleStyle';
import ButtonGrey from '../../StyledComponents/ButtonGrey';
import AuthenticatedUser from '../../AuthUser.js/AuthenticatedUser';

function Home() {

    return(
    
        <div className={styles.HomeContainer}>
              <AuthenticatedUser />
            <div> 
                <BannerContainer></BannerContainer>
                <HighlightedProdContainer></HighlightedProdContainer>
            </div>
            
            <div className={styles.prueba}>
                <SubtitleStyle>Esto es un subtitulo</SubtitleStyle>
                <SubtitleStyle>$6000.-</SubtitleStyle>
                <CardContainerStyle></CardContainerStyle>
                <CardContainerStyle></CardContainerStyle>
                <CardContainerStyle></CardContainerStyle>

            </div>
              <ButtonGrey>Este es boton gris</ButtonGrey>

          
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home;