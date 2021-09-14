import React from 'react';
import Navbar from '../index';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {wait} from '@testing-library/user-event/dist/utils';

describe('navbar', () => {
	it('renders the right title for the navbar', () => {
		render(<Navbar />);
		screen.getByTestId('logo');
	});

	it('triggers go back function when click on back button', () => {
		render(<Navbar />);
		userEvent.click(screen.getByTestId('logo'));
		wait(() => expect(screen.getByText(/regions/i)).toBeInTheDocument());
	});
});
