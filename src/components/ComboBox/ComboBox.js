import React, { useRef, useState, useEffect } from "react";
import Icons from "./components/Icons";
import { Wrapper, Select, Input, Option, Info, Choice, Text } from "./styles";
import { filterByName, mustBeRemovedBlur } from "./utils";

const ComboBox = ({
	choice,
	setChoice,
	choices,
	placeholder = "Select an item",
}) => {
	const input = useRef(null);
	const select = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const [isArrowDown, setIsArrowDow] = useState(false);
	const [options, setOptions] = useState({
		all: choices,
		filtered: choices,
	});

	const handleOpen = () => {
		setIsOpen(false);
		setIsArrowDow(false);
	};

	const handleBlur = (e) => {
		const canRemoveBlur = mustBeRemovedBlur(e);
		if (canRemoveBlur) {
			handleOpen();
		}
	};

	const handleChangeInput = (e) => {
		if (e.target.value.length <= 2) {
			setOptions({ ...options, filtered: options.all });
			return;
		}
		const filtered = filterByName(options.all, e.target.value);
		setOptions({ ...options, filtered });
	};

	const handleChangeSelect = (e) => {
		setOptions({ ...options, filtered: options.all });
		setChoice(e.target.value);
		handleOpen();
		input.current.value = "";
	};

	const handleClickClose = () => {
		setChoice("");
		select.current.value = "";
	};

	const handleArrow = () => {
		if (!isArrowDown) {
			input.current.click();
			input.current.focus();
			setIsArrowDow(true);
		} else {
			handleOpen();
		}
	};

	useEffect(() => {
		if (isOpen) setIsArrowDow(true);
	}, [isOpen]);

	return (
		<Wrapper>
			<Input
				ref={input}
				type="text"
				placeholder={placeholder}
				onClick={() => setIsOpen(!isOpen)}
				onBlur={handleBlur}
				onChange={handleChangeInput}
				open={isOpen}
				tabIndex="1"
				className="notBlur"
			></Input>
			<Icons
				handleClickClose={handleClickClose}
				choice={choice}
				isOpen={isOpen}
				handleArrow={handleArrow}
			></Icons>
			<Info
				visible={choice}
				tabIndex="1"
				onBlur={handleBlur}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				className="notBlur"
			>
				<Text open={isOpen}>{placeholder}</Text>
				<Choice>{choice}</Choice>
			</Info>
			<Select
				size="4"
				open={isOpen}
				onChange={handleChangeSelect}
				ref={select}
				className="notBlur"
			>
				{options &&
					options.filtered.map((option, idx) => (
						<Option
							key={idx}
							value={option}
							data-testid={"testOption"}
						>
							{option}
						</Option>
					))}
			</Select>
		</Wrapper>
	);
};

export default ComboBox;
