import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { notices } from "../../const";
import NotificationItem from "./NotificationItem";

const NotificationsList = () => {
	return (
		<FlatList
			data={notices}
			renderItem={({ item }) => <NotificationItem {...item} />}
		/>
	);
};

export default NotificationsList;

const styles = StyleSheet.create({});
