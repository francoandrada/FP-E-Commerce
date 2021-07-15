import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getCategories,
	changePaginationSize,
	getListOfProductTable,
	changeOrderTable,
} from '../../Redux/actions';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import Loader from '../Loader/Loader';
import Select from '../Select/Select';
import TableLogic from './TableLogic';
import styles from './Table.module.css';

const Table = () => {
	const { mapData, paginationSizeHandle, orderTableHandle } = TableLogic();
	const dispatch = useDispatch();
	const { listProductsOnTable, sizePagination, orderTable } = useSelector(
		(state) => state.admin
	);
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
		dispatch(
			getListOfProductTable(0, {
				orderBy: 'price',
				order: orderTable,
				category: 'default',
				limit: sizePagination,
			})
		);
	}, [dispatch, sizePagination, orderTable]);

	const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
		tableInstance;
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
					initialValue={orderTable}
					onChange={orderTableHandle}
					values={['default', 'ASC', 'DESC']}
				/>
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
