import React, { useEffect, useState } from "react"
import Chat from "./ChatBot";
import axios from "axios";
import { createSessionBot } from "../../Redux/actions";



if(localStorage.session){
    delete axios.defaults.headers.common['session_id']
    axios.defaults.headers.common['session_id'] = localStorage.session
}
else{
    delete axios.defaults.headers.common['session_id']
}
const theChatBot = () =>{

    useEffect(() => {
        if(!localStorage.session){
        dispatch(createSessionBot());
        }
	}, [dispatch]);
    return(
        <div>
            <Chat/>
        </div>
    )
}
export default theChatBot;