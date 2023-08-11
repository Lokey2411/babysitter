import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "../../const";
import Introduction from "../Info/Introduction";
import Mother from "../Info/Mother";
import Baby from "../Info/Baby";
import Favorite from "../Info/Favorite";
import Password from "../Info/Password";

const InfoStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen
				name="Introduction"
				component={Introduction}
			/>
		</Stack.Navigator>
	);
};

export default InfoStack;

const styles = StyleSheet.create({});
