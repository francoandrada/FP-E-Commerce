import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Admin from '../Admin/Admin';
import { getBrands } from '../../../Redux/actions';
import { MdModeEdit } from 'react-icons/md';
import styles from '../AdminCategories/AdminCategories.module.css';
import { Link } from 'react-router-dom';
function AdminBrands() {
	const allBrands = useSelector((state) => state.brands.allBrands);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getBrands());
	}, [dispatch]);
	return (
		<>
			<div>
				<Admin />
			</div>
			<div className={styles._container}>
				<Link to='/admin/addbrands'>
					<button> Add Brand </button>
				</Link>
				<div className={styles.categoriesContainer}>
					<h1> Brands </h1>
					{allBrands.map((c) => {
						return (
							<div className={styles.category}>
								<span>Name: {c.name}</span>
								<div>
									<Link key={c.id} to={`/admin/putbrands/${c.id}`}>
										<button className={styles.btnEdit}>
											<MdModeEdit />
										</button>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
export default AdminBrands;
