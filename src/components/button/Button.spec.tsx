import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Button } from './Button';
import googleIcon from '../../assets/google.svg';

const handleClick = jest.fn();
let button: HTMLElement;
let commonButton: HTMLElement;

beforeEach(() => {
	const { getByRole } = render(
		<Button
			buttonStyle="icon"
			type="submit"
			onClick={handleClick}
			className="class"
			icon={googleIcon}
		>
			Button
		</Button>,
	);
	button = getByRole('button');
});

afterEach(() => {
	cleanup();
});

describe('testing button props', () => {
	it('should have been in the document', () => {
		expect(button).toBeInTheDocument();
	});

	it('should have right props', () => {
		expect(button.getAttribute('type')).toBe('submit');
	});

	it('should have right class', () => {
		expect(button).toHaveClass('class');
		expect(button).toHaveClass('icon');
	});

	it('should have default class', () => {
		cleanup();
		const { getByRole } = render(<Button type="button">Common</Button>);
		commonButton = getByRole('button');
		expect(commonButton).toHaveClass('common');
	});

	it('should have icon', () => {
		const image = document.querySelector('.button-icon');
		expect(image).toBeInTheDocument();
	});

	it('should handle click', () => {
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
