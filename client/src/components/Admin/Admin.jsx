import PutProduct from '../../adminPutForm/putProduct'
import PutCategory from '../../adminPutForm/putCategory'
import PutBrand from '../../adminPutForm/putBrand'

function Admin() {
    return (
        <div>
            <PutProduct/>
            <PutCategory/>
            <PutBrand/>
        </div>
    )
}

export default Admin;