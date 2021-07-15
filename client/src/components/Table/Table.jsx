import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getCategories,
	getListOfProductTable,
	// sortTableAction,
} from '../../Redux/actions';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import Loader from '../Loader/Loader';
import Select from '../Select/Select';
import TableLogic from './TableLogic';
import styles from './Table.module.css';

const Table = () => {
	const {
		mapData,
		paginationSizeHandle,
		orderTableHandle,
		filterByCategoryHandle,
	} = TableLogic();
	const dispatch = useDispatch();
	const {
		filterByCategory,
		listProductsOnTable,
		sizePagination,
		orderTable,
		sortTable,
	} = useSelector((state) => state.admin);
	const { allCategories } = useSelector((state) => state.category);

	// react-table
	const dataToPrint = listProductsOnTable
		? mapData(listProductsOnTable.products)
		: [];
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => dataToPrint, [dataToPrint]);
	const tableInstance = useTable({
		columns,
		data: data,
	});

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	useEffect(() => {
		dispatch(
			getListOfProductTable(0, {
				sortBy: sortTable,
				order: orderTable,
				category: filterByCategory,
				limit: sizePagination,
			})
		);
	}, [dispatch, sizePagination, orderTable, filterByCategory, sortTable]);

	const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
		tableInstance;

	const sortTableHandle = (event) => {
		event.preventDefault();
		// dispatch(sortTableAction(event.target.value));
	};
	return (
		<div>
			<div
				style={{
					height: '100px',
					background: 'gray',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<Select
					initialValue={sizePagination}
					onChange={paginationSizeHandle}
					values={[10, 20, 50, 100, 120]}
				/>

				<Select
					initialValue={sortTable}
					onChange={sortTableHandle}
					values={['name', 'id', 'price', 'priceSpecial', 'weight', 'stock']}
				/>

				<Select
					initialValue={orderTable}
					onChange={orderTableHandle}
					values={['default', 'ASC', 'DESC']}
				/>

				{allCategories && (
					<Select
						initialvalue={filterByCategory}
						onChange={filterByCategoryHandle}
						values={['default', ...allCategories.map(({ name }) => name)]}
					/>
				)}
			</div>
			{listProductsOnTable ? (
				<table {...getTableProps()} className={styles.tableEcommerce}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default Table;
