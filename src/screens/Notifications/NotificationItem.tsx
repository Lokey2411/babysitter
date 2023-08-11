import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { dateConvert, timeConvert } from "../../const";
import { mainStyles } from "../../styles/MainStyle";
import { color } from "../../styles/Color";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export interface NotificationItemProps extends TouchableOpacityProps {
	avt: any;
	name: string;
	bookStart: Date;
	bookEnd: Date;
}

const NotificationItem = (props: NotificationItemProps) => {
	const text = `${props.name} đã nhận lịch làm bảo mẫu ngày ${dateConvert(
		props.bookStart
	)} lúc ${timeConvert(props.bookStart)} - ${timeConvert(props.bookEnd)}
    `;
	const navigation = useNavigation<any>();
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Thông báo",
			headerLeft: () => {
				return (
					<TouchableOpacity onPress={navigation.goBack}>
						<FontAwesome
							name={"angle-left"}
							size={30}
						/>
					</TouchableOpacity>
				);
			},
		});
	});
	return (
		<TouchableOpacity
			style={{
				flexDirection: "row",
				alignItems: "center",
				paddingVertical: 9.5,
				borderBottomWidth: 1,
				borderBottomColor: color.gray,
				paddingHorizontal: 16,
			}}>
			<Image
				source={props.avt}
				style={[mainStyles.avt, { marginRight: 8 }]}
			/>
			<View style={{ justifyContent: "center" }}>
				<Text>{text}</Text>
				<View style={{ flexDirection: "row" }}>
					<EvilIcons
						name="clock"
						size={24}
						color={color.boldedGray}
					/>
					<Text style={{ color: color.boldedGray }}>1 giờ trước</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default NotificationItem;

const styles = StyleSheet.create({});
