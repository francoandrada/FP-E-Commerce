import React, { useState, useEffect,useRef } from "react"
import { sendMessageBot, userMessage } from "../../Redux/actions"
import {useDispatch, useSelector} from 'react-redux';
import styles from "./chatbot.module.css"

const Chat = () => {
  const chat = useSelector((state)=> state.chatbot.messages)
  const dispatch = useDispatch()
     
     const [message, setMessage] = useState("");
     const endOfMessages = useRef(null);
   
     const scrollToBottom = () => {
       endOfMessages.current.scrollIntoView({ behavior: "smooth" });
     };
     useEffect(scrollToBottom, [chat]);
     const handleClick = async (e) => {
      const code = e.keyCode || e.which;
  
      if (code === 13) {
        
        dispatch(userMessage(message));
        dispatch(sendMessageBot(message));
        setMessage("");
      }
    };
   
    return (
      <div className={styles.chat}>
        <h1>Hello! @Usuario</h1>
      
        <div class={styles.historyContainer}>
          {chat.length === 0
            ? ""
            : chat.map((msg, index) => <div key={index}  className={ msg.type === 'user' ? styles.user : styles.bot}>{msg.message}</div>)}
          <div ref={endOfMessages}></div>
        </div>
        <input
          className={styles.inputChat}
          id="chatBox"
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleClick}
          value={message}
        ></input>
      </div>
    );
  };

export default Chat