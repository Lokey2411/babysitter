import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LookUp from "../LookUp/LookUp";
import InfoList from "../LookUp/InfoList";

const Stack = createNativeStackNavigator();

const LookUpStack = ({ navigation, route }: any) => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="LookUpHome">
			<Stack.Screen
				name="LookUpHome"
				component={LookUp}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="InfoList"
				component={InfoList}
			/>
		</Stack.Navigator>
	);
};

export default LookUpStack;

const styles = StyleSheet.create({});
