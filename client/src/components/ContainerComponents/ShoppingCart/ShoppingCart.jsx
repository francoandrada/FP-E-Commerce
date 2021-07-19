import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartList from '../../ShoppingCartComponents/CartList/CartList'
import SubTotal from '../../ShoppingCartComponents/SubTotal/SubTotal'
import style from './ShoppingCart.module.css'

function ShoppingCart() {
    const userInfo = useSelector((state) => state.user);
    const userLogged = userInfo.authenticated;
    const userId = userLogged && userInfo.userData.userId;

	return (
        <div className={style.shoppingCartContainer}>
      
            <div className={style.shoppingCartMain}>
                <div className={style.cartDiv}>
                <CartList/>
                </div>

                <div className={style.subtotalDiv}>
                <SubTotal 
                userLogged={userLogged}
                userId={userId}
                />
                </div>
		    </div>
            <div>
                <NavLink to='/catalog'>
                <button className={style.gobackButton}>GO BACK TO CATALOG</button>
                </NavLink>
            </div>
           
        </div>
		
	);

}

export default ShoppingCart;