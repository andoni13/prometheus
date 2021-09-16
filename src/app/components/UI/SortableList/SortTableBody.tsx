import * as React from 'react';
import style from './SortableList.module.styl';
import {ListItem, SortTableBodyProps} from './types';
import {ITEM_FORMAT_NUMBER} from '../../../views/CountriesList/constants';

const SortTableBody = ({
	handleRow,
	listItems,
	listInfoItems,
}: SortTableBodyProps): JSX.Element => {
	const renderCells = (item: ListItem, row: any) => {
		if (item.format === ITEM_FORMAT_NUMBER) {
			return (
				<span className={style.list__cell} key={item.cell}>
					{new Intl.NumberFormat('en-US').format(row[item.cell])}
				</span>
			);
		}
		return (
			<span className={style.list__cell} key={item.cell}>
				{row[item.cell]}
			</span>
		);
	};

	const renderBody = (row: any, index: number) => {
		return (
			<div
				className={style.list__row}
				key={index}
				onClick={handleRow && handleRow(true, row)}>
				{listInfoItems?.map(item => renderCells(item, row))}
			</div>
		);
	};

	return <div className={style.list__rows}>{listItems?.map(renderBody)}</div>;
};

export default SortTableBody;
