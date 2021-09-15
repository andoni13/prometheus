import * as React from 'react';
import Panel from '../Panel';
import {SortObject, SortableListProps} from './types';
import {getQueryParam, updateQueryParams} from '../../../services/utils/url';
import SortTableBody from './SortTableBody';
import SortTableHeader from './SortTableHeader';
import {sortASC, sortDSC} from '../../../services/utils/arrays';

const SortableList = ({
	history,
	location,
	items = [],
	listInfoItems = [],
	title = '',
}: SortableListProps): JSX.Element | null => {
	const initialSortState: SortObject = {};
	const initialSortedItems: any = [];
	const [sort, setSort] = React.useState(initialSortState);
	const [sortedItems, setSortedItems] = React.useState(initialSortedItems);

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
			setSort({...sort, [sortBy]: sortDir});
		}
	};

	const handleSort = (index: string) => () => {
		const newSort = sort[index] === 'asc' ? 'dsc' : 'asc';
		const updatedParams = updateQueryParams('sort', `${index}:${newSort}`);
		history.push({search: `?${updatedParams}`});
	};

	React.useEffect(sortItems, [location, items]);
	React.useEffect(setInitialSortValues, []);

	const listItems = !sortedItems.length ? items : sortedItems;

	return (
		<Panel isLoading={!listItems || !listItems.length} title={title}>
			<SortTableHeader handleSort={handleSort} listInfoItems={listInfoItems} />
			<SortTableBody listItems={listItems} listInfoItems={listInfoItems} />
		</Panel>
	);
};

export default SortableList;
