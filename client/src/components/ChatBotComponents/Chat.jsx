import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userMessage, sendMessage } from '../../Redux/actions';
import { IoMdAddCircle } from 'react-icons/io';
import { BsChatDots } from "react-icons/bs";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	FormGroup,
	Input,
} from 'reactstrap';
import styles from './Chat.module.css'

const Chat = () => {
	const dispatch = useDispatch();
	const { messages: chat } = useSelector((state) => state.watson);
	const [message, setMessage] = useState('');
	const endOfMessages = useRef(null);

	const [Active, setActive] = useState(false);

	const openModal = () => {
		setActive(!Active);
	};
	const scrollToBottom = () => {
		endOfMessages.current.scrollIntoView({ behavior: 'smooth' });
	};

	// useEffect(scrollToBottom, [chat]);

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
		<>
<Button onClick={openModal}>
	{' '}
	<BsChatDots /> Personal Assistant{' '}
</Button>

<Modal isOpen={Active}>
	<Button variant= "denger" onClick={openModal}> Close </Button>
	<ModalHeader>Hello User!</ModalHeader>
	<ModalBody>
		<FormGroup>
			{/* <Label for='name'> Name: </Label> */}
			<div  className={styles.chat} >
				{chat.length === 0
					? ''
					: chat.map((msg, key) => (
							<div key={key} className={msg.type}>
								{msg.message}
							</div>
					  ))}
				<div ref={endOfMessages}></div>
			</div>
			<Input
				id='chatBox'
				onChange={(e) => setMessage(e.target.value)}
				onKeyPress={handleClick}
				value={message}
			/>
		</FormGroup>
	</ModalBody>

	<ModalFooter>
		<Button variant= "outline-info" type='submit'> Send</Button>
		
	</ModalFooter>
</Modal>
</>);
};
export default Chat;

		/* <div className='chat'>
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
		</div> */

