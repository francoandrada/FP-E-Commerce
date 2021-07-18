import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Admin.css';

function Admin() {
	// const [sidebar, setSidebar] = useState(false);
	// const showSidebar = () => setSidebar(!sidebar);
	return (
		<div className='container'>
			<IconContext.Provider value={{ color: '#cd113b' }}>
				{/* <div className='navbar'>
					<Link to='#' className='menu-bars'>
						<FaIcons.FaBars onClick={showSidebar} />
					</Link>
				</div> */}
				<div className='nav-menu active'>
					<ul className='nav-menu-items'>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
						{/* <Link to='/admin/products'><li className='navbar-toggle'> Products/Stock </li></Link>
                        <Link to='/admin/categories'><li className='navbar-toggle'> Categories </li></Link>
                        <Link to='/admin/brands'><li className='navbar-toggle'> Brands </li></Link>
                        <Link to='/admin/users'><li className='navbar-toggle'> Users </li></Link>
                        <Link to='/admin/orders'><li className='navbar-toggle'> Orders </li></Link> */}
					</ul>
				</div>
			</IconContext.Provider>
		</div>
	);
}

export default Admin;
