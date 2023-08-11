import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { details } from "../../const";
import { UserContext } from "../../context/init";
import LookUpDetails from "../LookUp/LookUpDetails";
import { useNavigation } from "@react-navigation/native";
import { mainStyles } from "../../styles/MainStyle";

const Favorite = () => {
	const { favIds } = useContext(UserContext);
	const navigation = useNavigation<any>();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerTitle: "Yêu thích",
		});
	});
	const favData = details.filter((item) => favIds.includes(item.id));
	const haveFavorite = favData.length > 0;
	if (!haveFavorite)
		return (
			<View style={mainStyles.container}>
				<Text>Không có gì ở đây cả</Text>
			</View>
		);
	return <LookUpDetails data={favData} />;
};

export default Favorite;

const styles = StyleSheet.create({});
