import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import style from '../../UserComponents/UserOrders.module.css';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getUserToEdit } from '../../../Redux/actions';
import { Si1Password } from 'react-icons/si';
import Swal from 'sweetalert2';
import { forgotPassword } from '../../../Redux/actions';



function UserAccount({ setOption }) {
	const user = useSelector((state) => state.admin.userToEdit);
	const userInfo = useSelector((state) => state.user.userData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserToEdit(userInfo.email));
	}, [dispatch]);

	console.log(user);

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

	return (
		<div className={style.userOptionContainer}>
			<div className={style.selectedOptionCabecera}>
				<div>
					<h3>My Account</h3>
				</div>
				<div>
					<Link id='edit'>
						<button>
							<MdModeEdit id='edit' onClick={(event) => setOption(event)} />
						</button>
					</Link>
				</div>

			</div>
			{user ? (
				<div className={style.UserPersonalInfo}>
					<p>First Name: {user.name}</p>
					<p>Last Name: {user.surname}</p>
					<p>Address Street: {user.address}</p>
					<p>Address Number: {user.addressNumber}</p>
					<p>Postal Code: {user.postalCode}</p>
					<p>Email: {user.email}</p>
					<p>
					<button onClick={() => onResetClick(user.email)}>Reset Password</button>
					</p>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default UserAccount;
