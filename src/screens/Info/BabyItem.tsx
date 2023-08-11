import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from "react-native";
import React from "react";
import { color } from "../../styles/Color";
import { mainStyles } from "../../styles/MainStyle";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export interface BabyItemProps extends TouchableOpacityProps {
	avt: any;
	name?: string | undefined;
	age: string | number;
	itemId: string | number;
}

const BabyItem = (props: BabyItemProps) => {
	const age = typeof props.age === "number" ? `${props.age} tuổi` : props.age;
	const navigation = useNavigation<any>();
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("Fix", {
					itemId: props.itemId,
				})
			}
			{...props}
			style={[
				mainStyles.center90,
				{
					flexDirection: "row",
					backgroundColor: color.gray,
					marginBottom: 16,
					borderRadius: 8,
					padding: 8,
					width: "90%",
					justifyContent: "space-between",
				},
			]}>
			<Image
				source={props.avt}
				style={mainStyles.avt}
			/>
			<View style={{ paddingHorizontal: 10, width: "70%" }}>
				<Text>{props?.name}</Text>
				<Text>{age}</Text>
			</View>
			<TouchableOpacity style={{ margin: 12 }}>
				<FontAwesome
					name="angle-right"
					size={30}
					color="black"
				/>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

export default BabyItem;

const styles = StyleSheet.create({});
