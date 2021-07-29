import { Link } from 'react-router-dom';

export const COLUMNS = [
	{
		Header: 'Image',
		accessor: 'image',
		Cell: row => {
			return (
				<div>
					<img width={50} src={row.row.original.image} alt='' />
				</div>
			);
		}
	},
	{
		Header: 'Id',
		accessor: 'id'
	},
	{
		Header: 'Name',
		accessor: 'name'
	},
	{
		Header: 'Price',
		accessor: 'price'
	},
	{
		Header: 'PriceSpecial',
		accessor: 'priceSpecial'
	},
	{
		Header: 'Weight',
		accessor: 'weight'
	},
	{
		Header: 'Stock',
		accessor: 'stock'
	},
	{
		Header: 'Category',
		accessor: 'category'
	},
	{
		Header: 'Brand',
		accessor: 'brand'
	},
	{
		Header: 'Delete',
		accesor: 'delete',
		Cell: row => {
			return (
				<button onClick={row.row.original.delete}>
					<i className='fas fa-trash-alt'></i>
				</button>
			);
		}
	},
	{
		Header: 'Update',
		accesor: 'update',
		Cell: row => {
			return (
				<Link
					key={row.row.original.id}
					to={`/admin/putproduct/${row.row.original.id}`}
				>
					<i className='fas fa-wrench'></i>
				</Link>
			);
		}
	}
];
