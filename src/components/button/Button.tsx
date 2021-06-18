import React from 'react';

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset';
	buttonStyle?: 'common' | 'icon';
	icon?: string;
	className?: string;
	onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
	type,
	children,
	buttonStyle = 'common',
	icon,
	onClick,
	className = '',
}) => {
	return (
		<button
			type={type}
			className={`${buttonStyle} ${className}`}
			onClick={onClick}
		>
			{icon && <img src={icon} alt="icon" className="button-icon" />}
			{children}
		</button>
	);
};
