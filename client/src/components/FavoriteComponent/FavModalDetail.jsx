import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeFavorites } from '../../Redux/actions';


const ProductCart = styled.section`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 1fr 1fr;    
    grid-template-areas:
        "img info"
        "img price";
    align-items: center;
    width: 100%;
    margin: 15px 0px 15px 0px;
    padding: 3px 8px 3px 8px;


`;

const ProductName = styled.section`
grid-area: info;
display: flex;
flex-direction: column;
margin-left: 0.5em;
font-size: 18px;
    font-weight: 700;

    @media only screen and (max-width: 430px){
	font-size: 16px
    }
`;

const Icon = styled.section`
    padding-left: 5px;
    cursor: pointer;
`;
const FavProducts = styled.section`
grid-area: price;
display: flex;
justify-content: space-between;
align-items: center;

div { 
    white-space: nowrap;
margin-right: 2em;
display: flex;

padding-top: 0.5em;

}
`;
const Price = styled.section`
    font-weight: 700;
    font-size: 20px;
    color: #ff3c4a;
    margin-top: 18px;
    @media only screen and (max-width: 430px){
        font-size:18px
    }
`;
const Image = styled.section`
    grid-area: img;
    width: 64px;
    height: 64px;

    img {
        width: 64px;
    }
`;

const ButtonRemove = styled.section`
    width: 200px;
    border: 1px solid;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #ff3c4a;
    color: white;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        background-color: #d4202d;
        transition: 200ms;
    }

    @media only screen and (max-width: 430px){
	width: 10rem;
    font-size: 14px
    }
`;

function FavModalDetail({ info, image, name, price, stock }) {
	const [productInfo, setProductInfo] = useState(info);
	const dispatch = useDispatch();


	return (
		<ProductCart>
			<Image>
				<img src={image} alt='' />
			</Image>
			<ProductName>{name}</ProductName>
			<div>
				<FavProducts>
					<Price>
						<span>{price}</span>
					</Price>
				
                <ButtonRemove onClick={() => dispatch(removeFavorites(info))}>Remove from Favorites</ButtonRemove>
                </FavProducts>
            </div>
            
		</ProductCart>
	);
}

export default FavModalDetail;