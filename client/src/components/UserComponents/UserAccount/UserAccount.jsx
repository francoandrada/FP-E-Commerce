import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import style from '../../UserComponents/UserOrders.module.css';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getUserToEdit } from '../../../Redux/actions';
import { Si1Password } from 'react-icons/si';
import Swal from 'sweetalert2';
import { forgotPassword } from '../../../Redux/actions';

import styled from 'styled-components';

const Form = styled.span`
	font-weight: 700;
`;
function UserAccount({ setOption }) {
	const user = useSelector(state => state.admin.userToEdit);
	const userInfo = useSelector(state => state.user.userData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserToEdit(userInfo.email));
	}, [dispatch]);

	console.log(user);

	const onResetClick = email => {
		Swal.fire({
			title: `Do you want to reset the user's password?`,
			showDenyButton: true,
			confirmButtonText: `Yes`,
			denyButtonText: `No`,
			customClass: {
				confirmButton: 'order-2',
				denyButton: 'order-3'
			}
		}).then(result => {
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
					<h3 className={style.Tittle}>My Account</h3>
				</div>
				<div id='edit' onClick={event => setOption(event)}>
					<Link id='edit'>
						<button
							className={style.buttonEditUserinfo}
							id='edit'
							onClick={event => setOption(event)}
						>
							Edit <MdModeEdit id='edit' onClick={event => setOption(event)} />
						</button>
					</Link>
				</div>
			</div>
			{user ? (
				<div className={style.UserPersonalInfo}>
					<p>
						<Form>First Name:</Form> {user.name}
					</p>
					<p>
						<Form>Last Name: </Form>
						{user.surname}
					</p>
					<p>
						<Form>Address Street:</Form> {user.address}
					</p>
					<p>
						<Form>Address Number: </Form>
						{user.addressNumber}
					</p>
					<p>
						<Form>Postal Code: </Form>
						{user.postalCode}
					</p>
					<p>
						<Form>Email:</Form> {user.email}
					</p>
					<p>
						<button onClick={() => onResetClick(user.email)}>
							<Form>Reset Password</Form>
						</button>
					</p>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default UserAccount;
