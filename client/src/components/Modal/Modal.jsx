import { handleCloseClick } from './ModalLogic';
import './modal.css';

const Modal = ({ children, isOpen, closeModal }) => {
	return (
		<div className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
			<div className='modal-container' onClick={handleCloseClick}>
				<div className='modal-close'>
					<button onClick={closeModal}>X</button>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Modal;
