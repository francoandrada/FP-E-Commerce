import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import Admin from "../Admin/Admin";
import {  getProducts } from "../../Redux/actions";
import { MdModeEdit } from 'react-icons/md'
import styles from './AdminProducts.module.css'
import { Link } from "react-router-dom";

function AdminProducts() {
    const allProducts = useSelector(state => state.product.allProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <div>
                <Admin />
            </div>
            <div className={styles.categoriesContainer}>

                <h1> Products </h1>
                {allProducts.map(c => {
                    return (
                        <ul className={styles.category}>
                            <img src={c.image} alt="" />
                            <span>Name: {c.name}</span>
                            <p className="p">{c.price}</p>
                            <p>{c.priceSpecial}</p>
                            <p>{c.description}</p>
                            <p>{c.weight}</p>
                            <p>{c.stock}</p>
                            <p>{c.categories[0].name}</p>
                            <div>
                            <Link key={c.id} to={`/admin/putproduct/${c.id}`}>
                                    <button className={styles.btnEdit}>
                                        <MdModeEdit />
                                    </button>
                                </Link>
                            </div>
                        </ul>
                    )
                })}

            </div>
        </>
    )
}
export default AdminProducts;