import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { mainStyles } from "../../styles/MainStyle";
import { color } from "../../styles/Color";
import { logoSize } from "../../const";
import { useNavigation } from "@react-navigation/native";

const ChatMainItem = (props: any) => {
	const navigation = useNavigation<any>();
	return (
		<TouchableOpacity
			style={[
				mainStyles.rowBetween,
				{ paddingHorizontal: 10, marginVertical: 10 },
			]}
			onPress={() =>
				navigation.navigate("Chat", {
					id: props.itemID,
				})
			}>
			<Image
				source={props.avt}
				style={{
					width: logoSize,
					height: logoSize,
					borderRadius: logoSize / 2,
				}}
			/>
			<View style={{ width: "70%", justifyContent: "center" }}>
				<Text>{props.name}</Text>
				<Text style={{ color: color.boldedGray }}>{props.message}</Text>
			</View>
			<Text style={{ color: color.boldedGray }}>{props.time}</Text>
		</TouchableOpacity>
	);
};

export default ChatMainItem;

const styles = StyleSheet.create({});
