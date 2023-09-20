import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { details, screenWidth } from "../../const";
import InfoItem from "../../components/InfoItem";
import LookUpDetails from "../LookUp/LookUpDetails";
import { mainStyles } from "../../styles/MainStyle";
import { FontAwesome } from "@expo/vector-icons";
import BackButton from "../../components/BackButton";
import { color } from "../../styles/Color";

const Mother = () => {
	const navigation = useNavigation<any>();
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Quản lý bảo mẫu",
			headerTitleStyle: { fontWeight: "700" },
			headerShown: true,
			headerLeft: BackButton,
			headerShadowVisible: false,
		});
	}, [navigation]);
	return (
		<View
			style={{
				backgroundColor: color.white,
			}}>
			<LookUpDetails data={details} />
		</View>
	);
};

export default Mother;

const styles = StyleSheet.create({});
