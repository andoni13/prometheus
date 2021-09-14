import * as React from 'react';
import {withRouter} from 'react-router';
import Button from '../UI/Button';
import Panel from '../UI/Panel';
import {regions} from './regions';
import style from './RegionSelector.module.styl';
import {RegionSelectorProps} from 'app/components/RegionSelector/types';

const RegionSelector = ({history}: RegionSelectorProps): JSX.Element => {
	const handleRegion = (e: React.MouseEvent<HTMLButtonElement>): void => {
		history.push(`/countries?region=${e.currentTarget.id}`);
	};

	const renderRegions = (region: string): JSX.Element => {
		return (
			<div className={style.selector} key={region.toLowerCase()}>
				<Button
					content={region}
					handleClick={handleRegion}
					id={region.toLowerCase()}
					isLoading={false}
				/>
			</div>
		);
	};

	return <Panel title="Regions">{regions.map(renderRegions)}</Panel>;
};

export default withRouter(RegionSelector);
