import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getUserWithOrdersDetail,
	changeTableOrderUserPaginationSize,
} from '../../../Redux/actions';
import COLUMNS from './columns';
import Loader from '../../Loader/Loader';
import Table from '../TableComponent/TableComponent';
import Select from '../../Select/Select';

const UserOrder = () => {
	const dispatch = useDispatch();
	const { userWithOrder, tableOrderUserPaginationSize } = useSelector(
		(state) => state.admin
	);

	React.useEffect(() => {
		dispatch(
			getUserWithOrdersDetail(0, { limit: tableOrderUserPaginationSize })
		);
	}, [dispatch, tableOrderUserPaginationSize]);

	const mapData = (array) => {
		const data =
			array &&
			array.map((o) => {
				return {
					orderId: o?.orderId || '--',
					date: o?.createdAt || '--',
					updatedAt: o?.updatedAt || '--',
					status: o?.status || '--',
					ammount: o?.ammount || '--',
					userName: o?.user?.name || '--',
					email: o?.user.email || '--',
					surname: o?.user?.surname || '--',
					userId: o?.user?.userId || '--',
				};
			});
		return data;
	};

	const dataToPrint = mapData(userWithOrder?.products);

	const changePaginationSizeHandle = (event) => {
		event.preventDefault();
		dispatch(changeTableOrderUserPaginationSize(event.target.value));
	};

	return (
		<div>
			<div>
				<Select
					initialValue={tableOrderUserPaginationSize}
					onChange={changePaginationSizeHandle}
					values={[5, 10, 20, 50, 100]}
				/>
			</div>
			{userWithOrder ? (
				<Table dataToPrint={dataToPrint} formatColumn={COLUMNS} />
			) : (
				<Loader />
			)}
			{userWithOrder && userWithOrder?.products.length === 0 && (
				<h1 style={{ textAlign: 'center', padding: '20px' }}>
					No data to Render
				</h1>
			)}
		</div>
	);
};

export default UserOrder;
