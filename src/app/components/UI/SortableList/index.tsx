import * as React from 'react';
import Panel from 'app/components/UI/Panel';
import {ListItem, SortableListProps} from './types';
import style from './SortableList.module.styl';
import {ITEM_FORMAT_NUMBER} from 'app/views/CountriesList/constants';

const SortableList = ({
	items = [],
	listItems = [],
	title = '',
}: SortableListProps): JSX.Element => {
	const renderHeader = (item: ListItem) => {
		return <div className={style.list__cellHeader}>{item.header}</div>;
	};

	const renderCells = (item: ListItem, row: any) => {
		if (item.format === ITEM_FORMAT_NUMBER) {
			return (
				<span className={style.list__cell}>
					{new Intl.NumberFormat('en-US').format(row[item.cell])}
				</span>
			);
		}
		return <span className={style.list__cell}>{row[item.cell]}</span>;
	};

	const renderBody = (row: any) => {
		return (
			<div className={style.list__row}>
				{listItems.map(item => renderCells(item, row))}
			</div>
		);
	};

	return (
		<Panel title={title}>
			<div className={style.list__header}>{listItems.map(renderHeader)}</div>
			<div className={style.list__rows}>{items.map(renderBody)}</div>
		</Panel>
	);
};

export default SortableList;
