export const COLUMNS = [
	{
		Header: 'Image',
		accessor: 'image',
		Cell: (row) => {
			return (
				<div>
					<img width={50} src={row.row.original.image} />
				</div>
			);
		},
	},
	{
		Header: 'Id',
		accessor: 'id',
	},
	{
		Header: 'Name',
		accessor: 'name',
	},
	{
		Header: 'Price',
		accessor: 'price',
	},
	{
		Header: 'PriceSpecial',
		accessor: 'priceSpecial',
	},
	{
		Header: 'Weight',
		accessor: 'weight',
	},
	{
		Header: 'Stock',
		accessor: 'stock',
	},
	{
		Header: 'Category',
		accessor: 'category',
	},
];
