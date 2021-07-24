import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderDetails } from '../../../Redux/actions';
import Loader from '../../Loader/Loader';
import Table from '../TableComponent/TableComponent';
import Select from '../../Select/Select';
import COLUMNS from './columns';
import axios from 'axios';

const OrderDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [orderStatus, setOrderStatus] = React.useState('');
	const { orderDetails } = useSelector((state) => state.admin);

	React.useEffect(() => {
		dispatch(getOrderDetails(id));
	}, [dispatch, id]);

	const mapData = (array) => {
		const data =
			array &&
			array.map((o) => {
				return {
					id: o?.id || '--',
					price: o?.price || '--',
					quantity: o?.quantity || '--',
					productName: o?.product?.name || '--',
					image: o?.product?.image || '--',
					brand: o?.product?.brand?.name || '--',
				};
			});
		return data;
	};

	React.useEffect(() => {
		axios.put(`http://localhost:3001/orders/order/${id}`, {
			status: orderStatus,
		});
	}, [orderStatus]);

	const changeStatus = (event) => {
		event.preventDefault();
		setOrderStatus(event.target.value);
		window.location.reload();
	};

	return (
		<div>
			{orderDetails ? (
				[orderDetails].map((o) => (
					<div key={o?.orderId}>
						<div>
							<div>
								<p>
									<span>Order N°: {o?.orderId || '--'}</span>
									<span>Ammount: {o?.ammount || '--'}</span>
								</p>
								<p>
									<span>Created At: {o?.createdAt || '--'}</span>
									<span>Status: {o?.status || '--'}</span>
								</p>
							</div>
						</div>
						<div>
							<div>
								<span>Customer:</span>
								<h2>{`${o?.user?.name || '--'} ${
									o?.user?.surname || '--'
								}`}</h2>
							</div>
							<div>
								<span>E-mail: </span>
								<span>{o?.user.email || '--'}</span>
							</div>
							<div>
								<span>Phone: </span>
								<span>{o?.user.phone || '--'}</span>
							</div>
							<div>
								<span>Address: </span>
								<span>{`${o?.user?.address || '--'} N°: ${
									o?.user?.addressNumber || '--'
								}`}</span>
							</div>
							<div>
								<span>Postal Code: </span>
								<span>{o?.user?.postalCode}</span>
							</div>
						</div>
					</div>
				))
			) : (
				<Loader />
			)}
			<div>
				{orderDetails ? (
					<Table
						dataToPrint={mapData(orderDetails?.orderDetails)}
						formatColumn={COLUMNS}
					/>
				) : (
					<Loader />
				)}
			</div>
			<div>
				<span>Change Status:</span>
				{orderDetails && (
					<Select
						initialValue={orderDetails?.status}
						values={['created', 'processing', 'cancelled', 'completed']}
						onChange={changeStatus}
					/>
				)}
			</div>
		</div>
	);
};

export default OrderDetails;
