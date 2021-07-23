import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserWithOrdersDetail } from '../../../Redux/actions';
import COLUMNS from './columns';
import Loader from '../../Loader/Loader';
import Table from '../TableComponent/TableComponent';

const UserOrder = () => {
	const dispatch = useDispatch();
	const { userWithOrder } = useSelector((state) => state.admin);

	React.useEffect(() => {
		dispatch(getUserWithOrdersDetail(0, { limit: 5 }));
	}, [dispatch]);

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

	const dataToPrint = mapData(userWithOrder?.products);

	return (
		<div>
			{userWithOrder ? (
				<Table dataToPrint={dataToPrint} formatColumn={COLUMNS} />
			) : (
				<Loader />
			)}
		</div>
	);
};

export default UserOrder;
