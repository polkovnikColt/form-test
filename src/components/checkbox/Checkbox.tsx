import React, { ChangeEvent } from 'react';

type CheckboxProps = {
	label?: string;
	name: string;
	value?: boolean;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
	label,
	name,
	handleChange,
	className = '',
	value,
}) => {
	return (
		<label className={`container ${className}`}>
			{label}
			<input
				type="checkbox"
				name={name}
				onChange={handleChange}
				checked={value}
			/>
			<span className="checkmark" />
		</label>
	);
};
