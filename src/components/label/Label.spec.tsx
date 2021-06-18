import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Label } from './Label';

let label: HTMLElement;

beforeEach(() => {
	const { getByText } = render(<Label size="small">label</Label>);
	label = getByText(/label/i);
});

afterEach(() => {
	cleanup();
});

describe('testing label', () => {
	it('should have been in the document', () => {
		expect(label).toBeInTheDocument();
	});

	it('should have type small', () => {
		expect(label).toHaveClass('label-small');
	});
});
