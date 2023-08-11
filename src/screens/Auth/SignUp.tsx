import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { mainStyles } from "../../styles/MainStyle";
import { PinkLogo } from "../../styles/Logo";
import InputField from "../../components/InputField";
import { color } from "../../styles/Color";
import PinkButton from "../../components/PinkButton";
import { useNavigation } from "@react-navigation/native";
import {
	RecaptchaVerifier,
	reauthenticateWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
	const navigation = useNavigation<any>();
	const signUp = () => {
		navigation.navigate("Login");
	};

	return (
		<View style={[mainStyles.container, { backgroundColor: "#fff" }]}>
			<PinkLogo />
			<InputField
				placeholder="Họ tên"
				backgroundColor={color.gray}
			/>
			<InputField
				placeholder="Điện thoại"
				backgroundColor={color.gray}
			/>
			<InputField
				placeholder="Mật khẩu"
				backgroundColor={color.gray}
			/>
			<InputField
				placeholder="Nhập lại mật khẩu"
				backgroundColor={color.gray}
			/>
			<PinkButton
				text="Đăng ký"
				width={"90%"}
				center={true}
				onPress={signUp}
			/>
			<View style={[mainStyles.rowCenter, { marginTop: "30%" }]}>
				<Text>Bạn đã có tài khoản? </Text>
				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<Text style={{ color: color.blue }}>Đăng nhập</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SignUp;

const styles = StyleSheet.create({});
