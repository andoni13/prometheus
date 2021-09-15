import {RouteComponentProps} from 'react-router-dom';

type ListItem = {
	header: string;
	cell: string;
	format: string | null;
	sort: string;
};

type SortTableHeaderProps = {
	handleSort: (index: string) => any;
	listInfoItems?: ListItem[];
};

type SortTableBodyProps = {
	listItems?: string[];
	listInfoItems?: ListItem[];
};

type PropTypes = {
	items?: string[];
	listInfoItems?: ListItem[];
	title: string | null;
};

type SortableListProps = RouteComponentProps<any> & PropTypes;

type SortObject = {
	[s: string]: string;
};

export {
	ListItem,
	SortObject,
	SortTableHeaderProps,
	SortableListProps,
	SortTableBodyProps,
};
