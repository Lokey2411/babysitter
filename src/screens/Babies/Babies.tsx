import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchItem from "../../components/SearchItem";
import { SearchBar } from "react-native-screens";
import { babies, baby } from "../../const";
import BabyInfo from "../../components/BabyInfo";

const Babies = () => {
	return (
		<SafeAreaView>
			<SearchItem />
			<FlatList
				data={babies}
				renderItem={({ item }) => <BabyInfo {...item} />}
			/>
		</SafeAreaView>
	);
};

export default Babies;

const styles = StyleSheet.create({});
