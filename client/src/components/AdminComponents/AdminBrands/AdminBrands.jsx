import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Admin from '../Admin/Admin';
import { getBrands, deleBrand } from '../../../Redux/actions';
import { MdModeEdit } from 'react-icons/md';
import styles from '../AdminCategories/AdminCategories.module.css';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa'
// import { AiOutlineRetweet } from 'react-icons/ai';
function AdminBrands() {
	const dispatch = useDispatch();
	const allBrands = useSelector((state) => state.brands.allBrands);

	useEffect(() => {
		dispatch(getBrands());
	}, [dispatch]);

	const deleteBrandHandle = (e, id) => {
		e.preventDefault();
		dispatch(deleBrand(id));
		window.location.reload();
	};

	return (
		<>
			<div>
				<Admin />
			</div>
			<div className={styles._container}>
				<div className={styles.btnContainer}>
					<Link to='/admin/addbrands'>
						<button> Add Brand </button>
					</Link>
				</div>
				<div className={styles.categoriesContainer}>
					<div className={styles.tittleContainer}>
						<h1> Brands </h1>
					</div>
					{allBrands.map((c, key) => {
						return (
							<div key={key} className={styles.category}>
								<span>Name: {c.name}</span>
								<div>
									<Link key={c.id} to={`/admin/putbrands/${c.id}`}>
										<button className={styles.btnEdit}>
											<MdModeEdit />
										</button>
									</Link>
									<button onClick={(e) => deleteBrandHandle(e, c.id)}>
										<FaTrashAlt />
									</button>
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
