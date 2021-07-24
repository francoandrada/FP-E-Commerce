import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './SubTotal.module.css';
<<<<<<< HEAD
=======
import { postCart, postCartCrypto } from '../../../Redux/actions';
>>>>>>> main
import { formatNumber } from '../../../helper/priceFormater';
import { postCart, saveAmmount } from '../../../Redux/actions';

function SubTotal({address}) {
	const cartProducts = useSelector((state) => state.cart.cart);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	const dispatch = useDispatch();
	const mercadoPago = useSelector((state) => state.cart.link);

	const token = useSelector((state) => state.user.token);

<<<<<<< HEAD
=======
	const user = useSelector((state) => state.user.userData);
>>>>>>> main

	if (mercadoPago !== '') {
		window.location.href = mercadoPago;
	}

	useEffect(() => {
		let items = 0;
		let price = 0;

		cartProducts &&
			cartProducts.forEach((item) => {
				items += item.qty;
				price += item.qty * item.price;
			});

		setTotalItems(items);
		setTotalPrice(price);
		
	}, [cartProducts, totalPrice, totalItems, setTotalPrice, setTotalItems]);



<<<<<<< HEAD
	let totalFormat = formatNumber.new(totalPrice, '$');
	dispatch(saveAmmount(totalPrice))
	
=======
		array.push(element);
	}

	let bodyObject;
	if (user != null) {
		bodyObject = {
			id: user.userId,
			prodCarrito: array,
			ammount: totalPrice,
			status: status,
		};
	}
	let totalFormat = formatNumber.new(totalPrice, '$');

	const handleClickCrypto = () => {
		dispatch(postCartCrypto(bodyObject))
	};

>>>>>>> main
	return (
		<div>
			<div className={style.subtotalContainerMain}>
				<h4>ORDER SUMMARY</h4>
				<div className={style.subdivTotal}>
					<p>Items in Cart:</p>
					<p>{totalItems}</p>
				</div>

				<div className={style.subdivTotal}>
					<p>
						TOTAL:<br></br>(without shipping)
					</p>
					<h3>{totalFormat}</h3>
				</div>

				{token ? (
<<<<<<< HEAD
					<NavLink to='/shoppingcart/shipping'>
						<button className={style.paymentButton}
						>Buy Now</button>
					</NavLink>
=======
					<div>
						<button
							className={style.paymentButton}
							onClick={() => dispatch(postCart(bodyObject))}
						>
							Checkout with Mercado Pago
						</button>
						<NavLink to='/catalog'>
							<input
								type='image'
								src='https://www.coinpayments.net/images/pub/checkout-blue.png'
								alt='Checkout'
								onClick={handleClickCrypto}
							/>
						</NavLink>
					</div>
>>>>>>> main
				) : (
					<NavLink to='/login'>
						<button className={style.paymentButton}>Buy Now</button>
					</NavLink>
				)}
			</div>
		</div>
	);
}

export default SubTotal;
