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
			array.map((o) => {
				return {
					id: o?.id || '--',
					orderId: o?.orderId || '--',
					price: o?.price || '--',
					quantity: o?.quantity || '--',
					createdAt: o?.createdAt || '--',
					updatedAt: o?.updatedAt || '--',
					productId: o?.product?.id || '--',
					name: o?.product?.name || '--',
					price: o?.product?.price || '--',
					priceSpecial: o?.product?.priceSpecial || '--',
					stock: o?.product?.stock || '--',
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
