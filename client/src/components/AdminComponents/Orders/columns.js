const columns = [
	{
		Header: 'Product',
		columns: [
			{
				Header: 'Id',
				accessor: 'productId',
			},
			{
				Header: 'Product Name',
				accessor: 'name',
			},
			{
				Header: 'Stock',
				accessor: 'stock',
			},
		],
	},
	{
		Header: 'Order Details',
		columns: [
			{
				Header: 'Order Id',
				accessor: 'orderId',
			},
			{
				Header: 'Id',
				accessor: 'id',
			},
			{
				Header: 'Price (U)',
				accessor: 'price',
			},
			{
				Header: 'Quatity',
				accessor: 'quantity',
			},
			{
				Header: 'Created At',
				accessor: 'createdAt',
			},
			{
				Header: 'Updated At',
				accessor: 'updatedAt',
			},
		],
	},
];

export default columns;
