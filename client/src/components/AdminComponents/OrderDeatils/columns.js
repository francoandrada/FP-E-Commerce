const columns = [
	{
		Header: 'Image',
		accessor: 'image',
		Cell: (row) => {
			return (
				<div>
					<img width={50} src={row.row.original.image} alt='' />
				</div>
			);
		},
	},
	{
		Header: 'Id',
		accessor: 'id',
	},
	{
		Header: 'Product',
		accessor: 'productName',
	},
	{
		Header: 'Price',
		accessor: 'price',
	},
	{
		Header: 'Brand',
		accessor: 'brand',
	},
	{
		Header: 'Quantity',
		accessor: 'quantity',
	},
];

export default columns;
