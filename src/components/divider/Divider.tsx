import React from 'react';

type DividerProps = {
	text?: string;
};

export const Divider: React.FC<DividerProps> = ({ text }) => (
	<div className="divider">{text}</div>
);
