import * as React from 'react';
import {createPortal} from 'react-dom';
import {ModalProps} from './types';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SyntheticEvent} from 'react';
import style from './Modal.module.styl';

const node = document.getElementById('modal-root') as Element;

const Modal = ({
	children,
	handleClose,
	isOpen,
	title,
}: ModalProps): JSX.Element | null => {
	if (!isOpen) return null;

	const handlePropagation = (event: SyntheticEvent) => event.stopPropagation();

	const wrapper = (
		<div className={style.modal__overlay} onClick={handleClose}>
			<div className={style.modal__container} onClick={handlePropagation}>
				<div className={style.modal__header}>
					{title}
					<FontAwesomeIcon
						icon={faTimes}
						className={style.modal__headerClose}
						onClick={handleClose}
					/>
				</div>
				<div className={style.modal__body}>{children}</div>
			</div>
		</div>
	);

	return createPortal(wrapper, node);
};

export default Modal;
