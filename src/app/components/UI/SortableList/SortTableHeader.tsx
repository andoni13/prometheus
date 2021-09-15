import * as React from 'react';
import style from './SortableList.module.styl';
import {ListItem, SortTableHeaderProps} from './types';
import SortIcons from './SortIcons';

const SortTableHeader = ({
	listInfoItems,
	handleSort,
	sort,
}: SortTableHeaderProps): JSX.Element => {
	const renderHeader = (item: ListItem) => {
		return (
			<div
				className={style.list__cellHeader}
				onClick={handleSort(item.cell)}
				key={item.cell}>
				{item.header}
				<SortIcons
					dir={sort[item.cell]}
					isActive={!sort.activeColumn || sort.activeColumn === item.cell}
				/>
			</div>
		);
	};

	return (
		<div className={style.list__header}>{listInfoItems?.map(renderHeader)}</div>
	);
};

export default SortTableHeader;
