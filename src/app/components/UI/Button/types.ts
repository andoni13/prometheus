import * as React from 'react';

type ButtonProps = {
	content: string;
	handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	id: string;
	isLoading: boolean;
};

export {ButtonProps};
