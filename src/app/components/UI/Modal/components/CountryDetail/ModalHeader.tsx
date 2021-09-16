import * as React from 'react';
import {CountryDetailHeaderProps} from './types';
import Flag from '../../../../UI/Flag';
import style from './CountryDetail.module.styl';

const ModalHeader = ({name, url}: CountryDetailHeaderProps): JSX.Element => {
	return (
		<div className={style.modal__header}>
			<Flag name={name} url={url} />
			<div className={style.modal__content}>{name}</div>
		</div>
	);
};

export default ModalHeader;
