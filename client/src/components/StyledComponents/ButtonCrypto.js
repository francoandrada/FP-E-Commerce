import styled from 'styled-components';

export const ButtonCrypto = styled.button`
    font-family: 'Roboto', sans-serif; 
    width: 8.375em;
    height: 2.375em;
    border-style: none;
    border-radius: 8px;
    color: black;
    font-weight: 600;
    font-size: 18px;
    background-color: #ffbc3c;
    &:hover{
        background-color: #ffa83c;
    } 

    @media only screen and (max-width: 1120px){
        font-size: 14px
    }
    @media only screen and (max-width: 430px){
        font-size: 12px
    }
`;

export default ButtonCrypto;