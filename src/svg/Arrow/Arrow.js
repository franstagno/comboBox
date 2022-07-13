import React from "react";

const Arrow = (props) => {
	return (
		<svg
			width={10}
			height={6}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M5.266.153 9.89 4.74a.375.375 0 0 1 0 .531l-.619.619a.375.375 0 0 1-.531 0L5 2.187 1.26 5.89a.375.375 0 0 1-.531 0L.11 5.27a.375.375 0 0 1 0-.531L4.734.153a.375.375 0 0 1 .532 0Z"
				fill="#30588D"
			/>
		</svg>
	);
};

export default Arrow;
