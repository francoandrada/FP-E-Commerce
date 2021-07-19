import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Admin from '../Admin/Admin';
import { getCategories } from '../../../Redux/actions';
import { MdModeEdit } from 'react-icons/md';
import styles from './AdminCategories.module.css';
import { Link } from 'react-router-dom';
function AdminCategories() {
	const allCategories = useSelector((state) => state.category.allCategories);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	return (
		<>
			<div>
				<Admin />
			</div>
			<div className={styles._container}>
				<Link to='/admin/addcategory'>
					<button> Add Category </button>
				</Link>
				<div className={styles.categoriesContainer}>
					<h1> Categories </h1>
					<table class='table'>
						<thead>
							<tr>
								<th class='col-md-1'>#</th>
								<th>Name</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							{allCategories.map((c) => {
								return (
									<tr>
										<th>1</th>
										<td>{c.name}</td>
										<td>
											<div>
												<Link key={c.id} to={`/admin/putCategory/${c.id}`}>
													<button className={styles.btnEdit}>
														<MdModeEdit />
													</button>
												</Link>
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
export default AdminCategories;
