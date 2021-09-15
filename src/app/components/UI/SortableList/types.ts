import {RouteComponentProps} from 'react-router-dom';

type ListItem = {
	header: string;
	cell: string;
	format: string | null;
	sort: string | null;
};

type SortTableHeaderProps = {
	handleSort: (index: string) => any;
	listInfoItems?: ListItem[];
	sort: SortObject;
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
	[s: string]: any;
};

type SortIconsProps = {
	dir?: string | null;
	isActive?: boolean;
};

export {
	ListItem,
	SortIconsProps,
	SortObject,
	SortTableHeaderProps,
	SortableListProps,
	SortTableBodyProps,
};
