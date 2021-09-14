import * as React from 'react';
import RegionSelector from '../../components/RegionSelector';
import style from './Regions.module.styl';

const Regions = (): JSX.Element => {
	return (
		<div className={style.wrapper}>
			<RegionSelector />
		</div>
	);
};

export default Regions;
