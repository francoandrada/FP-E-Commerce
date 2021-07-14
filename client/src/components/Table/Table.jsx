import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListOfProductTable } from '../../Redux/actions';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import Loader from '../Loader/Loader';
import styles from './Table.module.css';

const Table = () => {
	const dispatch = useDispatch();
	const { listProductsOnTable } = useSelector((state) => state.admin);
	const test = {
		orderBy: 'price',
		order: 'ASC',
		category: 'tabletas',
	};

	useEffect(() => {
		dispatch(getListOfProductTable(0, test));
	}, [dispatch]);

	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(
		() => listProductsOnTable?.products,
		[listProductsOnTable?.products]
	);

	const tableInstance = useTable({
		columns,
		data: data || [],
	});

	const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
		tableInstance;
	return (
		<div>
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
