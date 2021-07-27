import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Admin.css';

function Admin() {
	// const [sidebar, setSidebar] = useState(false);
	// const showSidebar = () => setSidebar(!sidebar);


	return (
		<div className='container'>
			
			<IconContext.Provider value={{ color: '#cd113b' }}>
			<div className='nav-menu active'>
				<ul className='nav-menu-items'>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span id='item'>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</IconContext.Provider>
			
		</div>
	);
}

export default Admin;
