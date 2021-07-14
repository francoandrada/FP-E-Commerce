import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import Admin from "../Admin/Admin";
import { getCategories } from "../../Redux/actions";
import { MdModeEdit } from 'react-icons/md'
import styles from './AdminCategories.module.css'
function AdminCategories() {
    const allCategories = useSelector(state => state.category.allCategories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <>
            <div>
                <Admin />
            </div>
            <div className={styles.categoriesContainer}>

                <h1> Categories </h1>
                {allCategories.map(c => {
                    return (
                        <div className={styles.category}>
                            <span>Name: {c.name}</span>
                            <div>
                                <button className={styles.btnEdit}>
                                    <MdModeEdit />
                                </button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}
export default AdminCategories;