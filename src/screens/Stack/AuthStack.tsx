import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "../../const";
import LogIn from "../Auth/LogIn";
import SignUp from "../Auth/SignUp";
import Home from "../Home";
import OTP from "../Auth/OTP";
import RegisterInfo from "../Auth/RegisterInfo";

const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				headerShadowVisible: false,
			}}>
			<Stack.Screen
				name="Init"
				component={Home}
			/>
			<Stack.Screen
				name="Login"
				component={LogIn}
			/>
			<Stack.Screen
				name="OTP"
				component={OTP}
			/>
			<Stack.Screen
				name="SignUp"
				component={SignUp}
			/>
			<Stack.Screen
				name="RegisterInfo"
				component={RegisterInfo}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;

const styles = StyleSheet.create({});
