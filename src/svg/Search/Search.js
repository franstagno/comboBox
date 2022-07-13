import React from "react";

const Search = (props) => {
	return (
		<svg
			width={24}
			height={24}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="m19.89 19.05-4.03-4.03a.386.386 0 0 0-.27-.11h-.32A6.49 6.49 0 0 0 17 10.5a6.5 6.5 0 1 0-6.5 6.5c1.7 0 3.25-.66 4.41-1.72v.32c0 .1.04.19.11.27l4.03 4.03c.15.15.38.15.53 0l.31-.31a.38.38 0 0 0 0-.54ZM10.5 16C7.46 16 5 13.54 5 10.5S7.46 5 10.5 5 16 7.46 16 10.5 13.54 16 10.5 16Z"
				fill="#000"
			/>
		</svg>
	);
};

export default Search;
