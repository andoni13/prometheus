import * as React from 'react';
import style from './Button.module.styl';
import {ButtonProps} from './types';

const Button = ({
	content,
	handleClick,
	id,
	isLoading,
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={style.btn}
			disabled={isLoading}
			id={id}
			onClick={handleClick}
			role="button">
			{content}
		</button>
	);
};

export default Button;
