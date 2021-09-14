import React from 'react';
import 'whatwg-fetch';
import {render, screen} from '@testing-library/react';
import RegionSelector from '../index';
import {MemoryRouter} from 'react-router';
import userEvent from '@testing-library/user-event';

const historyMock = {push: jest.fn()};

describe('region selector', () => {
	it('renders world regions buttons', () => {
		render(<RegionSelector history={window.history} />);
		const buttons = screen.getAllByRole(/button/i);
		expect(buttons).toHaveLength(5);
		screen.getByText(/americas/i);
		screen.getByText(/africa/i);
		screen.getByText(/asia/i);
		screen.getByText(/europe/i);
		screen.getByText(/oceania/i);
	});

	it('navigates back and forth to different countries list page', () => {
		render(<RegionSelector history={historyMock} />, {
			wrapper: MemoryRouter,
		});
		expect(screen.getByText(/regions/i)).toBeInTheDocument();

		userEvent.click(screen.getByText(/americas/i));
		expect(screen.getByText(/americas/i)).toBeInTheDocument();
	});

	it('navigates to africa countries list page', () => {
		render(<RegionSelector history={historyMock} />, {
			wrapper: MemoryRouter,
		});
		expect(screen.getByText(/regions/i)).toBeInTheDocument();

		userEvent.click(screen.getByText(/africa/i));
		expect(screen.getByText(/africa/i)).toBeInTheDocument();
	});

	it('navigates to asia countries list page', () => {
		render(<RegionSelector history={historyMock} />, {wrapper: MemoryRouter});
		expect(screen.getByText(/regions/i)).toBeInTheDocument();

		userEvent.click(screen.getByText(/asia/i));
		expect(screen.getByText(/asia/i)).toBeInTheDocument();
	});

	it('navigates to europe countries list page', () => {
		render(<RegionSelector history={historyMock} />, {wrapper: MemoryRouter});
		expect(screen.getByText(/regions/i)).toBeInTheDocument();

		userEvent.click(screen.getByText(/europe/i));
		expect(screen.getByText(/europe/i)).toBeInTheDocument();
	});

	it('navigates to oceania countries list page', () => {
		render(<RegionSelector history={historyMock} />, {wrapper: MemoryRouter});
		expect(screen.getByText(/regions/i)).toBeInTheDocument();

		userEvent.click(screen.getByText(/oceania/i));
		expect(screen.getByText(/oceania/i)).toBeInTheDocument();
	});
});
