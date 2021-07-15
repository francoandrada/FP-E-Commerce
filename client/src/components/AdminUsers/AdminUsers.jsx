import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import Admin from "../Admin/Admin";
import { getUsers } from "../../Redux/actions";
import { MdModeEdit } from 'react-icons/md'
import styles from '../AdminCategories/AdminCategories.module.css'
import { Link } from "react-router-dom";
function AdminUsers() {
    const allUsers = useSelector(state => state.admin.usersFromDB)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <>
            <div>
                <Admin />
            </div>
            <div className={styles.categoriesContainer}>

                <h1> Users </h1>
                {allUsers?.map(c => {
                    return (
                        <div className={styles.category}>
                            <span>User: {c.email}</span>
                            <div>
                            <Link key={c.id} to={`/admin/putbrands/${c.id}`}>
                                    <button className={styles.btnEdit}>
                                        <MdModeEdit />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}
export default AdminUsers;