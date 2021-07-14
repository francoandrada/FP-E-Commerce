//import styles from './productDetail.module.css'
import styled from 'styled-components';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

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
`;

const Icon = styled.section`
    padding-left: 5px;
    cursor: pointer;
`;
const CantProducts = styled.section`
grid-area: price;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 0.5em;

div { 
    white-space: nowrap;
margin-right: 2em;
display: flex;
justify-content: center;
align-items: center;
padding-top: 0.5em;

button {
    margin-right: 0.5em;
}

span {
    margin-right: 0.5em;
    margin-left: 0.5em;
}
}
`;
const Price = styled.section`
    font-weight: 700;
    font-size: 20px;
    color: #ff3c4a;
`;
const Image = styled.section`
    grid-area: img;
    width: 64px;
    height: 64px;
`;
function ProductCartModal() {
	return (
		<ProductCart>
			<Image>Image</Image>
			<ProductName>Product Name</ProductName>
			<div>
				<CantProducts>
					<div>
						<Icon>
							<FiMinusCircle size={26} />
						</Icon>
						<span>2</span>
						<Icon>
							<FiPlusCircle size={26} />
						</Icon>
					</div>
					<Price>
						<span>$3.000,00</span>
					</Price>
				</CantProducts>
			</div>
		</ProductCart>
	);
}

export default ProductCartModal;
