 
import styled from 'styled-components';

export const TitleStyle = styled.h1`
font-family: 'Roboto', sans-serif; 
font-size: 35px;
line-height: 1.875rem;


@media only screen and (max-width: 1120px) {
    font-size: 26px;
}
@media only screen and (max-width: 430px) {
    font-size: 14px;
    line-height: 1em;
}
`;

export default TitleStyle;