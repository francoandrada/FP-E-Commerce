import './BannerContainer.css'
import ButtonRedOther from '../StyledComponents/ButtonRed'
import TitleStyle from '../StyledComponents/TitleStyle'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Bot from '../ChatBot/ChatBot'


const ButtonRedHome = styled(ButtonRedOther)`
    width: 300px;
    font-weight: bold;
    @media only screen and (min-width: 430px) and (max-width: 650px){
        width:180px;
        font-size: 14px
    }
`;

function BannerContainer() {

    return(
        <div className='BannerContainer'>
            <div className='Bannerinfo'> 
                <TitleStyle>First e-commerce<br></br>to implement <br></br> payments with cryptos.</TitleStyle>
                <Link to={`/cryptopayments`}>
                    <ButtonRedHome>Pay with CRYPTO!</ButtonRedHome>
                </Link>
            </div>
            <Bot/>
        </div>
    )
}

export default BannerContainer;