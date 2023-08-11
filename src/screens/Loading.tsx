import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { mainStyles } from "../styles/MainStyle";
import { color } from "../styles/Color";
import { WhiteLogo } from "../styles/Logo";

const Loading = () => {
	return (
		<View style={[mainStyles.container, styles.container]}>
			<WhiteLogo />
		</View>
	);
};

export default Loading;

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.pink,
	},
});
