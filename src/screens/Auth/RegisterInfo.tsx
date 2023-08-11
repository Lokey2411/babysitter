import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import {
	ParamListBase,
	useNavigation,
	useRoute,
} from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera } from "iconsax-react-native";
import { signInWithCredential } from "firebase/auth";
import { auth, firestore } from "../../firebase/config";
import { color } from "../../styles/Color";
import { mainStyles } from "../../styles/MainStyle";
import DropDownPicker from "react-native-dropdown-picker";
import { Entypo } from "@expo/vector-icons";
import PinkButton from "../../components/PinkButton";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	where,
} from "firebase/firestore";
import { dataCollection } from "../../const";
import { UserContext } from "../../context/init";

interface RegisterFormProps extends TextInputProps {
	text: string;
	isSelect?: boolean | undefined;
	hasError?: boolean;
}

const error = "Bạn vui lòng nhập đầy đủ thông tin";

const RegisterFormItem = (props: RegisterFormProps) => {
	// // <DropDownPicker
	// 				open={open}
	// 				value={value}
	// 				items={guilds}
	// 				setOpen={setOpen}
	// 				setValue={setValue}
	// 				setItems={setGuilds}
	// 				placeholder="Quận"
	// 				style={{
	// 					width: "45%",
	// 				}}
	// 			/>
	return (
		<View
			style={{
				width: "100%",
			}}>
			<View
				style={{
					marginBottom: 4,
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
				<Text
					style={{
						color: color.boldedGray,
					}}>{`${props?.text} *`}</Text>
				{props.hasError && (
					<Text
						style={{
							fontSize: 12,
							lineHeight: 18,
							fontWeight: "400",
							color: color.messageError,
						}}>
						{error}
					</Text>
				)}
			</View>
			{!props.isSelect && (
				<TextInput
					{...props}
					style={{
						width: "100%",
						borderColor: color.gray,
						borderRadius: 4,
						marginBottom: 16,
						borderWidth: 1,
						height: 50,
						paddingHorizontal: 12,
						paddingVertical: 8,
						color: "#000",
						fontSize: 14,
					}}
					placeholderTextColor={color.boldedGray}
				/>
			)}
		</View>
	);
};

const RegisterInfo = () => {
	const [messageShow, setMessageShow] = useState(false);
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [open1, setOpen1] = useState(false);
	const [value1, setValue1] = useState(null);
	const [open2, setOpen2] = useState(false);
	const [value2, setValue2] = useState(null);
	const [guilds, setGuilds] = useState([
		{ label: "Cầu Giấy", value: "Cầu Giấy" },
		{ label: "Thanh Xuân", value: "Thanh Xuân" },
		{ label: "Đống Đa", value: "Đống Đa" },
	]);
	const [cities, setcities] = useState([
		{ label: "Hà Nội", value: "Hà Nội" },
		{ label: "Hải Phòng", value: "Hải Phòng" },
		{ label: "Sài Gòn", value: "Sài Gòn" },
	]);
	const navigation = useNavigation<any>();
	const route = useRoute<any>();
	const { phoneNumber } = route.params;
	const { setUserInfo } = useContext(UserContext);
	// console.log(dataCollection.id);
	// const q = query(
	// 	collection(firestore, "data")
	// 	// where("id", "==", phoneNumber)
	// );
	const dataRef = doc(firestore, "data", phoneNumber);
	// const data = getDocs(q);
	// console.log(data);
	//  dataCollection.id;

	const verifyInfo = () => {
		if (!name || !age || !value1 || !value2) {
			setMessageShow(true);
			return;
		}
		const data = {
			id: phoneNumber,
			name,
			age,
			address_city: value1 + ", " + value2,
		};

		// console.log(data);

		setMessageShow(false);

		// setDoc(dataRef, data);
		setUserInfo(data);
	};
	const formitems: Array<RegisterFormProps> = [
		{
			text: "Họ tên",
			placeholder: "Nhập họ tên",
			hasError: messageShow,
			onChangeText: (value) => {
				setName(value);
			},
			value: name,
			// isSelect: false,
		},
		{
			text: "Tuổi",
			placeholder: "Nhập tuổi",
			onChangeText: (value) => setAge(value),
			value: age,
			// isSelect: false,
		},
		{
			text: "Địa chỉ",
			isSelect: true,
		},
	];
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Thiết lập tài khoản",
			headerLeft: BackButton,
			headerShown: true,
		});
	});

	return (
		<SafeAreaView
			style={[
				{
					flex: 1,
					backgroundColor: "#fff",
					alignItems: "center",
				},
			]}>
			<TouchableOpacity
				style={{
					width: 96,
					height: 96,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 999,
					backgroundColor: color.gray,
					marginTop: 16,
					marginBottom: 27,
				}}>
				<Camera
					size="36"
					color="#000"
				/>
			</TouchableOpacity>
			<View style={mainStyles.center90}>
				{formitems.map((item) => (
					<RegisterFormItem
						{...item}
						key={item.text}
					/>
				))}
			</View>
			<View
				style={{
					width: "90%",
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
				<DropDownPicker
					items={guilds}
					value={value1}
					setValue={setValue1}
					open={open1}
					setOpen={setOpen1}
					placeholder="Quận"
					style={{
						width: 167,
						paddingHorizontal: 16,
						borderColor: color.gray,
						borderRadius: 4,
						paddingVertical: 12,
					}}
					placeholderStyle={{
						color: color.boldedGray,
					}}
					ArrowDownIconComponent={() => {
						return (
							<Entypo
								name="chevron-down"
								size={12}
								color={color.boldedGray}
							/>
						);
					}}
					containerStyle={{
						width: 167,
						borderWidth: 0,
						borderColor: "#fff",
					}}
					setItems={setGuilds}
				/>
				<DropDownPicker
					items={cities}
					value={value2}
					setValue={setValue2}
					open={open2}
					setOpen={setOpen2}
					placeholder="Thành Phố"
					style={{
						width: 167,
						paddingHorizontal: 16,
						borderColor: color.gray,
						borderRadius: 4,
						paddingVertical: 12,
					}}
					placeholderStyle={{
						color: color.boldedGray,
					}}
					setItems={setcities}
					ArrowDownIconComponent={() => {
						return (
							<Entypo
								name="chevron-down"
								size={12}
								color={color.boldedGray}
							/>
						);
					}}
					containerStyle={{
						width: 167,
						borderWidth: 0,
						borderColor: "#fff",
					}}
				/>
			</View>
			<PinkButton
				center={false}
				width={"90%"}
				text="Tiếp theo"
				onPress={verifyInfo}
			/>
		</SafeAreaView>
	);
};

export default RegisterInfo;

const styles = StyleSheet.create({});
