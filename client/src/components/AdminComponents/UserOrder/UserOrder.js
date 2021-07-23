import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getUserWithOrdersDetail,
	filterByStatus,
} from '../../../Redux/actions';
import COLUMNS from './columns';
import Loader from '../../Loader/Loader';
import Table from '../TableComponent/TableComponent';
import Select from '../../Select/Select';
import UserOrderLogic from './UserOrderLogic';

const UserOrder = () => {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = React.useState('');
	const { mapData, changePaginationSizeHandle, filterHandle } =
		UserOrderLogic();
	const { userWithOrder, tableOrderUserPaginationSize, filterByOrderStatus } =
		useSelector((state) => state.admin);

	React.useEffect(() => {
		dispatch(
			getUserWithOrdersDetail(0, {
				limit: tableOrderUserPaginationSize,
				search: searchValue,
				filter: filterByOrderStatus,
			})
		);
	}, [
		dispatch,
		tableOrderUserPaginationSize,
		searchValue,
		filterByOrderStatus,
	]);

	const searchHandle = (event) => {
		event.preventDefault();
		setSearchValue(event.target.value);
	};

	return (
		<div>
			<div>
				<input type='text' value={searchValue} onChange={searchHandle} />

				<Select
					initialValue={tableOrderUserPaginationSize}
					onChange={changePaginationSizeHandle}
					values={[5, 10, 20, 50, 100]}
				/>

				<Select
					initialValue={filterByOrderStatus}
					onChange={filterHandle}
					values={['all', 'created', 'processing', 'cancelled', 'completed']}
				/>
			</div>
			{userWithOrder ? (
				<Table
					dataToPrint={mapData(userWithOrder?.products)}
					formatColumn={COLUMNS}
				/>
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
