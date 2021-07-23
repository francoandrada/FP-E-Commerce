import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getProductWithOrderData,
	changeTableOrderPaginationSize,
} from '../../../Redux/actions';
import COLUMNS from './columns';
import Loader from '../../Loader/Loader';
import Table from '../TableComponent/TableComponent';
import Select from '../../Select/Select';

const Orders = () => {
	const dispatch = useDispatch();
	const { productWithOrder, tableOrderPaginationSize } = useSelector(
		(state) => state.admin
	);

	React.useEffect(() => {
		dispatch(getProductWithOrderData(0, { limit: tableOrderPaginationSize }));
	}, [dispatch, tableOrderPaginationSize]);

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

	const paginationSizeHandle = (event) => {
		event.preventDefault();
		dispatch(changeTableOrderPaginationSize(event.target.value));
	};

	return (
		<div>
			<div>
				<Select
					initialValue={tableOrderPaginationSize}
					onChange={paginationSizeHandle}
					values={[5, 10, 20, 50, 100]}
				/>
			</div>

			{productWithOrder ? (
				<Table dataToPrint={dataToPrint} formatColumn={COLUMNS} />
			) : (
				<Loader />
			)}
		</div>
	);
};

export default Orders;
