import {
	Image,
	StyleSheet,
	Text,
	Touchable,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from "react-native";
import React from "react";
import { mainStyles } from "../styles/MainStyle";
import { Entypo } from "@expo/vector-icons";
import { color } from "../styles/Color";
import { SafeAreaView } from "react-native-safe-area-context";

export interface BabyCardProps extends TouchableOpacityProps {
	name: string;
	avt: any;
	age: number | string; // optional prop with a fallback value of `null` if not
	gender: string;
	bookDate: Date;
	location: string;
	babyId?: any; //optional props for future use case when we need to pass
	desc: string;
	endDate: Date;
}

const BabyInfo = (props: BabyCardProps) => {
	const mainTextColor = color.boldedGray;
	const age = typeof props.age === "number" ? `${props.age} tuổi` : props.age;

	const dateConvert = (day: Date) => {
		const date = day.getDate();
		const month = day.getMonth();
		const year = day.getFullYear();
		return `${date}/${month}/${year}`;
	};

	const timeConvert = (date: Date) => {
		let hour = date.getHours();
		const ampm = hour >= 12 ? "PM" : "AM";
		hour = hour >= 12 ? hour - 12 : hour;
		const minute = date.getMinutes();
		return `${hour}:${minute}${ampm}`;
	};

	return (
		<SafeAreaView style={{ marginBottom: 0 }}>
			<TouchableOpacity
				style={[
					mainStyles.center90,
					{
						backgroundColor: color.gray,
						padding: 8,
						borderRadius: 8,
					},
				]}>
				<View style={[mainStyles.rowBetween]}>
					{/* Avatar */}
					<Image
						source={props.avt}
						style={mainStyles.avt}
					/>
					{/* Info Container*/}
					<View>
						<Text>{props.name}</Text>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Entypo
								name="location-pin"
								size={20}
								color={mainTextColor}
							/>
							<Text style={{ marginLeft: 5, color: mainTextColor }}>
								{props.location}
							</Text>
						</View>
						<View>
							<Text style={{ color: mainTextColor }}>
								{props.gender} | {age}
							</Text>
						</View>
					</View>
					{/* Ngày book */}
					<View>
						<Text style={{ color: mainTextColor, textAlign: "right" }}>
							{dateConvert(props.bookDate)}
						</Text>
						<Text style={{ color: mainTextColor, textAlign: "right" }}>
							Time:
							{timeConvert(props.bookDate)} - {timeConvert(props.endDate)}
						</Text>
					</View>
				</View>
				<Text style={{ color: mainTextColor }}>{props.desc}</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default BabyInfo;

const styles = StyleSheet.create({});
