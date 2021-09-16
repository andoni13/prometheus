import style from './CountryDetail.module.styl';
import * as React from 'react';
import {CountryDetailListProps} from './types';

const CountryDetailItem = ({
	children,
	title,
}: CountryDetailListProps): JSX.Element | null => {
	return (
		<li className={style.modal__bodyList}>
			<div className={style.modal__bodyItemTitle}>{title}</div>
			<div className={style.modal__bodyItemContent}>{children}</div>
		</li>
	);
};

export default CountryDetailItem;
