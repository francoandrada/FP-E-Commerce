import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './SubTotal.module.css';
import { formatNumber } from '../../../helper/priceFormater';
import Shipping from '../Shipping';

function SubTotal() {
	const cartProducts = useSelector((state) => state.cart.cart);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	const mercadoPago = useSelector((state) => state.cart.link);

	const token = useSelector((state) => state.user.token);

	const user = useSelector((state) => state.user.userData);
	console.log(user.userId);

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

	let status = 'created';
	let array = [];

	for (let i = 0; i < cartProducts.length; i++) {
		const element = {
			prodId: cartProducts[i].id,
			name: cartProducts[i].name,
			price: cartProducts[i].price,
			qty: cartProducts[i].qty,
		};

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
	console.log(bodyObject);
	let totalFormat = formatNumber.new(totalPrice, '$');

	return (
		<div>
			<div className='mb-4'>
				<div className={style.subtotalContainerMain}>
					<Shipping />
				</div>
			</div>
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
					<button
						className={style.paymentButton}
						// onClick={() => dispatch(postCart(bodyObject))}
						// onClick={() => {

						// }
					>
						Checkout
					</button>
				) : (
					<NavLink to='/login'>
						<button className={style.paymentButton}>Checkout</button>
					</NavLink>
				)}
			</div>
		</div>
	);
}

export default SubTotal;
