import * as React from 'react';
import style from './Panel.module.styl';
import {PanelProps} from './types';
import Loader from '../Loader';

const Panel = ({children, isLoading, title}: PanelProps): JSX.Element => {
	return (
		<div className={style.panel}>
			<Loader isLoading={isLoading}>
				<div className={style.panel__header}> {title} </div>
				{children}
			</Loader>
		</div>
	);
};

export default Panel;
