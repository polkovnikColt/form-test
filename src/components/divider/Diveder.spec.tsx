import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Divider } from './Divider';

let divider: HTMLElement;

beforeEach(() => {
	const { getByText } = render(<Divider text="or" />);
	divider = getByText(/or/i);
});

afterEach(() => {
	cleanup();
});

describe('testing divider', () => {
	it('should render divider', () => {
		expect(divider).toBeInTheDocument();
	});
});
