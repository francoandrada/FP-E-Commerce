import './BannerContainer.css'
import ButtonRedOther from '../StyledComponents/ButtonRed'
import TitleStyle from '../StyledComponents/TitleStyle'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ButtonRedHome = styled(ButtonRedOther)`
    width: 300px;
    font-weight: bold;
`;

function BannerContainer() {

    return(
        <div className='BannerContainer'>
            <div className='Bannerinfo'> 
                <TitleStyle>50%<br></br>on all our best<br></br>products.</TitleStyle>
                <Link to={`/cryptopayments`}>
                    <ButtonRedHome>Pay with CRYPTO!</ButtonRedHome>
                </Link>
            </div>
        </div>
    )
}

export default BannerContainer;