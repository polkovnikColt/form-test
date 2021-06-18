import React from 'react';

type InputProps = {
	type: 'text' | 'number' | 'password';
	name: string;
	value?: string;
	label?: string;
	error: string;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
};

export const Input: React.FC<InputProps> = ({
	type,
	value,
	name,
	label,
	error,
	onChange,
	placeholder,
	className = '',
}) => {
	return (
		<div>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				className={`input w-100 ${error && 'input-error'} ${className}`}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{error && <div className="text-right error">{error}</div>}
		</div>
	);
};
