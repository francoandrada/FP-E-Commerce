import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductWithOrderData } from '../../../Redux/actions';
import COLUMNS from './columns';
import Loader from '../../Loader/Loader';
import Table from '../TableComponent/TableComponent';
import Select from '../../Select/Select';
import OrdersLogic from './OrdersLogic';

const Orders = () => {
	const dispatch = useDispatch();
	const { mapData, paginationSizeHandle } = OrdersLogic();
	const { productWithOrder, tableOrderPaginationSize } = useSelector(
		(state) => state.admin
	);

	const [searchValue, setSearchValue] = React.useState('');

	React.useEffect(() => {
		dispatch(
			getProductWithOrderData(0, {
				limit: tableOrderPaginationSize,
				search: searchValue,
			})
		);
	}, [dispatch, tableOrderPaginationSize, searchValue]);

	const searchHandle = (event) => {
		event.preventDefault();
		setSearchValue(event.target.value);
	};

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
		</div>
	);
};

export default Orders;
