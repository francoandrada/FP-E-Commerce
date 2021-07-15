import {useSelector } from 'react-redux';
import CartProducts from '../CartProducts/CartProducts'

function CartList() {
	const cartProducts = useSelector((state) => state.cart.cart);


	return (
		<div>
				{ cartProducts && cartProducts.map(el => {
                    return <div key={el.id}> 
                        <CartProducts
                            info ={el}
                            image={el.image}
                            name={el.name}
                            price={el.price}
                            qty={el.qty}
                        />
                    </div>})
                }
		</div>
	);

}

export default CartList;