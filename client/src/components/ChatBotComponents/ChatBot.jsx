import React, { useState } from "react"

const Chat = () => {
    const [message, setMessage] = useState("")
    const handleClick = async (e)=>{
        const code= e.keyCode || e.wich;
        if(code === 13){
            console.log(message)
            setMessage("")
        }
    }
    return (
        <div>
            <h1> Chatty the chatbot</h1>
            <div> Messages go here </div>
            <input id="chatBox"
            onChange={(e)=>setMessage(e.target.value)}
            onKeyPress={handleClick}
            value={message} />
        </div>
    )
}
export default Chat