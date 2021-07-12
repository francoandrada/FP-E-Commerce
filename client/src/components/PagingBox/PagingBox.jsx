import React from 'react'
import styles from "./PagingBox.module.css"

export const PagingBox = (props) => {
    
    const {pagesQty, actualPage} = props
    
    const pagesArray = []
    for(let i=1; i<=pagesQty;i++){
        pagesArray.push(i)
    }

    return (
        <div id={styles.container}>
            <div className={styles.prevNext}>
            <button onClick={()=>props.setPage(actualPage-1)}>PREV</button>
            </div>
            <div id={styles.contenedorNumbers}>
                {pagesArray.length > 0 ? 
                <div className={styles.numbers}>
                {pagesArray && pagesArray.map(page =>
                    <button key={page} onClick={()=>props.setPage(page)} className={`${page===actualPage ? `${styles.active}` : `${styles.buttonPagin}`}`}>{page}</button> 
                )}
                </div>
                : 
                <div className={styles.numbers}>1</div>
                }
            </div>
            <div className={styles.prevNext}>
                <button onClick={()=>props.setPage(actualPage+1)}>NEXT</button>
            </div>
        </div>
    )
}

export default PagingBox;
