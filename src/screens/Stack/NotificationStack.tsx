import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "../../const";
import NotificationsList from "../Notifications/NotificationsList";

const NotificationStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="NotificationList"
				component={NotificationsList}
			/>
		</Stack.Navigator>
	);
};

export default NotificationStack;

const styles = StyleSheet.create({});
