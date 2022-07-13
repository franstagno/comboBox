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
			<Text>
				Se empieza a filtrar apartir de la 3er letra en el input debido
				a que asi entendi la consigna.
			</Text>
		</Wrapper>
	);
};

export default MainLayout;
