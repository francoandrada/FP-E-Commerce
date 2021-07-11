import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {getCategories, filterCategory} from '../../Redux/actions'
import styles from './Filter.module.css'
function FilterCategories() {
const categories= useSelector((state)=> state.category.allCategories)
const dispatch =useDispatch()

useEffect(() => {
    dispatch(getCategories())
}, [dispatch])
console.log(categories[0].products)

    return ( 
        <div>
            {
                categories.map((item, index)=>(
                    <button  
                    key={index}
                    // value={item.name}
                    onClick={() => dispatch(filterCategory(item.name)) }
                    >
                        <p>{item.name}</p>
                    </button>
                ))
            }
           
        </div>
    )
}

export default FilterCategories;