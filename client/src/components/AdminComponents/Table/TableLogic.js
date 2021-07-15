import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	// getCategories,
	changePaginationSize,
	// getListOfProductTable,
	changeOrderTable,
	tableFilterByCategory,
	sortTableAction,
} from '../../../Redux/actions';

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
				delete: (event) => {
					event.preventDefault();
					console.log('el id del producto a eliminar', e.id);
				},
				update: (event) => {
					event.preventDefault();
					console.log('el id del producto a actualizar', e.id);
				},
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

	const sortTableHandle = (event) => {
		event.preventDefault();
		dispatch(sortTableAction(event.target.value));
	};

	return {
		// react-table
		mapData,
		// Select
		paginationSizeHandle,
		orderTableHandle,
		filterByCategoryHandle,
		sortTableHandle,
	};
};

export default TableLogic;
