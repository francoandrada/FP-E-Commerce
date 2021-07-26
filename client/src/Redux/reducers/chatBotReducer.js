import { INPUT_FAIL, INPUT_SUCCESS,
     MESSAGE_FAIL, 
     MESSAGE_SUCCESS,
      SESSION_FAIL_CHAT,
       SESSION_SUCCESS_CHAT } from "../actionsName";

const initialState ={
    messages: []
}
function chatBotReducer(state = initialState, action){
    const {type, payload} = action
    let {messages} = state
switch(type){
    case INPUT_SUCCESS:
        messages = [...messages, {message: payload, type: 'user'}]
        return{
            ...state,
            messages
        }
    case INPUT_FAIL: 
    return{
        ...state,
    }
    case SESSION_SUCCESS_CHAT:
        localStorage.setItem('session', payload['session_id'])
    return{
        ...state
    }
    case SESSION_FAIL_CHAT:
    return{
        ...state
    }
    case MESSAGE_SUCCESS:
        messages= [...messages, {message:payload, type: 'bot'}]
    return {
        ...state,
        messages
    }
    case MESSAGE_FAIL:
    return {
        ...state
    }
    default:
        return{
            ...state,
        }
}
}
export default chatBotReducer;