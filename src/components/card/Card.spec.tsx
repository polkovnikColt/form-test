import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Card } from './Card';

let card: HTMLElement;

beforeEach(() => {
	const { getByText } = render(<Card>card</Card>);
	card = getByText(/card/i);
});

afterEach(() => {
	cleanup();
});

describe('testing card', () => {
	it('should render card', () => {
		expect(card).toBeInTheDocument();
	});
});
