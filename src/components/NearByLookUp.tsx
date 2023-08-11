import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { color } from "../styles/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { SearchNormal1, Setting5 } from "iconsax-react-native";

const NearByLookUp = () => {
	return (
		<SafeAreaView
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				backgroundColor: color.gray,
				width: "90%",
				marginHorizontal: "5%",
				marginTop: 30,
				alignItems: "center",
				paddingVertical: 8,
				paddingHorizontal: 12,
			}}>
			<SearchNormal1
				size="20"
				color={color.boldedGray}
			/>
			<TextInput
				placeholder={"Tìm kiếm theo khu vực"}
				style={{ width: "85%" }}
			/>
			<Setting5
				size="20"
				color={color.boldedGray}
			/>
		</SafeAreaView>
	);
};

export default NearByLookUp;

const styles = StyleSheet.create({});
