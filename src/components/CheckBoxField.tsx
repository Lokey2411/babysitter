import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Checkbox, { CheckboxProps } from "expo-checkbox";
import { color } from "../styles/Color";

export interface CheckBoxFieldProps extends CheckboxProps {
	text: any;
}

const CheckBoxField = (props: CheckBoxFieldProps) => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<View style={{ flexDirection: "row" }}>
			<Checkbox
				{...props}
				style={{ marginHorizontal: 4, borderColor: color.gray }}
				value={isChecked}
				onValueChange={(newValue) => setIsChecked(newValue)}
				color={color.blue}
			/>
			<Text>{props.text}</Text>
		</View>
	);
};

export default CheckBoxField;

const styles = StyleSheet.create({});
