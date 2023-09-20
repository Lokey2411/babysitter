import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { mainStyles } from "../../styles/MainStyle";
import { color } from "../../styles/Color";
import PinkButton from "../../components/PinkButton";
import { screenWidth } from "../../const";
import PopUp from "../../components/PopUp";

const Password = () => {
	const navigation = useNavigation<any>();
	const [displayPopup, setDisplayPopup] = useState("none");

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Mật khẩu",
			headerTitleStyle: { fontWeight: "700" },
			headerShown: true,
		});
	});
	const validatePassword = () => {
		console.log("password validated");
		setDisplayPopup("flex");
	};
	return (
		<View style={mainStyles.container}>
			<View style={{ width: screenWidth }}>
				<TextInput
					placeholder="Mật khẩu"
					secureTextEntry={true}
					style={[
						mainStyles.center90,
						{
							backgroundColor: color.white,
							padding: 10,
							borderWidth: 1,
							borderColor: color.gray,
							borderRadius: 8,
						},
					]}
				/>
				<TextInput
					placeholder="Mật khẩu mới"
					secureTextEntry={true}
					style={[
						mainStyles.center90,
						{
							backgroundColor: color.white,
							padding: 10,
							borderWidth: 1,
							borderColor: color.gray,
							borderRadius: 8,
							marginVertical: 10,
						},
					]}
				/>
				<TextInput
					placeholder="Nhập lại mật khẩu"
					secureTextEntry={true}
					style={[
						mainStyles.center90,
						{
							backgroundColor: color.white,
							padding: 10,
							borderWidth: 1,
							borderColor: color.gray,
							borderRadius: 8,
						},
					]}
				/>
			</View>
			<View
				style={{
					position: "absolute",
					bottom: 30,
				}}>
				<PinkButton
					text="Cập nhật mật khẩu"
					width={screenWidth * 0.9}
					onPress={validatePassword}
					center={true}
				/>
			</View>
			<PopUp.SuccessUpdate
				display={displayPopup}
				setDisplay={setDisplayPopup}
			/>
		</View>
	);
};

export default Password;

const styles = StyleSheet.create({});
