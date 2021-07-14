import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {addToCart, removeFromCart} from '../../Redux/actions'
import style from './CartProducts.module.css'
import {BsTrash} from 'react-icons/bs'

function CartList({info, image, name, price, qty}) {
    const dispatch = useDispatch();
    const [prodInfo, setProdInfo] = useState(info)
    

    function handlePlus() {
        setProdInfo(info)
        dispatch(addToCart(prodInfo))
    }

    function handleMinus() {
        setProdInfo(info)
        dispatch(removeFromCart(prodInfo))
    }
	
	return (
		<div>
        
            <div className={style.shoppingCartContainer}>
                <div className={style.cartProductsContainer}>
                    <div className={style.cartImageDiv}>
                        <img src={image} className={style.cartImage} alt='productFoto' />
                    </div>
                    <p>{name}</p>
                    <h1>{price}</h1>
                
                    <div className={style.modifyQtyButtons}>
                        <button 
                        onClick={handleMinus} 
                        className={style.plusMinusButtons}>-</button>
                        <h3>{qty}</h3>
                        <button 
                        onClick={handlePlus}
                        className={style.plusMinusButtons}>+</button>
                    </div>
                
                    <button className={style.trashButtonCart}><BsTrash/></button>
                </div>
            </div>
		</div>
	);

}

export default CartList;