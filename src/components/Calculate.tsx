import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from "react-native";
import React from "react";

interface ItemProps extends TouchableOpacityProps {
	text: string | any;
}

const Calculate = ({ text, ...props }: ItemProps) => {
	//(props: ItemProps)
	return (
		<TouchableOpacity {...props}>
			<Text>{text}</Text>
		</TouchableOpacity>
	);
};

export default Calculate;

const styles = StyleSheet.create({});
