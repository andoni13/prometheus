import React from 'react';
import {LoaderProps} from './types';
import style from './Loader.module.styl';

const Loader = ({children, isLoading}: LoaderProps): JSX.Element => {
	if (!isLoading) return <>{children}</>;

	return (
		<div className={style.overlay} data-testid="loader-overlay">
			{children}
			<span className={style.wrapper} data-testid="loader-wrapper">
				<div className={style.loader} data-testid="loader">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</span>
		</div>
	);
};

export default Loader;
