import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListOfProductTable } from '../../Redux/actions';

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

	listProductsOnTable && console.log('mi lista', listProductsOnTable.products);

	return <h1>hola</h1>;
};

export default Table;
