import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { deleProduct } from '../../../Redux/actions';
// import { useHistory } from 'react-router';

import {
	changePaginationSize,
	changeOrderTable,
	tableFilterByCategory,
	sortTableAction,
	tableFilterByBrand
} from '../../../Redux/actions';

const TableLogic = () => {
	const dispatch = useDispatch();
	const [productToDelete, setProductToDelete] = useState(0);

	const formatNumber = num => {
		return num
			? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
			: '--';
	};

	function mapData(array) {
		const data = array.map(e => {
			const categories = array => {
				return array
					.filter(({ isVisible }) => isVisible)
					.map(({ name }) => name)
					.join('\n');
			};
			return {
				id: e?.id,
				image: e?.image,
				name: e?.name,
				description: e?.description || 'No Description',
				price: formatNumber(e?.price),
				priceSpecial: formatNumber(e?.priceSpecial),
				stock: e?.stock,
				isVisible: e?.isVisible,
				weight: e?.weight,
				category: categories(e?.categories).length
					? categories(e?.categories)
					: 'No Categories',
				brand: e?.brand?.name || 'No Brand',
				delete: event => {
					event.preventDefault();
					const response = window.confirm(
						`You wanna delete the Product: ${e?.name}?`
					);
					if (response && e?.id !== null) {
						setProductToDelete(e?.id);
					} else {
						setProductToDelete(0);
					}
				},
				update: event => {
					event.preventDefault();
				}
			};
		});
		return data;
	}

	const filterByBrandHandle = event => {
		event.preventDefault();
		dispatch(tableFilterByBrand(event.target.value));
	};

	const filterByCategoryHandle = event => {
		event.preventDefault();
		dispatch(tableFilterByCategory(event.target.value));
	};

	const paginationSizeHandle = event => {
		event.preventDefault();
		dispatch(changePaginationSize(event.target.value));
	};

	const orderTableHandle = event => {
		event.preventDefault();
		dispatch(changeOrderTable(event.target.value));
	};

	const sortTableHandle = event => {
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
		filterByBrandHandle,
		productToDelete
	};
};

export default TableLogic;
