import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setAuthentication} from '../../Redux/actions'


function AuthenticationButton() {
   
    // const authentication = useSelector((state) => state.user.authenticated)

    const dispatch = useDispatch()

    // const handleOnClick=()=>{
    //     console.log('click')
    //     dispatch(setAuthentication())
    // }
    
    return (
        <div>
            <button onClick={() => dispatch(setAuthentication(true))}>
                Authenticated
            </button>
        </div>
    )
}

export default AuthenticationButton
