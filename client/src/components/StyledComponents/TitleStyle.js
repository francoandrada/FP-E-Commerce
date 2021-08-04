 
import styled from 'styled-components';

export const TitleStyle = styled.h1`
font-family: 'Roboto', sans-serif; 
font-size: 25px;
line-height: 1.875rem;


@media only screen and (max-width: 1120px) {
    font-size: 26px;
}
@media only screen and (max-width: 430px) {
    font-size: 14px;
    line-height: 1em;
}
@media only screen and (min-width: 430px) and (max-width: 650px){
    font-size: 16px;
    line-height: 1.2em;
}
@media only screen and (min-width: 650px) and (max-width: 1024px){
	font-size:22px;
    line-height:1em
}
`;

export default TitleStyle;