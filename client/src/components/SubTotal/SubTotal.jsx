// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import {NavLink} from 'react-router-dom'
// import style from './SubTotal.module.css'


// function SubTotal({qty, userLogged}) {
//     const cartProducts = useSelector((state) => state.cart.cart);
    
//     // const [subtotal, setSubtotal] = useState({
//     //     newSubtotal: subtotal * qty
//     // })

// 	return (
// 		<div>
//             <div className={style.subtotalContainerMain}>
//                 <h1>Subtotal:</h1>
//                 <h1>0</h1>
//                 {userLogged ? 
//                     <NavLink to='/payment'>
//                     <button className={style.paymentButton}>GO TO PAY</button>
//                     </NavLink> 
//                     : <NavLink to='/login'>
//                     <button className={style.paymentButton}>GO TO PAY</button>
//                     </NavLink>
//                     }
                
//             </div>
// 		</div>
// 	);

// }

// export default SubTotal;