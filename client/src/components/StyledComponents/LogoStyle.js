import styled from 'styled-components';

export const LogoStyle = styled.h2`
color: #FF3C4A;
font-size: 33px;
line-height: 1.875em;
text-align:left;

@media only screen and (max-width: 1120px) {
    font-size: 28px
}
@media only screen and (max-width: 430px) {
    display:none
}
@media only screen and (max-width: 650px){
    font-size:22px
}
@media only screen and (max-width: 570px){
    font-size:20px
}
`;

export default LogoStyle;
