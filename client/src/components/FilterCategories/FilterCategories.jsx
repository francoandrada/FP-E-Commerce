import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterCategory } from '../../Redux/actions';
import styles from './Filter.module.css';
// import styles from './Filter.module.css'

function FilterCategories() {

	const categoriesName = useSelector((state) => state.category.allCategories);
   
	const dispatch = useDispatch();

    const [categoryChecked, setCategoryChecked] = useState("");
    
    let prueba = undefined
    if(document.getElementById("monitores")){
        prueba = document.getElementById("monitores")
    }

    useEffect(()=>unCheck(categoryChecked),[categoryChecked]
    )

    useEffect(()=>dispatch(filterCategory(categoryChecked)),[categoryChecked]
    )

    const unCheck = (category)=>{
        let boxes = document.getElementsByClassName("form-check-input")
        for(let i=0;i<boxes.length;i++){
            boxes[i].id===category?
            boxes[i].checked= true
            : boxes[i].checked= false
        }
    }

    const onClickedBox=(event)=>{
        event.target.checked?setCategoryChecked(event.target.id):setCategoryChecked("")
    }

	// console.log(categories.products)
	return (
		<div className={styles.divCelena}>
			<h1 className={styles.title}>Hola</h1>
			{categoriesName ? (
				categoriesName.map((item, index) => (
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
							id={item.name}
                            // checked='true'
							key={index}
							onClick={(event) => onClickedBox(event)}
                            // onClick={() => console.log(prueba.checked)}

						/>
						<label className='form-check-label' for='defaultCheck1'>
							{item.name}
						</label>
					</div>
				))
			) : (
				<ul></ul>
			)}
		</div>
	);
}

export default FilterCategories;
