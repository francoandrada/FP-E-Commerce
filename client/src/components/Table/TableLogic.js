import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { COLUMNS } from './columns';
import {
	// getCategories,
	changePaginationSize,
	// getListOfProductTable,
	changeOrderTable,
	tableFilterByCategory,
} from '../../Redux/actions';

const TableLogic = () => {
	const dispatch = useDispatch();

	function mapData(array) {
		const data = array.map((e) => {
			return {
				id: e.id,
				image: e.image,
				name: e.name,
				description: e.description,
				price: e.price,
				priceSpecial: e.priceSpecial,
				stock: e.stock,
				weight: e.weight,
				category: e.categories[0].name,
			};
		});
		return data;
	}

	const filterByCategoryHandle = (event) => {
		event.preventDefault();
		dispatch(tableFilterByCategory(event.target.value));
	};

	const paginationSizeHandle = (event) => {
		event.preventDefault();
		dispatch(changePaginationSize(event.target.value));
	};

	const orderTableHandle = (event) => {
		event.preventDefault();
		dispatch(changeOrderTable(event.target.value));
	};

	return {
		// react-table
		mapData,
		// Select
		paginationSizeHandle,
		orderTableHandle,
		filterByCategoryHandle,
	};
};

export default TableLogic;
