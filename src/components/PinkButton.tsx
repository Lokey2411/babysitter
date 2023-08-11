import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from "react-native";
import React from "react";
import { color } from "../styles/Color";
import { screenWidth } from "../const";

export interface ButtonProps extends TouchableOpacityProps {
	text: string;
	width: number | string;
	center: boolean;
}

const PinkButton = (props: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[
				{
					backgroundColor: color.pink,
					paddingHorizontal: 8,
					paddingVertical: 8,
					borderRadius: 8,
					// marginRight: 8,
					width: props.width,
					marginVertical: 10,
					marginHorizontal:
						props.center && typeof props.width === "number"
							? (screenWidth - props.width) / 2
							: 0,
				},
				props.style,
				,
			]}
			{...props}>
			<Text style={{ fontSize: 16, color: color.white, textAlign: "center" }}>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};

export default PinkButton;

const styles = StyleSheet.create({});
