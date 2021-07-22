import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserWithOrdersDetail } from '../../../Redux/actions';

const UserOrder = () => {
	const dispatch = useDispatch();
	const { userWithOrder } = useSelector((state) => state.admin);

	React.useEffect(() => {
		dispatch(getUserWithOrdersDetail(0, { limit: 5 }));
	}, [dispatch]);

	const mapData = (array) => {
		const data =
			array &&
			array.map((u) => {
				return {
					id: u?.orders[0]?.userId,
					name: u?.name,
					surname: u?.surname,
					email: u?.email,
					orderId: u?.orders[0]?.orderId,
					ammount: u?.orders[0]?.ammount,
					date: u?.orders[0]?.createdAt,
					status: u?.orders[0]?.status,
				};
			});
		return data;
	};

	userWithOrder &&
		console.info(
			'🔥[FileName: UserOrder.js]🕹️[LineNumber: 31]❓[VariableName: userWithOrder]:',
			userWithOrder
		);

	userWithOrder &&
		console.info(
			'🔥[FileName: UserOrder.js]🕹️[LineNumber: 37]❓[VariableName: mapData(userWithOrder?.products)]:',
			mapData(userWithOrder?.products)
		);

	return <div>UserOrder</div>;
};

export default UserOrder;

/*  {
            "userId": 2,
            "name": "yo",
            "surname": "you",
            "email": "america@correo.com",
            "password": "$2b$10$FG0It/mrMr9txdK3ZHJ5nuzZ.Mzjfp202LK7wR0bPZFQzvN/oUdDC",
            "address": "mer",
            "addressNumber": 8989,
            "postalCode": 8989,
            "phone": "3232",
            "resetLink": "",
            "admin": false,
            "createdAt": "2021-07-21T23:18:42.202Z",
            "updatedAt": "2021-07-21T23:18:42.202Z",
            "roleId": null,
            "orders": [
                {
                    "orderId": 6,
                    "ammount": 574192,
                    "status": "created",
                    "createdAt": "2021-07-21T23:19:39.688Z",
                    "updatedAt": "2021-07-21T23:19:39.988Z",
                    "userId": 2
                }
            ]
        }, */
