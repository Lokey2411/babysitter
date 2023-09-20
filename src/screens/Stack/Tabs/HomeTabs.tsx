import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Stack, Tab } from "../../../const";
import NotificationStack from "../NotificationStack";
import InfoStack from "../InfoStack";
import ChatStack from "../ChatStack";
import LookUpStack from "../LookUpStack";
import { color } from "../../../styles/Color";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import LookUp from "../../LookUp/LookUp";
import Chat from "../../Chat/Chat";
import ChatHome from "../../Chat/ChatHome";
import { UserContext } from "../../../context/init";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Babies from "../../Babies/Babies";
import MotherIntroduction from "../../Info/MotherIntroduction";
import {
	Speedometer,
	Messages,
	Notification,
	ProfileCircle,
	SearchNormal,
} from "iconsax-react-native";
import Introduction from "../../Info/Introduction";

const HomeTabs = () => {
	const { userIsMommy } = useContext(UserContext);
	const HomeIcon = ({ color }: any) => {
		return userIsMommy ? (
			<Speedometer
				size="24"
				color={color}
			/>
		) : (
			<SearchNormal
				size="24"
				color={color}
			/>
		);
	};
	const homeLabel = userIsMommy ? "Quản lý trẻ" : "Tìm kiếm";
	const LookUpHome = userIsMommy ? Babies : LookUpStack;
	const Info = userIsMommy ? MotherIntroduction : Introduction;
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: color.pink,
				tabBarInactiveTintColor: color.boldedGray,
				tabBarIconStyle: {
					color: color.pink,
				},
				tabBarHideOnKeyboard: true,
			}}>
			<Tab.Screen
				name="Lookup"
				component={LookUpHome}
				options={{
					tabBarIcon: HomeIcon,
					tabBarLabel: homeLabel,
				}}
			/>
			<Tab.Screen
				name="Message"
				component={ChatHome}
				options={{
					tabBarIcon: ({ color }) => {
						return (
							<Messages
								size="24"
								color={color}
							/>
						);
					},
					tabBarLabel: "Tin nhắn",
				}}
			/>
			<Tab.Screen
				name="Info"
				component={userIsMommy ? MotherIntroduction : Introduction}
				options={{
					tabBarIcon: ({ color }) => {
						return (
							<ProfileCircle
								size="24"
								color={color}
							/>
						);
					},
					tabBarLabel: "Thông tin",
				}}
			/>
			<Tab.Screen
				name="Notification"
				component={NotificationStack}
				options={{
					tabBarIcon: ({ color }) => {
						return (
							<Notification
								size="24"
								color={color}
							/>
						);
					},
					tabBarLabel: "Thông báo",
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeTabs;

const styles = StyleSheet.create({});
