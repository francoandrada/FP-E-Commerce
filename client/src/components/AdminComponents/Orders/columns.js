const columns = [
	{
		Header: 'Product',
		columns: [
			{
				Header: 'Id',
				accessor: 'id',
			},
			{
				Header: 'Product Name',
				accessor: 'name',
			},
		],
	},
	{
		Header: 'Order Details',
		columns: [
			{
				Header: 'Id',
				accessor: 'detailId',
			},
			{
				Header: 'Price',
				accessor: 'price',
			},
			{
				Header: 'Quatity',
				accessor: 'quantity',
			},
			{
				Header: 'Order Id',
				accessor: 'orderId',
			},
			{
				Header: 'Date',
				accessor: 'createdAt',
			},
		],
	},
];

export default columns;
