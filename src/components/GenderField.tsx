import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Checkbox from "expo-checkbox";
import { color } from "../styles/Color";
import { mainStyles } from "../styles/MainStyle";
import { UserContext } from "../context/init";

export interface GenderFieldProps {
	defaultGender?: string;
	isUser?: boolean;
}

const GenderField = ({ defaultGender }: GenderFieldProps) => {
	const [gender, updateGender] = useState(defaultGender);
	const { setUserInfo, userInfo } = useContext(UserContext);
	const setGender = (gender: any) => {
		updateGender(gender);
		setUserInfo({
			...userInfo,
			gender,
		});
	};
	return (
		<View>
			<Text style={[mainStyles.title, { marginBottom: 8 }]}>Giới tính</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginBottom: 16,
				}}>
				<Checkbox
					color={color.pink}
					onValueChange={(value) => setGender(value ? "Nam" : "")}
					value={gender === "Nam"}
				/>
				<Text style={{ marginLeft: 8, marginRight: 16 }}>Nam</Text>
				<Checkbox
					color={color.pink}
					onValueChange={(value) => setGender(value ? "Nữ" : "")}
					value={gender === "Nữ"}
				/>
				<Text style={{ marginLeft: 8 }}>Nữ</Text>
			</View>
		</View>
	);
};

export default GenderField;

const styles = StyleSheet.create({});
