import style from './CountryDetail.module.styl';
import * as React from 'react';
import {CountryDetailListProps} from './types';

const CountryDetailList = ({
	children,
	title,
}: CountryDetailListProps): JSX.Element => {
	return (
		<div className={style.modal__bodySection}>
			<div className={style.modal__bodySectionTitle}>{title}</div>
			<ul className={style.modal__bodySectionContent}>{children}</ul>
		</div>
	);
};

export default CountryDetailList;
