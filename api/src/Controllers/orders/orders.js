const { Sequelize } = require('sequelize');
const { Order, OrderDetail, Product } = require('../../db.js');

//-------------------------  GETS ALL ORDERS  --------------------------------//

const getOrders = async function getOrders(req, res, next) {
	try {
		const allOrders = await Order.findAll({ include: 'orderDetails' });
		res.status(200).json(allOrders);
	} catch (error) {
		next(error);
	}
};

//----------------------  GETS ONE ORDER BY ID  ---------------------------//

const getOrderById = async function getOrderById(req, res, next) {
	const id = parseInt(req.params.id);

	try {
		const orderById = await Order.findOne({
			include: 'orderDetails',
			where: {
				orderId: id,
			},
		});
		res.status(200).json(orderById);
	} catch (error) {
		next(error);
	}
};

const modifyOrderStatus = async function modifyOrderStatus(req, res, next) {
	const id = parseInt(req.params.id);
	const newStatus = req.body.status;

	try {
		const orderById = await Order.findOne({
			where: { orderId: id },
		});
		const updatedStatus = await orderById.update({
			status: newStatus,
		});

		res.status(200).json(updatedStatus.dataValues.status);
	} catch (error) {
		next(error);
	}
};

//------------------  GETS ALL ORDERS BY USER ID - FOR USERS ACCOUNT  ----------------------//

const findUserOrders = async function findUserOrders(req, res, next) {
    const userId = parseInt(req.params.userid);
 
    try {
        const allUserOrders = await Order.findAll({
            where: { userId: userId },
            attributes: ['userId', 'status'],
            include: [ 
            {
                model: OrderDetail,
                as: "orderDetails",
                attributes: ['id', 'orderId'],
                include: [
                    {
                        model: Product,
                        
                        attributes: [ 'id','name', 'price', 'image', 'priceSpecial', 'description', 'weight', 'stock' ]
                    }
                ]
                
            },
        
        ]
        });
        
        res.status(200).json(allUserOrders);
    } catch (error) {
        next(error);
    }
};


module.exports = {
	getOrders,
	getOrderById,
	modifyOrderStatus,
	findUserOrders,
};
