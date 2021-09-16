import React from 'react';

type ModalProps = {
	children: React.ReactNode;
	handleClose: () => void;
	isOpen: boolean;
	title: string | React.ReactNode;
};

export {ModalProps};
