import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
<<<<<<< HEAD
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
=======
import styles from './Filter.module.css';

function FilterCategories() {
	const categories = useSelector((state) => state.category.allCategories);

	return (
		<div className={styles.divCelena}>
			<h1 className={styles.title}>Hola</h1>
			{categories.map((item, index) => (
				<div className={styles.div_celena} key={index}>
					<p>{item.name}</p>
				</div>
			))}
		</div>
>>>>>>> 8c3cf3ddf8e75d85be4782dd3c5efbbf96a42680
	);
}

export default FilterCategories;
<<<<<<< HEAD


=======
>>>>>>> 8c3cf3ddf8e75d85be4782dd3c5efbbf96a42680
