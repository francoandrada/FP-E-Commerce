import React, { useEffect, useState } from "react"
import Chat from "./ChatBot";
import axios from "axios";
import { createSessionBot } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import styles from "./chatbot.module.css"

if(localStorage.session){
    delete axios.defaults.headers.common['session_id']
    axios.defaults.headers.common['session_id'] = localStorage.session
}
else{
    delete axios.defaults.headers.common['session_id']
}
const TheChatBot = () =>{
    const dispatch = useDispatch()

    useEffect(() => {
        if(!localStorage.session){
        dispatch(createSessionBot());
        }
	}, [dispatch]);
    return(
        <div className={styles.conteinerChatbot} >
            <Chat/>
        </div>
    )
}
export default TheChatBot;