import React from "react";
import { WrapperArrow, Delete, Search, Arrow } from "./styles";

const Icons = ({ handleClickClose, choice, isOpen, handleArrow }) => {
	return (
		<>
			<Delete
				onClick={() => handleClickClose()}
				visible={choice}
				open={isOpen}
			></Delete>
			<WrapperArrow
				tabIndex={1}
				onClick={() => {
					handleArrow();
				}}
				className="notBlur"
			>
				<Arrow src="/arrow.png" open={isOpen}></Arrow>
			</WrapperArrow>
			<Search open={isOpen}></Search>
		</>
	);
};

export default Icons;
