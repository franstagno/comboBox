import React, { useState } from "react";
import ComboBox from "../ComboBox";
import { Wrapper, Text } from "./styles";
import { optionsComboBox } from "./utils";

const MainLayout = () => {
	const [color, setColor] = useState("");
	return (
		<Wrapper>
			<ComboBox
				choices={optionsComboBox}
				choice={color}
				setChoice={setColor}
			/>
			<Text>
				{color ? (
					<>
						Color seleccionado: <span>{color}</span>
					</>
				) : (
					<>Selecciona un color</>
				)}
			</Text>
		</Wrapper>
	);
};

export default MainLayout;
