import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { createSession } from '../../Redux/actions';
import Chat from './Chat';

import styles from './Chat.module.css';

if (localStorage.session) {
	delete axios.defaults.headers.common['session_id'];
	axios.defaults.headers.common['session_id'] = localStorage.session;
} else {
	delete axios.defaults.headers.common['session_id'];
}

const WatsonChat = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!localStorage.session) dispatch(createSession());
	});

	return (
		<div className={styles.watsonContainer}>
			<Chat />
		</div>
	);
};

export default WatsonChat;
