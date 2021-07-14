import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './CartProducts.module.css'
import {BsTrash} from 'react-icons/bs'

function CartList() {
    // const dispatch = useDispatch();
    // const cartProducts = useSelector((state) => state.product.cart);
    const [quantity, setQuantity] = useState(1)
    const [subtotal, setSubtotal] = useState(0)
	
    // useEffect(() => {
	// 	dispatch(getCart());
	// }, []);

    function ChangeQuantityMinus(event) {
       
        if (quantity <= 0) {
            setQuantity(0)
            // dispatch(deleteFromCart())
        } else {
            setQuantity(quantity - 1)
        }
    };

    function ChangeQuantityPlus(event) {
            setQuantity(quantity + 1)
            // dispatch(addQuantity(quantity))
            
        
    };

    // function calculateSubtotal() {
    //     let newSubtotal = subtotal

    //     for (let i = 0; cartProducts.lenght; i++) {
    //         newSubtotal = newSubtotal + cartProducts[i].price
    //         return newSubtotal
    //     }
    //     setSubtotal(newSubtotal)
                
    // }



	return (
		<div>
            {/* <div>
                <img src={cartProducts.image} alt='productFoto' />
                <p>{cartProducts.name}</p>
                <h1>{cartProducts.price}</h1>
                <input type="number" name="quantity"></input>
                <button>ELIMINATE</button>
            </div> */}
            <div className={style.shoppingCartContainer}>
                <div className={style.cartProductsContainer}>
                    <div>IMAGE HERE</div>
                    <p>Product Name</p>
                    <h1>$ 12.000</h1>
                
                    <div className={style.modifyQtyButtons}>
                        <button 
                        onClick={ChangeQuantityMinus} 
                        className={style.plusMinusButtons}>-</button>
                        <h3>{quantity}</h3>
                        <button 
                        onClick={ChangeQuantityPlus}
                        className={style.plusMinusButtons}>+</button>
                    </div>
                
                    <button className={style.trashButtonCart}><BsTrash/></button>
                </div>

                <div className={style.subtotalContainerMain}>
                    <h1>SUBTOTAL:</h1>
                    <h1>{subtotal}</h1>
                    <button className={style.paymentButton}>GO TO PAY</button>
                </div>
            </div>
		</div>
	);

}

export default CartList;