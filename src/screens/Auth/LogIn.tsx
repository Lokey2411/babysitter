import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import { PinkLogo } from "../../styles/Logo";
import { mainStyles } from "../../styles/MainStyle";
import { color } from "../../styles/Color";
import Checkbox from "expo-checkbox";
import InputField from "../../components/InputField";
import PhoneInput from "react-native-phone-input";
import CheckBoxField from "../../components/CheckBoxField";
import PinkButton from "../../components/PinkButton";
import { useNavigation } from "@react-navigation/native";
import {
	PhoneAuthProvider,
	RecaptchaVerifier,
	signInWithPhoneNumber,
} from "firebase/auth";
import { auth, firebaseConfig } from "../../firebase/config";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { UserContext } from "../../context/init";

const LogIn = () => {
	const navigation = useNavigation<any>();
	const [phoneNumber, setPhoneNumber] = useState<string>("+84");
	const { userIsMommy } = useContext(UserContext);
	const [phone, setPhone] = useState("");
	const mobileValidate = (text: string) => {
		const regexp = /^\d{9,10}$/;
		return text.match(regexp);
	};
	const recaptchaVerifier = useRef<any>(null);

	const [verificationID, setVerificationID] = useState("");
	const [info, setInfo] = useState("");

	const handleSendVerificationCode = async () => {
		try {
			const phoneProvider = new PhoneAuthProvider(auth); // initialize the phone provider.
			const verificationId = await phoneProvider.verifyPhoneNumber(
				phoneNumber,
				recaptchaVerifier.current
			); // get the verification id
			setVerificationID(verificationId); // set the verification id
		} catch (error: any) {
			setInfo(`Error : ${error.message}`); // show the error
		}
	};
	const signIn = () => {
		const validateResult = mobileValidate(phone);
		if (validateResult) {
			handleSendVerificationCode();
			navigation.navigate("OTP", {
				phone: phone,
				verificationID: verificationID,
			});
		} else {
			Alert.alert("Số điện thoại không hợp lệ");
		}
	};

	return (
		<View style={[mainStyles.container, { backgroundColor: "#fff" }]}>
			<View
				style={[
					{
						margin: "15%",
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
					},
				]}>
				<PinkLogo />
				<InputField
					backgroundColor={color.gray}
					placeholder="Điện thoại"
					onChangeText={(text) => {
						setPhoneNumber(text);
						setPhone(text.replace("+84", ""));
					}}
					onEndEditing={() => {}}
					value={phoneNumber}
					autoCorrect={true}
					autoComplete="tel"
					defaultValue="+84"
					autoFocus
					keyboardType="number-pad"
				/>
				<InputField
					placeholder="Mật khẩu"
					textContentType="password"
					secureTextEntry={true}
					backgroundColor={color.gray}
				/>
				<View style={[mainStyles.rowBetween, { width: "90%" }]}>
					<CheckBoxField text={"Ghi nhớ đăng nhập"} />
					<TouchableOpacity>
						<Text style={{ color: color.blue }}>Quên mật khẩu?</Text>
					</TouchableOpacity>
				</View>
				<PinkButton
					text="Đăng nhập"
					width={"90%"}
					center={true}
					onPress={signIn}
				/>
			</View>

			<View style={[mainStyles.rowCenter, { marginTop: "30%" }]}>
				<Text>Bạn chưa có tài khoản? </Text>
				<TouchableOpacity
					onPress={() => userIsMommy && navigation.navigate("SignUp")}>
					<Text style={{ color: color.blue }}>Đăng ký</Text>
				</TouchableOpacity>
			</View>
			<FirebaseRecaptchaVerifierModal
				firebaseConfig={firebaseConfig}
				ref={recaptchaVerifier}
				attemptInvisibleVerification={false}
			/>
		</View>
	);
};

export default LogIn;
