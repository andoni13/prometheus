import * as React from 'react';
import {FlagProps} from './types';
import style from './Flag.module.styl';

const Flag = ({name, url}: FlagProps): JSX.Element => {
	return (
		<figure className={style.flag}>
			<img src={url} alt={name} />
		</figure>
	);
};

export default Flag;
