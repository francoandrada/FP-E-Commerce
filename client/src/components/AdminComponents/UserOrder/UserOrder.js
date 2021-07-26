import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getUserWithOrdersDetail,
	filterByStatus,
	changePageOfUserOrderTable,
} from '../../../Redux/actions';
import COLUMNS from './columns';
import Loader from '../../Loader/Loader';
import Table from '../TableComponent/TableComponent';
import Select from '../../Select/Select';
import Pagination from '../TablePagination/TablePagination';
import UserOrderLogic from './UserOrderLogic';

const UserOrder = () => {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = React.useState('');
	const { mapData, changePaginationSizeHandle, filterHandle } =
		UserOrderLogic();
	const {
		userWithOrder,
		tableOrderUserPaginationSize,
		filterByOrderStatus,
		currentPageOfUserOrderTable,
	} = useSelector((state) => state.admin);

	React.useEffect(() => {
		dispatch(
			getUserWithOrdersDetail(currentPageOfUserOrderTable, {
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
		currentPageOfUserOrderTable,
	]);

	const searchHandle = (event) => {
		event.preventDefault();
		setSearchValue(event.target.value);
	};

	const paginate = (pageNumber) =>
		dispatch(changePageOfUserOrderTable(pageNumber));
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
			{userWithOrder && userWithOrder?.totalPages > 1 && (
				<Pagination
					totalPages={userWithOrder?.totalPages - 1}
					paginate={paginate}
				/>
			)}
		</div>
	);
};

export default UserOrder;
