import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Admin from '../Admin/Admin';
import { deleCategory, getCategories } from '../../../Redux/actions';
import { MdModeEdit } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './AdminCategories.module.css';
import { Link } from 'react-router-dom';
function AdminCategories() {
	const allCategories = useSelector((state) => state.category.allCategories);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	const deleteCategoryHandle = (e, id) => {
		e.preventDefault();
		dispatch(deleCategory(id));
		window.location.reload();
	};

	return (
		<>
			<div>
				<Admin />
			</div>
			<div className={styles._container}>
				<div className={styles.btnContainer}>
					<Link to='/admin/addcategory'>
						<button> Add Category </button>
					</Link>
				</div>
				<div className={styles.categoriesContainer}>
					<h1> Categories </h1>
					<table class='table'>
						<thead>
							<tr>
								<th scope='col-md-8'>#</th>
								<th scope='col'>Name</th>
								<th scope='col'>Actions</th>
							</tr>
						</thead>
					</table>
					{allCategories.map((c) => {
						return (
							<div className={styles.category}>
								<tbody>
									<tr>
										<th scope='row'>1</th>
										<td>{c.name}</td>
										<td>
											{' '}
											<div>
												<Link key={c.id} to={`/admin/putCategory/${c.id}`}>
													<button className={styles.btnEdit}>
														<MdModeEdit />
													</button>
												</Link>
												<button onClick={(e) => deleteCategoryHandle(e, c.id)}>
													<FaTrashAlt />
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
export default AdminCategories;
