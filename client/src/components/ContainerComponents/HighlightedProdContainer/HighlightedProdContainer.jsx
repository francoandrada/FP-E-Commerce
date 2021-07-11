import styles from './HighlightedProdContainer.module.css'
import Highlights from '../../Highlights/Highlights'

function HighlightedProdContainer() {

    return(
        <div className={styles.HighlightContainer}>
            <div className={styles.highlightCards}> 
                <Highlights></Highlights>
            </div>
        </div>
    )
}

export default HighlightedProdContainer;