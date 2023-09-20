import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { mainStyles } from "../styles/MainStyle";

export interface InputFieldProps extends TextInputProps {
	backgroundColor?: string | "#fff";
}

const InputField = (props: InputFieldProps) => {
	return (
		<TextInput
			style={[
				mainStyles.center90,
				{
					height: 50,
					borderRadius: 10,
					paddingHorizontal: 10,
					backgroundColor: props.backgroundColor,
					marginVertical: 10,
				},
			]}
			{...props}
		/>
	);
};

export default InputField;
