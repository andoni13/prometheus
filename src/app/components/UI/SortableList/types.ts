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
	sort: {[s: string]: any};
};

type SortTableBodyProps = {
	handleRow: (isOpen: boolean, data: any) => any;
	listItems?: string[];
	listInfoItems?: ListItem[];
};

type PropTypes = {
	items?: string[];
	handleRow: (isOpen: boolean, data: any) => any;
	listInfoItems?: ListItem[];
	title: string | null;
};

type SortableListProps = RouteComponentProps<any> & PropTypes;

type SortIconsProps = {
	dir?: string | null;
	isActive?: boolean;
};

export {
	ListItem,
	SortIconsProps,
	SortTableHeaderProps,
	SortableListProps,
	SortTableBodyProps,
};
