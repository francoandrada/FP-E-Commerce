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

function AdminUsers() {
	const history = useHistory();

	let allUsers = useSelector((state) => state.admin.usersFromDB);
	const [filter, setFilter] = useState('');
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const handleDelete = async (email) => {
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
					history.push('/');
				});
		} catch (error) {
			console.log(error.response.data.msg);
		}
	};

	const onDeleteClick = (email) => {
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
				<div className={styles.SearchBoxContainer}>
					<SearchBox filter={filter} setFilter={setFilter} />
				</div>
				<div className={styles.UserContainer}>
					<h1> Users </h1>
					{users?.map((c) => {
						return (
							<div className={styles.category} key={c.email}>
								<span>User: {c.email}</span>
								<div>
									<Link to={`/admin/user/${c.email}`}>
										<button className={styles.btnEdit}>
											<MdModeEdit />
										</button>
									</Link>
								</div>
								<div>
									<button className={styles.btnEdit}>
										<MdDelete onClick={() => onDeleteClick(c.email)} />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default AdminUsers;
