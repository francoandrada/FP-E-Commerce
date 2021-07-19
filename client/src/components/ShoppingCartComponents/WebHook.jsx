import React from 'react';
import { useDispatch } from 'react-redux';
import { getPayInfo } from '../../Redux/actions';
import {useLocation} from "react-router-dom";




const WebHook = () => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('collection_id');
    const status = new URLSearchParams(search).get('collection_status');

   
  const dispatch = useDispatch();

    return (
        <div class='bg-white'>
      <h1>Details of your purchas</h1>
      <p>{id}</p>
      <p>Status: {status}</p>
      <button onClick={() => dispatch(getPayInfo(id))}>hola</button>
    </div>
     );
}
 
export default WebHook;