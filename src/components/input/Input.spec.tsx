import React from 'react';
import { cleanup, render, act, fireEvent } from '@testing-library/react';
import { Input } from './Input';

let input: HTMLElement;
const handleChange = jest.fn();

beforeEach(() => {
	const { getByPlaceholderText } = render(
		<Input
			type="text"
			name="input"
			error=""
			placeholder="Input"
			onChange={handleChange}
		/>,
	);
	input = getByPlaceholderText(/input/i);
});

afterEach(() => {
	cleanup();
});

describe('testing input', () => {
	it('should have been in the document', () => {
		expect(input).toBeInTheDocument();
	});

	it('should have right type', () => {
		expect(input.getAttribute('type')).toBe('text');
	});

	it('should have an error', () => {
		cleanup();
		const { getByPlaceholderText } = render(
			<Input
				type="text"
				name="input"
				placeholder="Input"
				error="error"
				onChange={handleChange}
			/>,
		);
		const inputError = getByPlaceholderText(/input/i);
		expect(inputError).toHaveClass('input-error');
	});

	it('should handle change', async () => {
		await act(async () => {
			await fireEvent.change(input, { target: { value: 'input' } });
		});
		expect(input).toHaveValue('input');
	});
});
