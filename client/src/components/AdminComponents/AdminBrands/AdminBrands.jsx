import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Admin from '../Admin/Admin';
import { getBrands, deleBrand } from '../../../Redux/actions';
import { MdModeEdit } from 'react-icons/md';
import styles from '../AdminCategories/AdminCategories.module.css';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
// import { AiOutlineRetweet } from 'react-icons/ai';
function AdminBrands() {
	const dispatch = useDispatch();
	const allBrands = useSelector((state) => state.brands.allBrands);

	useEffect(() => {
		dispatch(getBrands());
	}, [dispatch]);

	const deleteBrandHandle = (e, id) => {
		e.preventDefault();
		dispatch(deleBrand(id));
		window.location.reload();
	};

	let acu = 0;
	const sum = () => {
		return (acu += 1);
	};

	return (
		<>
			<div>
				<Admin />
			</div>
			<div className={styles._container}>
				<div>
					<h1>Brands</h1>
				</div>
				<div className={styles.categoriesContainer}>
					<div className={styles.btnContainer}>
						<Link to='/admin/addcategory'>
							<button>
								<IoMdAddCircle className={styles.btnAdd} /> Add Brand{' '}
							</button>
						</Link>
					</div>
					<table className='table'>
						<thead>
							<tr>
								<th className='col-md-1'>#</th>
								<th>Name</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							{allBrands.map((c, key) => {
								return (
									<tr key={c.id}>
										<th>{sum()}</th>
										<td>{c.name}</td>
										<td>
											<div>
												<Link key={c.id} to={`/admin/putbrands/${c.id}`}>
													<button className={styles.btnEdit}>
														<MdModeEdit title='Edit' />
													</button>
												</Link>
												<button
													className={styles.btnDelete}
													onClick={(e) => deleteBrandHandle(e, c.id)}
												>
													<FaTrashAlt title='Remove' />
												</button>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
export default AdminBrands;
