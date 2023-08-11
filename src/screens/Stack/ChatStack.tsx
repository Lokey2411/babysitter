import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../Chat/Chat";
import ChatHome from "../Chat/ChatHome";

const Stack = createNativeStackNavigator();

const ChatStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Main"
				component={ChatHome}
			/>
			<Stack.Screen
				name="Chat"
				component={Chat}
			/>
		</Stack.Navigator>
	);
};

export default ChatStack;

const styles = StyleSheet.create({});
