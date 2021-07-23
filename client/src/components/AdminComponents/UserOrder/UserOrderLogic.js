import { useDispatch } from 'react-redux';
import { changeTableOrderUserPaginationSize } from '../../../Redux/actions';
const UserOrderLogic = () => {
	const dispatch = useDispatch();
	const mapData = (array) => {
		const data =
			array &&
			array.map((o) => {
				return {
					orderId: o?.orderId || '--',
					date: o?.createdAt || '--',
					updatedAt: o?.updatedAt || '--',
					status: o?.status || '--',
					ammount: o?.ammount || '--',
					userName: o?.user?.name || '--',
					email: o?.user.email || '--',
					surname: o?.user?.surname || '--',
					userId: o?.user?.userId || '--',
				};
			});
		return data;
	};

	const changePaginationSizeHandle = (event) => {
		event.preventDefault();
		dispatch(changeTableOrderUserPaginationSize(event.target.value));
	};

	return { mapData, changePaginationSizeHandle };
};

export default UserOrderLogic;
