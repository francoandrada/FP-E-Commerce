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
	{
		Header: 'Delete',
		accesor: 'delete',
		Cell: (row) => {
			return (
				<button onClick={row.row.original.delete}>
					<i className='fas fa-trash-alt'></i>
				</button>
			);
		},
	},
	{
		Header: 'Update',
		accesor: 'update',
		Cell: (row) => {
			return (
				<button onClick={row.row.original.update}>
					<i class='fas fa-wrench'></i>
				</button>
			);
		},
	},
];
