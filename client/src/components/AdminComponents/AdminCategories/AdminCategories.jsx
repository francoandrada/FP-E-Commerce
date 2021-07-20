import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Admin from '../Admin/Admin';
import { deleCategory, getCategories } from '../../../Redux/actions';
import { MdModeEdit } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';

import styles from './AdminCategories.module.css';
import { Link } from 'react-router-dom';
function AdminCategories() {
	const allCategories = useSelector((state) => state.category.allCategories);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	let acu = 0;
	const sum = () => {
		return (acu += 1);
	};
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
				<div>
					<h1>Categories</h1>
				</div>
				<div className={styles.categoriesContainer}>
					<div className={styles.btnContainer}>
						<Link to='/admin/addcategory'>
							<button>
								{' '}
								<IoMdAddCircle className={styles.btnAdd} /> Add Category{' '}
							</button>
						</Link>
					</div>
					{/* <h1> Categories </h1> */}
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
									<tr
										key={c.id}
										className={`${!c.isVisible && 'table-danger'}`}
									>
										<th>{sum()}</th>
										<td>{c.name}</td>
										<td>
											<div>
												<Link key={c.id} to={`/admin/putCategory/${c.id}`}>
													<button className={styles.btnEdit}>
														<MdModeEdit title='Edit' />
													</button>
												</Link>
												<button
													className={styles.btnDelete}
													onClick={(e) => deleteCategoryHandle(e, c.id)}
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
export default AdminCategories;
