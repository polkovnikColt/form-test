import React from 'react';
import { Link } from 'react-router-dom';

type LabelProps = {
	isLink?: boolean;
	path?: string;
	size: 'small' | 'medium';
	className?: string;
};

export const Label: React.FC<LabelProps> = ({
	isLink = false,
	children,
	path = '',
	size,
	className = '',
}) => {
	return (
		<div className={`label ${className}`}>
			{isLink ? (
				<Link className={`label-link label-${size}`} to={path}>
					{children}
				</Link>
			) : (
				<span className={`label-common label-${size}`}> {children} </span>
			)}
		</div>
	);
};
