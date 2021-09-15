type ListItem = {
	header: string;
	cell: string;
	format: string | null;
};

type SortableListProps = {
	items?: string[];
	listItems?: ListItem[];
	title: string | null;
};

export {ListItem, SortableListProps};
