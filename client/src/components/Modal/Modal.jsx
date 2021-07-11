import { handleCloseClick } from './ModalLogic';
import styles from './Modal.module.css';

const Modal = ({ children, isOpen, closeModal }) => {
	return (
		<div
			className={`${styles.modal} ${isOpen && styles.isOpen}`}
			onClick={closeModal}
		>
			<div className={styles.modalContainer} onClick={handleCloseClick}>
				<div className={styles.modalClose}>
					<button onClick={closeModal}>X</button>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Modal;
