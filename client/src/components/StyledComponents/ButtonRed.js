import styled from 'styled-components';

export const ButtonRed = styled.button`
    font-family: 'Roboto', sans-serif; 
    width: 8.375em;
    height: 2.375em;
    border-style: none;
    border-radius: 8px;
    color: white;
    font-size: 18px;
    background-color: #FF3C4A;
    &:hover{
        background-color: #cc242f;
    } 

    @media only screen and (max-width: 1120px){
        font-size: 14px
    }
`;

export default ButtonRed;