import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from "react-native";
import React from "react";
import { color } from "../styles/Color";
import { Entypo } from "@expo/vector-icons";
import { mainStyles } from "../styles/MainStyle";
import { screenWidth } from "../const";
import {
	NavigationState,
	useNavigation,
	useRoute,
} from "@react-navigation/native";

const imgSize = 48;

export interface ItemCardProps extends TouchableOpacityProps {
	desc?: string;
	name: string;
	location: string;
	rate: number | string;
	price: string | number;
	exp: string | number;
	avt: any;
	width: number;
	center: boolean;
	itemId: number;
	isBooked: boolean;
}

const InfoItem = (props: ItemCardProps) => {
	const navigation = useNavigation<any>();
	const route = useRoute();
	const hasNav = route.name !== "Mother" || props.isBooked;
	const isPink = route.name === "Mother" && props.isBooked;
	const textColorBlack = isPink ? color.white : "black";
	const textColorGray = isPink ? color.white : color.boldedGray;
	return (
		<TouchableOpacity
			{...props}
			onPress={() =>
				hasNav && navigation.navigate("Details", { id: props.itemId })
			}
			style={{
				backgroundColor: isPink ? color.pink : color.gray,
				padding: 8,
				borderRadius: 8,
				width: props.width,
				marginHorizontal: props.center ? (screenWidth - props.width) / 2 : 10,
				marginVertical: 10,
			}}>
			<View style={mainStyles.rowBetween}>
				<Image
					source={props.avt}
					style={styles.avatar}
				/>
				<View>
					<Text style={{ color: textColorBlack }}>{props.name}</Text>
					<View
						style={[
							mainStyles.rowBetween,
							{ alignItems: "center", width: 60 },
						]}>
						<Entypo
							name="location-pin"
							size={24}
							color={textColorGray}
						/>
						<Text style={{ color: textColorGray }}>{props.location}</Text>
					</View>
					<Text style={{ color: textColorGray }}>{props.exp}</Text>
				</View>
				<View>
					<View
						style={[
							mainStyles.rowBetween,
							{
								backgroundColor: color.white,
								paddingVertical: 2,
								paddingHorizontal: 4,
								borderRadius: 100,
							},
						]}>
						<Text>
							{typeof props.rate === "number" ? `${props.rate}/5` : props.rate}
						</Text>
						<Entypo
							name="star"
							size={24}
							color={color.orange}
						/>
					</View>
					<Text style={{ color: color.pink, marginTop: 20 }}>
						{!isPink && props.price}
					</Text>
				</View>
			</View>
			<View>
				<Text style={{ color: textColorGray }}>{props.desc}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default InfoItem;

const styles = StyleSheet.create({
	avatar: {
		width: imgSize,
		height: imgSize,
		borderRadius: imgSize / 2,
	},
});
