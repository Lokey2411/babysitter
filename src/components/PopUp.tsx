import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenHeight, screenWidth } from "../const";
import { mainStyles } from "../styles/MainStyle";
import { color } from "../styles/Color";
import PinkButton from "./PinkButton";
import { useNavigation } from "@react-navigation/native";

const PopUp = {
	SuccessBook: ({ display, setDisplay }: any) => {
		const navigation = useNavigation<any>();
		// console.log(display);
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: "rgba(0,0,0, 0.1)",
					display: display,
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				}}>
				<View
					style={{
						alignSelf: "center",
						paddingVertical: 24,
						paddingHorizontal: 16,
						borderRadius: 8,
						width: 224,
						height: 258,
						alignItems: "center",
						backgroundColor: "#fff",
					}}>
					<Image source={require("../../assets/image/popup/success.png")} />
					<Text style={[mainStyles.title, {}]}>Đặt lịch thành công</Text>
					<Text style={{ color: color.boldedGray, textAlign: "center" }}>
						Bạn đã đặt lịch thành công
					</Text>
					<Text style={{ color: color.boldedGray, textAlign: "center" }}>
						Thông báo sẽ được gửi tới bảo mẫu
					</Text>
					<PinkButton
						text="Đóng"
						center={true}
						width={screenWidth * 0.45}
						onPress={() => {
							setDisplay("none");
							navigation.goBack();
						}}
					/>
				</View>
			</View>
		);
	},
	SuccessUpdate: ({ display, setDisplay }: any) => {
		const navigation = useNavigation<any>();
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: "rgba(0,0,0, 0.1)",
					display: display,
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				}}>
				<View
					style={{
						alignSelf: "center",
						paddingVertical: 24,
						paddingHorizontal: 16,
						borderRadius: 8,
						width: 224,
						height: 258,
						alignItems: "center",
						backgroundColor: "#fff",
					}}>
					<Image source={require("../../assets/image/popup/success.png")} />
					<Text style={[mainStyles.title, {}]}>Cập nhật thành công</Text>
					<Text style={{ color: color.boldedGray, textAlign: "center" }}>
						Bạn đã đặt lịch thành công
					</Text>

					<PinkButton
						text="Đóng"
						center={true}
						width={screenWidth * 0.45}
						onPress={() => {
							setDisplay("none");
							navigation.goBack();
						}}
					/>
				</View>
			</View>
		);
	},
	Error: ({ display, setDisplay }: any) => {
		const navigation = useNavigation();
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: "rgba(0,0,0, 0.1)",
					display: display,
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				}}>
				<View
					style={{
						alignSelf: "center",
						paddingVertical: 24,
						paddingHorizontal: 16,
						borderRadius: 8,
						width: 224,
						height: 258,
						alignItems: "center",
						backgroundColor: "#fff",
					}}>
					<Image source={require("../../assets/image/popup/success.png")} />
					<Text style={[mainStyles.title, {}]}>Đặt lịch thành công</Text>
					<Text style={{ color: color.boldedGray, textAlign: "center" }}>
						Bạn đã đặt lịch thành công
					</Text>
					<Text style={{ color: color.boldedGray, textAlign: "center" }}>
						Thông báo sẽ được gửi tới bảo mẫu
					</Text>
					<PinkButton
						text="Đóng"
						center={true}
						width={screenWidth * 0.45}
						onPress={() => {
							setDisplay("none");
							navigation.goBack();
						}}
					/>
				</View>
			</View>
		);
	},
};

export default PopUp;
