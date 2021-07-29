import { useDispatch } from 'react-redux';
import {
	changeTableOrderUserPaginationSize,
	filterByStatus
} from '../../../Redux/actions';
const UserOrderLogic = () => {
	const dateFormat = string => {
		const formated = string.split('T');
		return string ? `${formated[0]}\n ${formated[1].split('.')[0]}` : '--';
	};

	const formatNumber = num => {
		return num
			? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
			: '--';
	};

	const dispatch = useDispatch();
	const mapData = array => {
		const data =
			array &&
			array.map(o => {
				return {
					orderId: o?.orderId || '--',
					date: dateFormat(o?.createdAt),
					updatedAt: dateFormat(o?.updatedAt),
					status: o?.status || '--',
					ammount: formatNumber(o?.ammount),
					userName: o?.user?.name || '--',
					email: o?.user.email || '--',
					surname: o?.user?.surname || '--',
					userId: o?.user?.userId || '--'
				};
			});
		return data;
	};

	const filterHandle = event => {
		event.preventDefault();
		dispatch(filterByStatus(event.target.value));
	};

	const changePaginationSizeHandle = event => {
		event.preventDefault();
		dispatch(changeTableOrderUserPaginationSize(event.target.value));
	};

	return { mapData, changePaginationSizeHandle, filterHandle };
};

export default UserOrderLogic;
