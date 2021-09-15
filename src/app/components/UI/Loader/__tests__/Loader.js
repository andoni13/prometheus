import React from 'react';
import {render, screen} from '@testing-library/react';
import Loader from '../index';

describe('Loader component', () => {
	test('doesnt render Loader component if isLoading prop is false', () => {
		render(<Loader isLoading={false} />);
		expect(screen.queryByTestId('loader-overlay')).toBeNull();
		expect(screen.queryByTestId('loader-wrapper')).toBeNull();
		expect(screen.queryByTestId('loader')).toBeNull();
	});
	test('doesnt render Loader component but renders children', () => {
		render(
			<Loader isLoading={false}>
				<span>test</span>
			</Loader>
		);
		expect(screen.queryByTestId('loader-overlay')).toBeNull();
		expect(screen.queryByTestId('loader-wrapper')).toBeNull();
		expect(screen.queryByTestId('loader')).toBeNull();
		screen.getByText(/test/i);
	});
	test('renders Loader component if isLoading prop is true', () => {
		render(<Loader isLoading={true} />);
		screen.getByTestId('loader-overlay');
		screen.getByTestId('loader-wrapper');
		screen.getByTestId('loader');
	});
	test('renders Loader component with children', () => {
		render(
			<Loader isLoading={true}>
				<span>test</span>
			</Loader>
		);
		screen.getByTestId('loader-overlay');
		screen.getByTestId('loader-wrapper');
		screen.getByTestId('loader');
		screen.getByText(/test/i);
	});
});
