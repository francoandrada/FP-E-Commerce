import { useDispatch } from 'react-redux';
import { changeTableOrderPaginationSize } from '../../../Redux/actions';

const OrdersLogic = () => {
	const dispatch = useDispatch();

	const mapData = (array) => {
		const data =
			array &&
			array.map((o) => {
				return {
					id: o?.id || '--',
					orderId: o?.orderId || '--',
					price: o?.price || '--',
					quantity: o?.quantity || '--',
					createdAt: o?.createdAt || '--',
					updatedAt: o?.updatedAt || '--',
					productId: o?.product?.id || '--',
					name: o?.product?.name || '--',
					price: o?.product?.price || '--',
					priceSpecial: o?.product?.priceSpecial || '--',
					stock: o?.product?.stock || '--',
				};
			});
		return data;
	};

	const paginationSizeHandle = (event) => {
		event.preventDefault();
		dispatch(changeTableOrderPaginationSize(event.target.value));
	};

	return { mapData, paginationSizeHandle };
};

export default OrdersLogic;
