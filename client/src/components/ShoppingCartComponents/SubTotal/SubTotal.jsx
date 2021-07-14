import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'
import style from './SubTotal.module.css'


function SubTotal({qty, userLogged}) {
    const cartProducts = useSelector((state) => state.cart.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cartProducts && cartProducts.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cartProducts, totalPrice, totalItems, setTotalPrice, setTotalItems]);

   

	return (
		<div>
            <div className={style.subtotalContainerMain}>
                <h4>ORDER SUMMARY</h4>
                <div className={style.subdivTotal}>
                    <p>Items in Cart:</p>
                    <p>{totalItems}</p>
                </div>
                
                <div className={style.subdivTotal}>
                    <p>TOTAL:<br></br>(without shipping)</p>
                    <h3>$ {totalPrice}</h3>
                </div>
                
                
                {userLogged ? 
                    <NavLink to='/payment'>
                    <button className={style.paymentButton}>Checkout</button>
                    </NavLink> 
                    : <NavLink to='/login'>
                    <button className={style.paymentButton}>Checkout</button>
                    </NavLink>
                    }
                
            </div>
		</div>
	);

}

export default SubTotal;