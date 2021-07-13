import styles from './CartModal.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const icon = styled.div`
  color: red
    
`;

function CartModal (){
    return (
        <icon>
          <FaShoppingCart size={122} color="#aaa"/>
        </icon>
    )
}

export default CartModal