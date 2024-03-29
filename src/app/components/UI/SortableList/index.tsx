import * as React from 'react';
import Panel from '../Panel';
import {SortableListProps} from './types';
import {getQueryParam, updateQueryParams} from '../../../services/utils/url';
import SortTableBody from './SortTableBody';
import SortTableHeader from './SortTableHeader';
import {sortASC, sortDSC} from '../../../services/utils/arrays';

const SortableList = ({
	history,
	location,
	items = [],
	handleRow,
	listInfoItems = [],
	title = '',
}: SortableListProps): JSX.Element | null => {
	const [sort, setSort] = React.useState({} as any);
	const [sortedItems, setSortedItems] = React.useState([] as any);

	const setInitialSortValues = () => {
		const initialValues = listInfoItems.reduce((acc, item) => {
			return {...acc, [item.cell]: item.sort};
		}, {});
		setSort(initialValues);
	};

	const sortListItems = (sortBy: string, sortDir: string): string[] => {
		return sortDir === 'dsc' ? sortDSC(items, sortBy) : sortASC(items, sortBy);
	};

	const sortItems = () => {
		const index = getQueryParam('sort');
		if (items && items.length && index) {
			const [sortBy, sortDir] = index.split(':');
			const sortedItems = sortListItems(sortBy, sortDir);
			setSortedItems(sortedItems);
			setSort({...sort, [sortBy]: sortDir, activeColumn: sortBy});
		}
	};

	const handleSort = (index: string) => () => {
		const newSort = sort[index] === 'asc' || !sort[index] ? 'dsc' : 'asc';
		const updatedParams = updateQueryParams('sort', `${index}:${newSort}`);
		history.push({search: `?${updatedParams}`});
	};

	React.useEffect(sortItems, [location, items]);
	React.useEffect(setInitialSortValues, []);

	const listItems = !sortedItems.length ? items : sortedItems;

	return (
		<Panel isLoading={!listItems || !listItems.length} title={title}>
			<SortTableHeader
				handleSort={handleSort}
				listInfoItems={listInfoItems}
				sort={sort}
			/>
			<SortTableBody
				listItems={listItems}
				listInfoItems={listInfoItems}
				handleRow={handleRow}
			/>
		</Panel>
	);
};

export default SortableList;
