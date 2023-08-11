import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { baby } from "../../const";
import BabyItem from "./BabyItem";

const BabyList = (props: any) => {
	return (
		<SafeAreaView>
			<FlatList
				data={baby}
				renderItem={({ item }) => (
					<BabyItem
						{...item}
						itemId={item.itemId}
					/>
				)}
				keyExtractor={(item) => item.itemId.toString()}
			/>
		</SafeAreaView>
	);
};

export default BabyList;

const styles = StyleSheet.create({});
