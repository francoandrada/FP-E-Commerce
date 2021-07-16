import { Route, Switch } from 'react-router';

import Admin from '../AdminComponents/Admin/Admin';
import AddBrand from '../AdminComponents/AdminAddForm/AdminAddBrand';
import AddCategory from '../AdminComponents/AdminAddForm/AdminAddCategory'; // esta carpeta esta mal ubicada
import AddProduct from '../AdminComponents/AdminAddForm/AdminAddProduct'; // esta carpeta esta mal ubicada
import AdminCategories from '../AdminComponents/AdminCategories/AdminCategories';
import PutCategory from '../AdminComponents/adminPutForm/putCategory';
import PutProduct from '../AdminComponents/adminPutForm/putProduct';
import AdminBrands from '../AdminComponents/AdminBrands/AdminBrands';
import PutBrand from '../AdminComponents/adminPutForm/putBrand';
import AdminUsers from '../AdminComponents/AdminUsers/AdminUsers';
import UserPanel from '../AdminComponents/AdminUsers/UserPanel';
import Table from '../AdminComponents/Table/Table';

const AdminRoutes = () => {
	/* =======================================================================
			ALL NEW PATH NEED TO GO INSIDE TO THE Switch COMPONENT
	==========================================================================*/

	return (
		<>
			<Switch>
				<Route path='/admin' exact component={Admin} />
				<Route path='/admin/orders' exact component={Admin} />
				<Route path='/admin/stock' exact component={Admin} />
				<Route path='/admin/addbrands/' exact component={AddBrand} />
				<Route path='/admin/addcategory/' exact component={AddCategory} />
				<Route path='/admin/addproduct/' exact component={AddProduct} />
				<Route path='/admin/categories' exact component={AdminCategories} />
				<Route path='/admin/putCategory/:id' exact component={PutCategory} />
				<Route path='/admin/putproduct/:id' exact component={PutProduct} />
				<Route path='/admin/brands' exact component={AdminBrands} />
				<Route path='/admin/putbrands/:id' exact component={PutBrand} />
				<Route path='/admin/users' exact component={AdminUsers} />
				<Route path='/admin/user/:email' exact component={UserPanel} />
				<Route path='/admin/users/:email' exact component={UserPanel} />
				<Route path='/admin/products' exact component={Table} />
			</Switch>
		</>
	);
};

export default AdminRoutes;
