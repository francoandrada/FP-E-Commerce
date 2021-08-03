
import styled from 'styled-components';

export const SubtitleStyle = styled.h1`
font-family: 'Roboto', sans-serif; 
font-size: 18px;
line-height: 1.125em;
@media only screen and (max-width: 430px) {
    font-size: 10px
}
@media only screen and (min-width: 430px) and (max-width: 650px){
    font-size: 18px;
}
`;

export default SubtitleStyle;