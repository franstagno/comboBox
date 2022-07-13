import styled from "styled-components";
import CloseSvg from "../../../../svg/Close";
import SearchSvg from "../../../../svg/Search";
import ArrowSvg from "../../../../svg/Arrow";

const WrapperArrow = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	display: flex;
	align-items: center;
	padding-right: 10px;
	padding-left: 10px;
	cursor: pointer;
`;

const Delete = styled(CloseSvg)`
	position: absolute;
	right: 35px;
	top: 14px;
	display: ${(props) => (props.visible && !props.open ? "block" : "none")};
`;

const Arrow = styled(ArrowSvg)`
	width: 10px;
	height: 6px;
	${(props) => props.open && "transform: rotate(180deg)"};
`;

const Search = styled(SearchSvg)`
	position: absolute;
	left: 1px;
	top: 12px;
	display: ${(props) => (props.open ? "block" : "none")};
`;

export { WrapperArrow, Delete, Arrow, Search };
