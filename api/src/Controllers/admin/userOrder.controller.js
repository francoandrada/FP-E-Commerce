const { User, Order } = require('../../db');

const userOrder = async (req, res, next) => {
	let userAndOrders = {};
	const { limit } = req.body;
	const pageAsNumber = Number.parseInt(req.query.page);
	const limitToNumber = Number.parseInt(limit);

	let page = 0;
	if (!Number.isNaN(pageAsNumber) && pageAsNumber >= 0) page = pageAsNumber;

	userAndOrders = await User.findAndCountAll({
		limit: limitToNumber,
		offset: page * limitToNumber,
		include: {
			model: Order,
		},
	});

	return res.json({
		totalPages: Math.floor(userAndOrders.count / limitToNumber),
		products: userAndOrders.rows,
	});
};

module.exports = userOrder;

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
