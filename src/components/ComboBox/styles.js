import styled from "styled-components";

const Wrapper = styled.div`
	width: 240px;
	position: relative;
`;

const Input = styled.input`
	width: 100%;
	height: 50px;
	z-index: 10;
	font-size: 15px;
	border: 2px solid;
	border-radius: 6px;
	border-color: ${(props) => (props.open ? "#30588D" : "#747474")};
	padding-left: ${(props) => (props.open ? "30px" : "5px")};
	cursor: pointer;
	&::placeholder {
		color: #747474;
	}
`;

const Select = styled.select`
	width: 240px;
	position: absolute;
	top: 53px;
	left: 0;
	display: ${(props) => (props.open ? "block" : "none")};
	border: none;
	box-shadow: 0 24px 24px hsla(0, 0%, 0%, 0.2);
	padding-top: 10px;
	&::-webkit-scrollbar {
		width: 12px;
		background-color: white;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #e9e9e9;
	}
`;

const Option = styled.option`
	font-size: 20px;
	color: #747474;
	padding: 10px 10px 10px 20px;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 100%;
	text-transform: lowercase;
	&:first-letter {
		text-transform: uppercase;
	}
	&:hover {
		background-color: #d6d6d6;
	}
	&:checked {
		background: none;
		border-left: 5px solid #30588d;
		padding: 10px 10px 10px 15px;
		color: #30588d;
	}
`;

const Choice = styled.p`
	color: black;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 100%;
	white-space: nowrap;
`;

const Info = styled.div`
	display: ${(props) => (props.visible ? "flex" : "none")};
	flex-direction: column;
	position: absolute;
	left: 3px;
	top: 4px;
	background: white;
	width: 190px;
	text-transform: capitalize;
	height: 43px;
	align-items: start;
	width: 175px;
	justify-content: center;
	cursor: pointer;
	padding-left: 5px;
	&:first-letter {
		text-transform: uppercase;
	}
`;

const Text = styled.p`
	text-transform: initial;
	color: #747474;
	display: ${(props) => (props.open ? "none" : "block")};
`;

export { Wrapper, Select, Input, Option, Info, Text, Choice };
