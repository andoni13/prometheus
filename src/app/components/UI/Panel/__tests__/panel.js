import React from 'react';
import {render, screen} from '@testing-library/react';
import Panel from '../index';

describe('Panel UI Component', () => {
	it('renders title, loader and children when isLoading prop true', () => {
		render(
			<Panel isLoading={true} title="panel">
				<span>test</span>
			</Panel>
		);
		screen.getByTestId('loader');
		screen.getByText('test');
		screen.getByText('panel');
	});

	it('renders children component and title when isLoading prop false', () => {
		render(
			<Panel isLoading={false} title="panel">
				<span>test</span>
			</Panel>
		);
		screen.getByText('test');
		screen.getByText('panel');
		const loader = screen.queryByTestId('loader');
		expect(loader).toBe(null);
	});
});
