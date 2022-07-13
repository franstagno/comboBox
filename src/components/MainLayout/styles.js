import styled from "styled-components";

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Text = styled.p`
	margin-top: 20px;
	span {
		display: inline-block;
		&:first-letter {
			text-transform: uppercase;
		}
	}
`;

export { Wrapper, Text };
