import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getProductWithOrderData,
	changePageOfProductOrderTable,
} from '../../../Redux/actions';
import COLUMNS from './columns';
import Loader from '../../Loader/Loader';
import Table from '../TableComponent/TableComponent';
import Select from '../../Select/Select';
import OrdersLogic from './OrdersLogic';
import Pagination from '../TablePagination/TablePagination';

const Orders = () => {
	const dispatch = useDispatch();
	const { mapData, paginationSizeHandle } = OrdersLogic();
	const {
		productWithOrder,
		tableOrderPaginationSize,
		currentPageOfProductOrderTable,
	} = useSelector((state) => state.admin);

	const [searchValue, setSearchValue] = React.useState('');
	//log
	console.log(currentPageOfProductOrderTable);

	React.useEffect(() => {
		dispatch(
			getProductWithOrderData(currentPageOfProductOrderTable, {
				limit: tableOrderPaginationSize,
				search: searchValue,
			})
		);
	}, [
		dispatch,
		tableOrderPaginationSize,
		searchValue,
		currentPageOfProductOrderTable,
	]);

	const searchHandle = (event) => {
		event.preventDefault();
		setSearchValue(event.target.value);
	};

	const paginate = (pageNumber) =>
		dispatch(changePageOfProductOrderTable(pageNumber));
	return (
		<div>
			<div>
				<input type='text' value={searchValue} onChange={searchHandle} />

				<Select
					initialValue={tableOrderPaginationSize}
					onChange={paginationSizeHandle}
					values={[5, 10, 20, 50, 100]}
				/>
			</div>

			{productWithOrder ? (
				<Table
					dataToPrint={mapData(productWithOrder?.products)}
					formatColumn={COLUMNS}
				/>
			) : (
				<Loader />
			)}
			{productWithOrder && productWithOrder?.totalPages > 1 && (
				<Pagination
					paginate={paginate}
					totalPages={productWithOrder?.totalPages}
				/>
			)}
		</div>
	);
};

export default Orders;
