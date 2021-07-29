import { useSelector } from 'react-redux';
import UserAddressDetail from './UserAddressDetail'
import style from '../../UserComponents/UserOrders.module.css';



function UserAddresses() {
    const userAddresses = useSelector((state) => state.useraccount.userOrdersList);
	
	return (
		<div>
			<div className={style.userOptionContainer}>
                <div className={style.selectedOptionTitle} >
				    <h3>My Addresses</h3>
				</div>

            {userAddresses && userAddresses.map(dir => {
                return (
                    <div key={dir.zipCode}>
                        <UserAddressDetail
                            addressId={userAddresses.indexOf(dir)}
                            address={dir.address.address}
                            city={dir.address.city}
                            province={dir.address.province}
                            zipCode={dir.address.zipCode}
                        />
            
                    </div>)
                })
				
			}	

            </div>	
			
		</div>
	);
}

export default UserAddresses;