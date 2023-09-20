import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "../../styles/Color";
import { mainStyles } from "../../styles/MainStyle";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { asyncStorage, getUser, screenWidth } from "../../const";
import { Form } from "./Baby";
import { UserContext } from "../../context/init";
import { signOut } from "firebase/auth";
import { auth, firestore } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import PinkButton from "../../components/PinkButton";

const avtSize = screenWidth * 0.2;

export interface NavigationProps {
	text: string;
	destination: string;
}

const navigationList = [
	{
		text: "Bảo mẫu",
		destination: "Mother",
	},
	{
		text: "Quản lý trẻ",
		destination: "Baby",
	},
	{
		text: "Yêu thích",
		destination: "Favorite",
	},
	{
		text: "Mật khẩu",
		destination: "Password",
	},
];

const NavigationElem = (props: NavigationProps) => {
	const navigation = useNavigation<any>();
	return (
		<TouchableOpacity
			style={[
				mainStyles.rowBetween,
				{
					borderWidth: 1,
					borderColor: color.pink,
					width: "44%",
					marginLeft: screenWidth * 0.035,
					padding: 10,
					marginVertical: 16,
					borderRadius: 8,
				},
			]}
			onPress={() => navigation.navigate(props?.destination)}>
			<Text style={{ color: color.pink, fontWeight: "bold" }}>
				{props.text}
			</Text>
			<FontAwesome
				name="angle-right"
				size={24}
				color={color.pink}
			/>
		</TouchableOpacity>
	);
};

const Introduction = () => {
	// const navigation = useNavigation<any>();
	const { userInfo, setUserInfo } = useContext(UserContext);
	const [name, setName] = useState(userInfo.name);
	const [age, setAge] = useState(userInfo.age);
	const phoneNumber = userInfo.id;

	useEffect(() => {
		// console.log(phoneNumber);
		const unsub = async () => {
			try {
				await setUserInfo(await getUser(phoneNumber));
			} catch (error) {
				console.log(error);
			}
		};
		// return () => unsub();
		() => unsub();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	const updateName = async (name: string) => {
		setName(name);
		// await setUserInfo({ ...userInfo, ...{ name } });
	};
	const saveData = async () => {
		try {
			await setUserInfo({ ...userInfo, name, age: Number(age) });
		} catch (error) {
			console.log(error);
		}
	};
	const updateAge = async (age: string | number) => {
		setAge(age as string);
		// await setUserInfo({ ...userInfo, ...{ age } });
	};
	const onSignOut = () => {
		// navigation.navigate("Init");

		signOut(auth)
			.then(() => asyncStorage.removeItem("token"))
			.catch((error) => console.log(error));
	};

	return (
		<SafeAreaView
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Text
				style={[mainStyles.title, { textAlign: "center", marginVertical: 10 }]}>
				Thông tin
			</Text>
			<Image
				source={require("../../../assets/image/avt/mc.jpg")}
				style={{
					width: avtSize,
					height: avtSize,
					borderRadius: avtSize,
					alignSelf: "center",
				}}
			/>
			<Text
				style={[mainStyles.title, { textAlign: "center", marginVertical: 10 }]}>
				{name}
			</Text>
			<Form
				style={{ width: screenWidth * 0.9 }}
				hasLabel={false}
				additionalInfo="Số điện thoại"
				age={age as string}
				name={name as string}
				setName={updateName}
				additionalInfoInit={phoneNumber}
				setAge={updateAge}
				defaultGender={userInfo?.gender}
				isUser
			/>
			<PinkButton
				text="Save"
				center={false}
				width={"90%"}
				onPress={saveData}
			/>
			<FlatList
				data={navigationList}
				renderItem={({ item }) => <NavigationElem {...item} />}
				keyExtractor={(item, index) => index.toString()}
				numColumns={2}
				style={{ height: 280 }}
			/>
			<TouchableOpacity
				onPress={onSignOut}
				style={{ width: "100%" }}>
				<Text
					style={{
						color: color.boldedGray,
						marginTop: -70,
						textAlign: "center",
					}}>
					Đăng xuất
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Introduction;

const styles = StyleSheet.create({});
