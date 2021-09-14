import * as React from 'react';
import style from './Panel.module.styl';
import {PanelProps} from 'app/components/UI/Panel/types';

const Panel = ({children, title}: PanelProps): JSX.Element => {
	const header = <div className={style.panel__header}> {title} </div>;

	return (
		<div className={style.panel}>
			{header}
			{children}
		</div>
	);
};

export default Panel;
