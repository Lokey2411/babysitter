import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { details, getUserLoggedIn, screenWidth } from "../../const";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyles } from "../../styles/MainStyle";
import InputField, { InputFieldProps } from "../../components/InputField";
import FormItem, { FormItemProps } from "../../components/FormItem";
import { color } from "../../styles/Color";
import GenderField from "../../components/GenderField";
import PinkButton from "../../components/PinkButton";
import { FormProps } from "./Baby";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase/config";
import { UserContext } from "../../context/init";

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
	const { userInfo } = useContext(UserContext);
	const docRef = doc(firestore, "data", userInfo.id);
	const item = getUserLoggedIn(userInfo.id);
	const avtSize = screenWidth * 0.3;
	const formItem = [
		userInfo?.name,
		"penaldu@test.ru",
		userInfo?.age,
		userInfo?.id,
	];
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
			defaultValue: item?.worked,
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
					defaultValue={item?.desc}
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
