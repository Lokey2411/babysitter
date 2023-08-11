import {
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
	ViewProps,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import PinkButton from "../../components/PinkButton";
import { mainStyles } from "../../styles/MainStyle";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { color } from "../../styles/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckBoxField from "../../components/CheckBoxField";
import Checkbox from "expo-checkbox";
import FormItem from "../../components/FormItem";
import { Stack, baby, screenHeight } from "../../const";
import BabyList from "./BabyList";
import GenderField from "../../components/GenderField";
import BackButton from "../../components/BackButton";

export interface FormProps extends ViewProps {
	hasLabel: boolean;
	name: string;
	setName: any;
	age: number | string;
	setAge: any;
	additionalInfo: string;
	additionalInfoInit: string;
}

export const Form = (props: FormProps) => {
	return (
		<View {...props}>
			<FormItem
				text={props.hasLabel ? "Tên: " : ""}
				defaultValue={props.name}
				onChangeText={(text) => props.setName(text)}
			/>
			<FormItem
				text={props.hasLabel ? "Tuổi: " : ""}
				defaultValue={props.age.toString()}
				onChangeText={(text) => props.setAge(text)}
			/>
			<FormItem
				text={props.hasLabel ? `${props.additionalInfo}: ` : ""}
				defaultValue={props.additionalInfoInit}
			/>
			<GenderField />
		</View>
	);
};

const Fixed = ({ route }: any) => {
	const item = baby.find((item) => item.itemId === route.params.itemId);

	const [name, setName] = useState(item?.name ? item?.name : "Đm dương");
	const [age, setAge] = useState(item?.age ? item?.age : 3.8);
	return (
		<SafeAreaView style={[mainStyles.center90]}>
			<Form
				hasLabel={true}
				style={{ height: screenHeight * 0.7 }}
				name={name}
				age={age}
				additionalInfo="Ghi chú"
				additionalInfoInit=""
				setName={setName}
				setAge={setAge}
			/>
			<PinkButton
				text={"Cập nhật thông tin"}
				width={"100%"}
				center={false}
				// style={{ position: "absolute", bottom: 0 }}
			/>
		</SafeAreaView>
	);
};

const Baby = () => {
	const navigation = useNavigation<any>();

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Quản lý trẻ",
			headerLeft: BackButton,
			headerTitleStyle: {
				fontSize: 16,
				fontWeight: "700",
			},
			headerShown: true,
		});
	});

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="List"
				component={BabyList}
			/>
			<Stack.Screen
				name="Fix"
				component={Fixed}
			/>
		</Stack.Navigator>
	);
};

export default Baby;

const styles = StyleSheet.create({});
