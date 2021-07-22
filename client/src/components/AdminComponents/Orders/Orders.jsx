import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductWithOrderData } from '../../../Redux/actions';
import Loader from '../../Loader/Loader';
import Table from '../TableComponent/TableComponent';
import COLUMNS from './columns';

const Orders = () => {
	const dispatch = useDispatch();
	const { productWithOrder } = useSelector((state) => state.admin);

	React.useEffect(() => {
		dispatch(getProductWithOrderData(0, { limit: 5 }));
	}, [dispatch]);

	const mapData = (array) => {
		const data =
			array &&
			array.map((p) => {
				return {
					id: p?.id,
					name: p?.name || 'No Name',
					detailId: p?.orderDetails[0]?.id || '--',
					price: p?.orderDetails[0]?.price || '--',
					quantity: p?.orderDetails[0]?.quantity || '--',
					orderId: p?.orderDetails[0]?.orderId || '--',
					createdAt: p?.orderDetails[0]?.createdAt || '--',
				};
			});
		return data;
	};

	const dataToPrint = mapData(productWithOrder?.products);

	return (
		<div>
			{productWithOrder ? (
				<Table dataToPrint={dataToPrint} formatColumn={COLUMNS} />
			) : (
				<Loader />
			)}
		</div>
	);
};

export default Orders;
