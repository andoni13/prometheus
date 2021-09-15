import * as React from 'react';
import style from './SortableList.module.styl';
import {ListItem, SortTableHeaderProps} from './types';

const SortTableHeader = ({
	listInfoItems,
	handleSort,
}: SortTableHeaderProps): JSX.Element => {
	const renderHeader = (item: ListItem) => {
		return (
			<div
				className={style.list__cellHeader}
				onClick={handleSort(item.cell)}
				key={item.cell}>
				{item.header}
			</div>
		);
	};

	return (
		<div className={style.list__header}>{listInfoItems?.map(renderHeader)}</div>
	);
};

export default SortTableHeader;
