import React from 'react';
import { act, cleanup, render, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

let checkbox: HTMLInputElement;
const handleChange = jest.fn();

beforeEach(() => {
	const { getByLabelText } = render(
		<Checkbox name="checkbox" handleChange={handleChange} label="checkbox" />,
	);
	checkbox = getByLabelText(/checkbox/i) as HTMLInputElement;
});

afterEach(() => {
	cleanup();
});

describe('testing checkbox', () => {
	it('should have been in the document', () => {
		expect(checkbox).toBeInTheDocument();
	});

	it('should handle click', async () => {
		expect(checkbox.checked).toEqual(false);
		await act(async () => {
			await fireEvent.click(checkbox);
		});
		expect(checkbox.checked).toEqual(true);
	});
});
