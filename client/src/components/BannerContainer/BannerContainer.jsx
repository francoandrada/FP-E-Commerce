import './BannerContainer.css'
import ButtonRed from '../StyledComponents/ButtonRed'
import TitleStyle from '../StyledComponents/TitleStyle'

function BannerContainer() {

    return(
        <div className='BannerContainer'>
            <div className='Bannerinfo'> 
                <TitleStyle>50%<br></br>on all our best<br></br>products.</TitleStyle>
                <ButtonRed>See Offers!</ButtonRed>
            </div>
        </div>
    )
}

export default BannerContainer;