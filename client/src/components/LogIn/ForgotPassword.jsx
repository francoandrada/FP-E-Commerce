import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../Redux/actions';

const ForgotPassword = () => {
	const dispatch = useDispatch();
	const setError = useSelector((state) => state.user.setError);

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(forgotPassword(mail.email));
		alert('Check on your email inbox (')
	};

	return (
		<div>
			<p>{setError}</p>
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
