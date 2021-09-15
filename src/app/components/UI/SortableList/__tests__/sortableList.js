import React from 'react';
import {render, screen} from '@testing-library/react';
import SortableList from '../index';

const listInfoItems = [
	{header: 'test1', cell: 'test1', format: null, sort: 'asc'},
	{header: 'test2', cell: 'test2', format: null, sort: 'asc'},
];
const items = [
	{test1: 'abc', test3: 'cde'},
	{test1: 'ijk', test3: 'klm => Royal dutch airlines'},
];

describe('sortable list', () => {
	it('renders header items', () => {
		render(
			<SortableList
				listInfoItems={listInfoItems}
				items={items}
				history={jest.fn()}
				location={jest.fn()}
				match={jest.fn()}
				title=""
			/>
		);
		screen.getByText('test1');
		screen.getByText('test2');
	});

	it('renders body items', () => {
		render(
			<SortableList
				listInfoItems={listInfoItems}
				items={items}
				history={jest.fn()}
				location={jest.fn()}
				match={jest.fn()}
				title=""
			/>
		);
		screen.getByText('abc');
		screen.getByText('ijk');
		const unrenderedItem = screen.queryByText('klm => Royal dutch airlines');
		expect(unrenderedItem).toBe(null);
	});
});
