import { Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import BackButton from "../../components/BackButton";
import { mainStyles } from "../../styles/MainStyle";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import {
	PhoneAuthProvider,
	RecaptchaVerifier,
	signInWithCredential,
	signInWithPhoneNumber,
} from "firebase/auth";
import { auth, firebaseConfig } from "../../firebase/config";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { UserContext } from "../../context/init";
import { color } from "../../styles/Color";
import { getUser, userInfoIsSetted } from "../../const";

const OTP = ({ navigation, route }: any) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Xác nhận OTP",
			headerLeft: BackButton,
			headerShown: true,
		});
	});
	const { setUserInfo } = useContext(UserContext);
	const phoneNumber = `+84${route.params.phone}`;
	const recaptchaVerifier = useRef<any>(null);
	const [verificationID, setVerificationID] = useState(
		route.params.verificationID
	);

	const [messageShow, setMessageShow] = useState(false);
	const message = "Mã OTP chưa chính xác";

	const handleSendVerificationCode = async () => {
		try {
			console.log("Sending code...");
			const phoneProvider = new PhoneAuthProvider(auth); // initialize the phone provider.
			const verificationId = phoneProvider.verifyPhoneNumber(
				phoneNumber,
				recaptchaVerifier.current
			); // get the verification id
			setVerificationID(verificationId); // set the verification id
		} catch (error: any) {
			// setInfo(`Error : ${error.message}`); // show the error
		}
	};

	const handleVerifyVerificationCode = async (code: any) => {
		try {
			// get the credential
			const credential = PhoneAuthProvider.credential(verificationID, code);
			// verify the credential
			console.log(`verificationCode is ${code}`);
			// signInWithCredential(auth, credential)
			// 	.then(async () => {
			// 		console.log("Logging in...");
			// 		console.log(credential);
			// 		if (userInfoIsSetted(phoneNumber)) {
			// 			await setUserInfo(await getUser(phoneNumber));
			// 		} else {
			// 			navigation.navigate("RegisterInfo", {
			// 				phoneNumber,
			// 			});
			// 		}
			// 		// setIsRegisterInfo(true);
			// 	})
			// 	.catch(() => {
			// 		// console.log();
			// 		if (!userInfoIsSetted(phoneNumber))
			// 			navigation.navigate("RegisterInfo", {
			// 				phoneNumber,
			// 			});
			// 		setMessageShow(true);
			// 	});
			const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container");
			signInWithPhoneNumber(auth, phoneNumber, appVerifier)
				.then((confirmationResult) => {
					confirmationResult
						.confirm(code)
						.then((result) => {
							// Người dùng đã xác minh thành công
						})
						.catch((error) => {
							// Xử lý lỗi
						});
				})
				.catch((error) => console.log(error));
		} catch (error: any) {
			setMessageShow(true);
		}
	};
	return (
		<View
			style={[
				mainStyles.container,
				{
					backgroundColor: "#fff",
					// justifyContent: "space-between",
				},
			]}>
			<View>
				<Text
					style={[
						{ fontSize: 16, fontWeight: "700", textAlign: "center" },
						{},
					]}>
					Mã xác thực OTP đã được gửi tới
				</Text>
				<Text
					style={[
						{ fontSize: 16, fontWeight: "700", textAlign: "center" },
						{},
					]}>{`SĐT ${phoneNumber}`}</Text>
				<FirebaseRecaptchaVerifierModal
					ref={recaptchaVerifier}
					firebaseConfig={firebaseConfig}
				/>
				{/* <TextInput
				placeholder="123456"
				onChangeText={(text) => {
					setVerificationCode(text);
					// handleVerifyVerificationCode();
					console.log(text);

					if (text.length >= 6) {
						handleVerifyVerificationCode();
					}
				}}
				autoFocus={true}
				style={{
					backgroundColor: color.gray,
					padding: 10,
				}}
			/> */}
				<OTPInputView
					style={{
						width: "80%",
						height: 100,
					}}
					pinCount={6}
					autoFocusOnLoad
					selectionColor={color.pink}
					onCodeFilled={(code: any) => {
						handleVerifyVerificationCode(code);
					}}
					codeInputHighlightStyle={{
						borderColor: color.pink,
						borderRadius: 8,
					}}
					codeInputFieldStyle={{
						borderColor: color.pink,
						borderRadius: 8,
						paddingVertical: 2,
						paddingHorizontal: 12,
						color: color.pink,
						fontSize: 24,
						fontWeight: "600",
					}}
				/>
				<Text
					style={{
						color: color.messageError,
						textAlign: "center",
						fontSize: 12,
						fontWeight: "400",
					}}>
					{messageShow && message}
				</Text>
			</View>
			<View
				style={{
					alignItems: "center",
					position: "absolute",
					bottom: 0,
					paddingBottom: 32,
				}}>
				<Text>Bạn có thể yêu cầu mã mới sau 1:59</Text>
				<TouchableOpacity onPress={handleSendVerificationCode}>
					<Text style={{ color: color.blue }}>Gửi lại mã</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default OTP;
