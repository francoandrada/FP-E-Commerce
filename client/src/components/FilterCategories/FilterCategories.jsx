import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getCategories, filterCategory} from '../../Redux/actions'
import styles from './Filter.module.css';
// import styles from './Filter.module.css'

function FilterCategories() {
    const categoriesName= useSelector((state)=> state.category.allCategories)
    const categoriesProducts= useSelector((state)=> state.category.selectedCategory)
    const dispatch =useDispatch()
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    

    // console.log(categories.products)
	return (
       
        <ul className={styles.divCelena}>
			<h1 className={styles.title}>Hola</h1>
			{categoriesName.map((item, index) => (
                <ul>
			  <button  
              key={index}
              // value={item.name}
              onClick={() => dispatch(filterCategory(item.name)) }
              >
                  <p>{item.name}</p>
              </button>
              </ul>
			))}
            {/* { 
                categoriesProducts ? categoriesProducts.products.map((x, index)=>(
                    <div>
                        <div>{x.name.products[0]}</div>
                    </div>
                ))
                : <p>holados</p>
            } */}
		</ul>
	);
}

export default FilterCategories;


