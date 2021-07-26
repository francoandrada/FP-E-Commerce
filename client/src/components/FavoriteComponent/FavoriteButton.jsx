import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {addToFavorites, removeFavorites } from '../../Redux/actions'
import {FaRegHeart, FaHeart} from 'react-icons/fa'

function FavoriteButton({prod}) {
    const fav = useSelector((state) => state.useraccount.userFavorites);
    const isFav = fav.some(elem => elem.id === prod.id)
	const dispatch = useDispatch();

    function handleIsFav () {
        if (isFav === true) {
            dispatch(removeFavorites(prod))
            
        } else {
            dispatch(addToFavorites(prod))
           
        }
    }

	return (
		<div style={{width: '30px', height: '30px'}}>
       
            {isFav ?
        
            <button onClick={handleIsFav} >
                <FaHeart style={{fontSize: '1.5rem'}} />
            </button>
            :
            <button onClick={handleIsFav}>
                <FaRegHeart style={{fontSize: '1.5rem'}}/>
            </button>
            
            }
        
			
		</div>
	);
}

export default FavoriteButton;