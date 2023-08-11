import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { details, screenWidth, userLogedIn } from "../../const";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyles } from "../../styles/MainStyle";
import InputField, { InputFieldProps } from "../../components/InputField";
import FormItem, { FormItemProps } from "../../components/FormItem";
import { color } from "../../styles/Color";
import GenderField from "../../components/GenderField";
import PinkButton from "../../components/PinkButton";
import { FormProps } from "./Baby";

export interface ThisFormProps extends InputFieldProps {
	defaultValue: string;
}

const ThisFormItem = (props: ThisFormProps) => {
	return (
		<InputField
			backgroundColor="#fff"
			defaultValue={props.defaultValue}
			style={[
				{
					borderWidth: 1,
					borderColor: color.gray,
					marginBottom: 16,
					borderRadius: 8,
					padding: 8,
				},
			]}
		/>
	);
};

const Edit = () => {
	const navigation = useNavigation<any>();
	const item = userLogedIn;
	const avtSize = screenWidth * 0.3;
	const formItem = [item.name, "penaldu@test.ru", item.age, item.phoneNumber];
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerTitle: "Sửa thông tin",
			headerLeft: () => {
				return (
					<TouchableOpacity onPress={navigation.goBack}>
						<FontAwesome
							name="angle-left"
							size={30}
							color="black"
						/>
					</TouchableOpacity>
				);
			},
		});
	});

	const formFix: FormItemProps[] = [
		{
			text: "Kinh nghiệm",
			defaultValue: item.worked,
		},
		{
			text: "Số năm kinh nghiệm",
			placeholder: "Năm",
		},
		{
			text: "Giá trên giờ",
			placeholder: "Giá/giờ",
		},
	];

	return (
		<SafeAreaView style={{ backgroundColor: "#fff" }}>
			<ScrollView style={[mainStyles.center90]}>
				<Image
					source={item?.avt}
					style={[
						{
							width: avtSize,
							height: avtSize,
							borderRadius: avtSize / 2,
							alignSelf: "center",
							marginBottom: 32,
						},
					]}
				/>
				{formItem.map((item) => (
					<ThisFormItem
						defaultValue={item.toString()}
						backgroundColor="#fff"
					/>
				))}
				<FormItem
					text="Giới thiệu"
					defaultValue={item.desc}
					style={[
						{
							height: 200,
							backgroundColor: color.gray,
							borderRadius: 8,
						},
					]}
				/>
				<GenderField />
				{formFix.map((item) => (
					<FormItem {...item} />
				))}
				<PinkButton
					text="Cập nhật thông tin"
					width={"100%"}
					center={false}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Edit;

const styles = StyleSheet.create({});
