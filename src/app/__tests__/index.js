import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../index';
import {MemoryRouter} from 'react-router';
import userEvent from '@testing-library/user-event';
import {wait} from '@testing-library/user-event/dist/utils';

describe('register employee app', () => {
	it('renders world regions buttons', () => {
		render(<App />);
		const buttons = screen.getAllByRole(/button/i);
		expect(buttons).toHaveLength(5);
		screen.getByText(/americas/i);
		screen.getByText(/africa/i);
		screen.getByText(/asia/i);
		screen.getByText(/europe/i);
		screen.getByText(/oceania/i);
	});

	it('navigates back and forth to different countries list page', () => {
		render(<App />, {wrapper: MemoryRouter});
		expect(screen.getByText(/regions/i)).toBeInTheDocument();

		userEvent.click(screen.getByText(/americas/i));
		expect(screen.getByText(/americas/i)).toBeInTheDocument();

		window.history.pushState({}, 'Regions', '/');
	});

	it('navigates to africa countries list page', () => {
		render(<App />, {wrapper: MemoryRouter});
		expect(screen.getByText(/regions/i)).toBeInTheDocument();

		userEvent.click(screen.getByText(/africa/i));
		expect(screen.getByText(/africa/i)).toBeInTheDocument();

		window.history.pushState({}, 'Regions', '/');
	});

	it('navigates to asia countries list page', () => {
		render(<App />, {wrapper: MemoryRouter});
		expect(screen.getByText(/regions/i)).toBeInTheDocument();

		userEvent.click(screen.getByText(/asia/i));
		expect(screen.getByText(/asia/i)).toBeInTheDocument();

		window.history.pushState({}, 'Regions', '/');
	});

	it('navigates to europe countries list page', () => {
		render(<App />, {wrapper: MemoryRouter});
		expect(screen.getByText(/regions/i)).toBeInTheDocument();

		userEvent.click(screen.getByText(/europe/i));
		expect(screen.getByText(/europe/i)).toBeInTheDocument();

		window.history.pushState({}, 'Regions', '/');
	});

	it('navigates to oceania countries list page', () => {
		render(<App />, {wrapper: MemoryRouter});
		expect(screen.getByText(/regions/i)).toBeInTheDocument();

		userEvent.click(screen.getByText(/oceania/i));
		expect(screen.getByText(/oceania/i)).toBeInTheDocument();
	});

	it('navigates back to regions selector page from countries list page', () => {
		render(<App />, {wrapper: MemoryRouter});
		userEvent.click(screen.getByTestId('back'));

		wait(() => expect(screen.getByText(/regions/i)).toBeInTheDocument());
	});
});
