import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';
import style from './SortableList.module.styl';
import {SortIconsProps} from './types';

const SortIcons = ({dir, isActive}: SortIconsProps): JSX.Element | null => {
	if (!isActive) return null;

	if (dir) {
		return (
			<div
				className={dir === 'asc' ? style.sort__iconAsc : style.sort__iconDsc}>
				<FontAwesomeIcon icon={dir === 'asc' ? faSortUp : faSortDown} />
			</div>
		);
	}

	return (
		<div className={style.sort__icons}>
			<FontAwesomeIcon icon={faSortUp} />
			<FontAwesomeIcon icon={faSortDown} />
		</div>
	);
};

export default SortIcons;
