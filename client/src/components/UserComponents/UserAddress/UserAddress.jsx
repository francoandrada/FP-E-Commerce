import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserFavoritesDetail from './UserFavoritesDetails';
import style from '../../UserComponents/UserOrders.module.css';



function UserOrdersList() {
    const userId = useSelector((state) => state.user.userData.userId);
    const userFavorites = useSelector((state) => state.useraccount.userFavorites);
	
	return (
		<div>
			<div className={style.userOptionContainer}>
                <div className={style.selectedOptionTitle} >
				    <h3>My Favorites</h3>
				</div>

            {userFavorites && userFavorites.map(fav => {
                return (
                    <div>
                   <UserFavoritesDetail
                        image={fav.image}
                        name={fav.name}
                        price={fav.price}
                        prodInfo={fav}
                        id={fav.id}
                   />
                    </div>)
                })
				
			}	

            </div>	
			
		</div>
	);
}

export default UserOrdersList;