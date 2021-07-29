import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Admin from '../Admin/Admin';
import {
	/*getBrands,*/
	changePageOfBrandsAdmin,
	deleBrand,
	pikiPikiAllBrands
} from '../../../Redux/actions';
// import { MdModeEdit } from 'react-icons/md';
import styles from '../AdminCategories/AdminCategories.module.css';
// import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
// import { IoMdAddCircle } from 'react-icons/io';
import ModalBrand from './ModalBrand';
import PutBrand from '../adminPutForm/putBrand';
import Loader from '../../Loader/Loader';
// import { AiOutlineRetweet } from 'react-icons/ai';
import Pagination from '../TablePagination/TablePagination';

function AdminBrands() {
	const dispatch = useDispatch();
	const { allTheBrands, currentPageForBrand } = useSelector(
		state => state.admin
	);

	useEffect(() => {
		dispatch(pikiPikiAllBrands(currentPageForBrand));
	}, [dispatch, currentPageForBrand]);

	const deleteBrandHandle = (e, id) => {
		e.preventDefault();
		dispatch(deleBrand(id));
		window.location.reload();
	};

	let acu = 0;
	const sum = () => {
		return (acu += 1);
	};

	const paginate = pageNumber => dispatch(changePageOfBrandsAdmin(pageNumber));
	return (
		<>
			<div>
				<Admin />
			</div>
			<div className={styles._container}>
				<div>
					<h1>Brands</h1>
				</div>
				<div className={styles.categoriesContainer}>
					<div className={styles.btnContainer}>
						<ModalBrand />
					</div>
					<table className='table'>
						<thead>
							<tr>
								<th className='col-md-1'>#</th>
								<th>Name</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							{allTheBrands ? (
								allTheBrands?.brands.map((c, key) => {
									return (
										<tr
											key={c.id}
											className={`${!c.isVisible && 'table-danger'}`}
										>
											<th>{sum()}</th>
											<td>{c.name}</td>
											<td>
												<div>
													<PutBrand brand={c.id} />
													<button
														className={styles.btnDelete}
														onClick={e => deleteBrandHandle(e, c.id)}
													>
														<FaTrashAlt title='Remove' />
													</button>
												</div>
											</td>
										</tr>
									);
								})
							) : (
								<Loader />
							)}
						</tbody>
					</table>

					<div
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						{allTheBrands && allTheBrands?.totalPages > 1 && (
							<Pagination
								totalPages={allTheBrands?.totalPages}
								paginate={paginate}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
export default AdminBrands;
