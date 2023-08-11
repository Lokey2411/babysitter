import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { mainStyles } from "../styles/MainStyle";
import { color } from "../styles/Color";
import { Feather } from "@expo/vector-icons";
import { SearchNormal1 } from "iconsax-react-native";

const SearchItem = () => {
	return (
		<View
			style={[
				mainStyles.center90,
				mainStyles.rowBetween,
				{
					flexDirection: "row",
					backgroundColor: color.gray,
					padding: 4,
					borderRadius: 8,
					marginVertical: 8,
					marginHorizontal: 16,
					paddingVertical: 8,
					paddingHorizontal: 12,
				},
			]}>
			<SearchNormal1
				size="20"
				color={color.boldedGray}
			/>
			<TextInput
				placeholder="Tìm kiếm"
				style={{
					color: color.boldedGray,
					width: "90%",
					fontSize: 16,
					lineHeight: 24,
					fontWeight: "400",
				}}
			/>
		</View>
	);
};

export default SearchItem;

const styles = StyleSheet.create({});
