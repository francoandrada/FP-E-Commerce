import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../Redux/actions';

const ForgotPassword = () => {
	const dispatch = useDispatch();

	const [mail, setMail] = useState({
		email: '',
	});

	const handleChange = (e) => {
		setMail({
			...mail,
			[e.target.name]: e.target.value,
		});
	};
	const { email } = mail;

	console.log(mail.email)
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(forgotPassword(mail.email));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Email</label>
				<input
					type='email'
					placeholder='Email'
					name='email'
					onChange={handleChange}
					value={email}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
export default ForgotPassword;
