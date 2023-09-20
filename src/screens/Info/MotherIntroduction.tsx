import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TextInput,
	Touchable,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "../../styles/Color";
import { mainStyles } from "../../styles/MainStyle";
import { NavigationProps } from "./Introduction";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { details, getUserLoggedIn, screenHeight } from "../../const";
import { AntDesign } from "@expo/vector-icons";
import { UserContext } from "../../context/init";
import { Edit2 } from "iconsax-react-native";
import { signOut } from "firebase/auth";
import { auth, firestore } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const navigationItem = [
	{
		text: "Yêu thích",
		destination: "Favorite",
	},
	{
		text: "Mật khẩu",
		destination: "Password",
	},
];

const NavigationCard = (props: NavigationProps) => {
	const navigation = useNavigation<any>();
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(props.destination)}
			style={[
				mainStyles.center90,
				{
					borderWidth: 1,
					borderColor: color.pink,
					borderRadius: 8,
					padding: 8,
					marginVertical: 10,
				},
				mainStyles.rowBetween,
			]}>
			<Text style={{ color: color.pink, fontSize: 16, fontWeight: "500" }}>
				{props.text}
			</Text>
			<FontAwesome
				name="angle-right"
				size={30}
				color={color.pink}
			/>
		</TouchableOpacity>
	);
};

const avtSize = 128;

const MotherIntroduction = () => {
	const navigation = useNavigation<any>();
	const { userInfo } = useContext(UserContext);
	const item = getUserLoggedIn(userInfo.id);
	const name = item?.name;
	const avt = item?.avt
		? item?.avt
		: require("../../../assets/image/avt/mc.jpg");
	const email = "penaldu@test.ru";
	const userID = item?.id;
	const onSignOut = () => {
		// navigation.navigate("Init");
		signOut(auth);
	};
	return (
		<SafeAreaView
			style={{ justifyContent: "space-between", height: screenHeight * 0.9 }}>
			<View>
				<Text
					style={[
						mainStyles.title,
						{
							textAlign: "center",
						},
					]}>
					Thông tin
				</Text>
				<Image
					source={avt}
					style={{
						width: avtSize,
						height: avtSize,
						borderRadius: avtSize / 2,
						alignSelf: "center",
					}}
				/>
				<View style={[mainStyles.rowCenter, { alignItems: "center" }]}>
					<Text style={[mainStyles.title, { textAlign: "center" }]}>
						{name}
					</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("Edit", { id: userID })}>
						<Edit2
							size="20"
							color={color.boldedGray}
						/>
					</TouchableOpacity>
				</View>
				<Text
					style={{
						color: color.boldedGray,
						textAlign: "center",
						marginBottom: 64,
					}}>
					{email}
				</Text>
				<FlatList
					data={navigationItem}
					renderItem={({ item }) => <NavigationCard {...item} />}
				/>
			</View>
			<TouchableOpacity onPress={onSignOut}>
				<Text style={{ color: color.boldedGray, textAlign: "center" }}>
					Đăng xuất
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default MotherIntroduction;

const styles = StyleSheet.create({});
