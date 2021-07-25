import React, { useState } from "react"
import { sendMessageBot, userMessage } from "../../Redux/actions"
import {useDispatch, useSelector} from 'react-redux';

// const dispatch = useDispatch();
const mess = useSelector((state)=> state.chatbot.messages)
const Chat = () => {

    const [message, setMessage] = useState("")
    

    const handleClick = async (e)=>{
        const code= e.keyCode || e.wich;
        if(code === 13){
            console.log(message)
        //    dispatch(userMessage(mess))
        sendMessageBot(message)
            setMessage("")
        }
    }
    return (
        <div>
            <h1> Chatty the chatbot</h1>
            <div> 
            {
                mess.length === 0 ? "" : mess.map((msg)=>(
                    <div className= "">{msg.message}</div>
                ))
            }
            </div>
            <input id="chatBox"
            onChange={(e)=>setMessage(e.target.value)}
            onKeyPress={handleClick}
            value={message} />
        </div>
    )
}
export default Chat