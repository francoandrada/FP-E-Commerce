import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getCategories,
	getBrands,
	getListOfProductTable,
	changeTablePage,
} from '../../../Redux/actions';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import Loader from '../../Loader/Loader';
import Select from '../../Select/Select';
import TableLogic from './TableLogic';
import PaginationTable from '../TablePagination/TablePagination';
import styles from './Table.module.css';
import Admin from '../Admin/Admin';
import { Link } from 'react-router-dom';
const Table = () => {
	const [searchFilter, setSearchFilter] = useState('');
	const dispatch = useDispatch();

	const {
		mapData,
		paginationSizeHandle,
		orderTableHandle,
		filterByCategoryHandle,
		sortTableHandle,
		filterByBrandHandle,
		productToDelete,
	} = TableLogic();

	const {
		filterByCategory,
		listProductsOnTable,
		sizePagination,
		orderTable,
		sortTable,
		gotoTablePage,
		tableByBrand,
	} = useSelector((state) => state.admin);

	const { allCategories } = useSelector((state) => state.category);
	const { allBrands } = useSelector((state) => state.brands);

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
		dispatch(getBrands());
	}, [dispatch]);

	useEffect(() => {
		dispatch(
			getListOfProductTable(gotoTablePage, {
				sortBy: sortTable,
				order: orderTable,
				category: filterByCategory,
				limit: sizePagination,
				brand: tableByBrand,
				search: searchFilter,
				deleteProduct: productToDelete,
			})
		);
	}, [
		dispatch,
		sizePagination,
		orderTable,
		filterByCategory,
		sortTable,
		gotoTablePage,
		tableByBrand,
		searchFilter,
		productToDelete,
	]);

	/*
		the size of the img can be changed on the "columns" file, also the "icons"
		icons that I used https://fontawesome.com/v5.15/icons/wrench?style=solid
	*/
	const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
		tableInstance;

	const searchFilterHandle = (event) => {
		event.preventDefault();
		const inputText = event.target.value;
		setSearchFilter(inputText);
	};

	const paginate = (pageNumber) => dispatch(changeTablePage(pageNumber));
	return (
		<div className={styles.Container}>
			<Admin />
			<div className={styles.btnContainer}>
				<Link to='/admin/addproduct'>
					<button> Add Product </button>
				</Link>
			</div>
			<div className= {styles.tableContainer}>

				<div
					style={{
						height: '100px',
						background: 'white',
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
						width: '80%',
						marginLeft: '20%',
						borderRadius: '10px 10px 0 0',
						flexDirection: 'column',
					}}
				>
					<div className={styles.searchContainer}>

						<input
							type='text'
							value={searchFilter}
							placeholder='Search...'
							onChange={searchFilterHandle}
						/>

					</div>
					<div className={styles.filterContainer}>

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

						{allBrands && (
							<Select
								initialValue={tableByBrand}
								onChange={filterByBrandHandle}
								values={['default', ...allBrands.map(({ name }) => name)]}
							/>
						)}
					</div>
				</div>
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

			{listProductsOnTable && listProductsOnTable?.totalPages > 1 && (
				<PaginationTable
					totalPages={listProductsOnTable?.totalPages}
					paginate={paginate}
				/>
			)}
		</div>
	);
};

export default Table;
