import {
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React from "react";
import { details } from "../../const";
import ChatMainItem from "./ChatMainItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { color } from "../../styles/Color";
import { mainStyles } from "../../styles/MainStyle";
import SearchItem from "../../components/SearchItem";

const ChatHome = () => {
	return (
		<SafeAreaView>
			<SearchItem />
			<FlatList
				data={details}
				renderItem={({ item }) => (
					<ChatMainItem
						{...item}
						time={"7:00"}
						message="Hello there!"
						itemID={item.id}
					/>
				)}
				style={mainStyles.center90}
			/>
		</SafeAreaView>
	);
};

export default ChatHome;

const styles = StyleSheet.create({});
