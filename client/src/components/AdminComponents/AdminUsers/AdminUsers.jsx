import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
import { useHistory } from 'react-router-dom';
import { getUsers } from '../../../Redux/actions';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import styles from './AdminUser.module.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBox from './SearchBox';
import stylesAdmin from './AdminUser.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { Si1Password } from 'react-icons/si';
import { forgotPassword } from '../../../Redux/actions';

function AdminUsers() {
	const history = useHistory();

	const activeUser = useSelector((state) => state.user.userData);
	let allUsers = useSelector((state) => state.admin.usersFromDB);
	const [filter, setFilter] = useState('');
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const handleDelete = async (email, event) => {
		try {
			await axios
				.put('http://localhost:3001/admin/user/delete', { email: email })
				.then(() => {
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'The user was succesfully deleted',
						showConfirmButton: false,
						timer: 1500,
					});
				})
				.then(() => history.push('/admin/users'));
		} catch (error) {
			console.log(error.response.data.msg);
		}
	};

	let acu = 0;
	const sum = () => {
		return (acu += 1);
	};

	const onDeleteClick = (email) => {
		if (email === activeUser.email) {
			console.log(email);
			console.log(activeUser.email);
			Swal.fire({
				title: `You can't delete yourself while being into an active session.`,
				showDenyButton: false,
				confirmButtonText: `OK`,
				customClass: {
					confirmButton: 'order-2',
				},
			});
		} else {
			Swal.fire({
				title: 'Do you want to delete this user?',
				showDenyButton: true,
				confirmButtonText: `Yes`,
				denyButtonText: `No`,
				customClass: {
					confirmButton: 'order-2',
					denyButton: 'order-3',
				},
			}).then((result) => {
				if (result.isConfirmed) {
					handleDelete(email);
					Swal.fire('Saved!', '', 'success');
				} else if (result.isDenied) {
					Swal.fire('Changes are not saved', '', 'info');
				}
			});
		}
	};

	const onResetClick = (email) => {
		Swal.fire({
			title: `Do you want to reset the user's password?`,
			showDenyButton: true,
			confirmButtonText: `Yes`,
			denyButtonText: `No`,
			customClass: {
				confirmButton: 'order-2',
				denyButton: 'order-3',
			},
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(forgotPassword(email));
				Swal.fire('Saved!', '', 'success');
			} else if (result.isDenied) {
				Swal.fire('Changes are not saved', '', 'info');
			}
		});
	};

	let users = filter
		? allUsers.filter((user) => user.email.includes(filter))
		: allUsers;

	return (
		<div className={styles.UserAdmin}>
			<div>
				<Admin />
			</div>
			<div id={stylesAdmin.mainContainer}>
				<div className={styles.title}>
					<h1>Users</h1>
				</div>

				<div className={styles.userContainer}>
					<div className={styles.headerTable}>
						<div className={styles.btnContainer}>
							<Link to='/admin/addcategory'>
								<button>
									<IoMdAddCircle className={styles.btnAdd} /> Add User
								</button>
							</Link>
						</div>
						<div className={styles.SearchBoxContainer}>
							<SearchBox filter={filter} setFilter={setFilter} />
						</div>
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
							{users?.map((c) => {
								return (
									<tr>
										<th>{sum()}</th>
										<td>{c.email}</td>
										<td>
											<div>
												<Link key={c.id} to={`/admin/user/${c.email}`}>
													<button className={styles.btnEdit}>
														<MdModeEdit title='Edit' />
													</button>
												</Link>
												<button
													className={styles.btnEdit}
													onClick={() => onDeleteClick(c.email)}
												>
													<FaTrashAlt title='Remove' />
												</button>
												<button
													className={styles.btnEdit}
													onClick={() => onResetClick(c.email)}
												>
													<Si1Password title='Reset' />
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
		</div>
	);
}
export default AdminUsers;
