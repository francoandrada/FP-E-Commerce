import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, getListOfProductTable } from '../../Redux/actions';
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
		category: 'default',
	};

	useEffect(() => {
		dispatch(getListOfProductTable(0, test));
	}, [dispatch]);

	const mapData = (array) => {
		const data = array.map((e) => {
			return {
				id: e.id,
				image: e.image,
				description: e.description,
				price: e.price,
				specialPrice: e.specialPrice,
				stock: e.stock,
				weight: e.weight,
				category: e.categories[0].name,
			};
		});
		return data;
	};

	const dataToPrint = listProductsOnTable
		? mapData(listProductsOnTable.products)
		: [];

	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => dataToPrint, [dataToPrint]);

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
