import { useEffect } from 'react';
import styles from "./PagingBox.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { selectPage } from '../../Redux/actions';



export const PagingBox = (props) => {

    const dispatch = useDispatch();
    
	let actualPage = useSelector((state) => state.product.page);
    let responseLength = useSelector((state) => state.product.responseLength);
    let maxPage = Math.ceil(responseLength / props.productsPerPage)

    let category = useSelector((state) => state.category.selectedCategory);
	let brand = useSelector((state) => state.brands.selectBrand);
	let price = useSelector((state) => state.price.order);

    useEffect(() => {
		dispatch(selectPage(1));
	}, [category]);

    useEffect(() => {
		dispatch(selectPage(1));
	}, [brand]);
    
    useEffect(() => {
		dispatch(selectPage(1));
	}, [price]);

    console.log(actualPage)
    console.log(maxPage)
    
    
    function pagePrev(){
        console.log('prev')
        if(actualPage>1){
            dispatch(selectPage(actualPage-1));
        }
    }

    function pagePost(){
        console.log('post')
        if(actualPage<maxPage){
            dispatch(selectPage(actualPage+1));
        }
    }

    return (
        <div id={styles.container}>
            <div className={styles.prevNext}>
            <button onClick={()=>pagePrev()}>PREV</button>
            </div>
            <div className={styles.prevNext}>
                <button onClick={()=>pagePost()}>NEXT</button>
            </div>
        </div>
    )
}

export default PagingBox;
