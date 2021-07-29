import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getUserWithOrdersDetail,
	filterByStatus,
	changePageOfUserOrderTable
} from '../../../Redux/actions';
import COLUMNS from './columns';
import Loader from '../../Loader/Loader';
import Table from '../TableComponent/TableComponent';
import Select from '../../Select/Select';
import Pagination from '../TablePagination/TablePagination';
import UserOrderLogic from './UserOrderLogic';
import Admin from '../Admin/Admin'
import styles from './UserOrder.module.css';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md'
const UserOrder = () => {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = React.useState('');
	const {
		mapData,
		changePaginationSizeHandle,
		filterHandle
	} = UserOrderLogic();
	const {
		userWithOrder,
		tableOrderUserPaginationSize,
		filterByOrderStatus,
		currentPageOfUserOrderTable
	} = useSelector(state => state.admin);

	React.useEffect(() => {
		dispatch(
			getUserWithOrdersDetail(currentPageOfUserOrderTable, {
				limit: tableOrderUserPaginationSize,
				search: searchValue,
				filter: filterByOrderStatus
			})
		);
	}, [
		dispatch,
		tableOrderUserPaginationSize,
		searchValue,
		filterByOrderStatus,
		currentPageOfUserOrderTable
	]);

	const searchHandle = event => {
		event.preventDefault();
		setSearchValue(event.target.value);
	};

	const paginate = pageNumber =>
		dispatch(changePageOfUserOrderTable(pageNumber));
	return (
		<>
			{/* <div className={styles.btnBackContainer}>
				<Link to='/admin/categories'>
					<MdArrowBack />
				</Link>
			</div> */}
				{/* <div>
				<Admin />
			</div> */}
			<div className={styles.orderUserContainer}>
				<div className={styles.orderUserPanel}>
					<div className={styles.orderUserFeatures}>
						<input
							className={styles.orderUserInput}
							placeholder='Search...'
							type='text'
							value={searchValue}
							onChange={searchHandle}
						/>

						<Select
							initialValue={tableOrderUserPaginationSize}
							onChange={changePaginationSizeHandle}
							values={[5, 10, 20, 50, 100]}
						/>

					<Select
						initialValue={filterByOrderStatus}
						onChange={filterHandle}
						values={[
							'all',
							'created',
							'processing',
							'cancelled',
							'completed',
							'dispatched'
						]}
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
					<h3 className={styles.orderUserNoResults}>No data to Render</h3>
				)}
				{userWithOrder && userWithOrder?.totalPages > 1 && (
					<Pagination
						totalPages={userWithOrder?.totalPages - 1}
						paginate={paginate}
					/>
				)}
			</div>
		</>
	);
};

export default UserOrder;
