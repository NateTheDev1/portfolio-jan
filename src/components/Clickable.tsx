import React from 'react';

const Clickable = ({
	children,
	toPath
}: {
	children: JSX.Element[] | JSX.Element;
	toPath: string;
}) => {
	return (
		<a style={{ textDecoration: 'none' }} href={toPath} target="_none">
			{children}
		</a>
	);
};

export default Clickable;
