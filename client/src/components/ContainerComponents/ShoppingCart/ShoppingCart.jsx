import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CartList from '../../CartList/CartList'
import SubTotal from '../../SubTotal/SubTotal'
import style from './ShoppingCart.module.css'

function ShoppingCart() {
    const userLogged = useSelector((state) => state.user.authenticated);
	const dispatch = useDispatch();

    console.log(userLogged)

	return (
        <div className={style.shoppingCartContainer}>
            <div className={style.shoppingCartMain}>
                <div className={style.cartDiv}>
                <CartList/>
                </div>

                <div className={style.subtotalDiv}>
                <SubTotal userLogged={userLogged}/>
                </div>
		    </div>
        </div>
		
	);

}

export default ShoppingCart;