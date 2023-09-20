import { Text, TextInput, TextInputProps, View } from "react-native";
import { color } from "../styles/Color";
import { mainStyles } from "../styles/MainStyle";
import { useState } from "react";

export interface FormItemProps extends TextInputProps {
	text: string;
}

const FormItem = (props: FormItemProps) => {
	return (
		<View>
			{props.text && (
				<Text style={[mainStyles.title, { marginBottom: 8 }]}>
					{props.text}
				</Text>
			)}
			<TextInput
				style={{
					borderWidth: 1,
					borderColor: color.gray,
					paddingHorizontal: 16,
					paddingVertical: 13,
					borderRadius: 8,
					marginBottom: 16,
				}}
				{...props}
			/>
		</View>
	);
};

export default FormItem;
