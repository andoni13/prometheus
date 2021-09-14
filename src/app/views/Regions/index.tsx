import * as React from 'react';
import RegionSelector from '../../components/RegionSelector';
import style from './Regions.module.styl';
import {Router} from '../../types/router';

const Regions = ({history}: Router): JSX.Element => {
	return (
		<div className={style.wrapper}>
			<RegionSelector history={history} />
		</div>
	);
};

export default Regions;
