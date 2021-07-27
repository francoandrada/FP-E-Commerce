import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userMessage, sendMessage } from '../../Redux/actions';

const Chat = () => {
	const dispatch = useDispatch();
	const { messages: chat } = useSelector((state) => state.watson);
	const [message, setMessage] = React.useState('');
	const endOfMessages = React.useRef(null);

	const scrollToBottom = () => {
		endOfMessages.current.scrollIntoView({ behavior: 'smooth' });
	};

	React.useEffect(scrollToBottom, [chat]);

	const handleClick = async (e) => {
		const code = e.keyCode || e.which;

		if (code === 13) {
			console.log('the message', message);
			dispatch(sendMessage(message));
			dispatch(userMessage(message));
			setMessage('');
		}
	};

	return (
		<div className='chat'>
			<h1>Chatty the Chatbot</h1>
			<div class='historyContainer'>
				{chat.length === 0
					? ''
					: chat.map((msg, key) => (
							<div key={key} className={msg.type}>
								{msg.message}
							</div>
					  ))}
				<div ref={endOfMessages}></div>
			</div>
			<input
				id='chatBox'
				onChange={(e) => setMessage(e.target.value)}
				onKeyPress={handleClick}
				value={message}
			></input>
		</div>
	);
};

export default Chat;
