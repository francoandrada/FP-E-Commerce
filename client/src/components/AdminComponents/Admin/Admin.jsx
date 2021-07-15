import {Link} from 'react-router-dom'

function Admin() {
    return (
        <div>
            <div> 
                <ul>

                <Link to='/admin/products'><li> Products </li></Link>
                <Link to= '/admin/categories'><li> Categories </li></Link>
                <Link to='/admin/brands'><li> Brands </li></Link>
                <Link to='/admin/users'><li> Users </li></Link>
                <Link to='/admin/orders'><li> Orders </li></Link>
                <Link to='/admin/stock'><li> Stock </li></Link>
               
                </ul>
            </div>
        </div>
    )
}

export default Admin;