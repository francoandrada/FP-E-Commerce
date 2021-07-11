import { handleCloseClick } from './ModalLogic';
import styles from './Modal.module.css';

const Modal = ({ children, isOpen, closeModal }) => {
	return (
		<div
			className={`${styles.modalEcommerce} ${isOpen && styles.isOpenEcommerce}`}
			onClick={closeModal}
		>
			<div
				className={styles.modalContainerEcommerce}
				onClick={handleCloseClick}
			>
				<div className={styles.modalCloseEcommerce}>
					<button className={styles.btnModalEcommerce} onClick={closeModal}>
						X
					</button>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Modal;
