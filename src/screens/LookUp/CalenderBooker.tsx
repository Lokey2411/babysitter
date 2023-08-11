import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { mainStyles } from "../../styles/MainStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { color } from "../../styles/Color";
import { screenHeight, screenWidth, timeConvert } from "../../const";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import { Profile2User, Timer1 } from "iconsax-react-native";
import FormItem from "../../components/FormItem";
import PinkButton from "../../components/PinkButton";
import PopUp from "../../components/PopUp";

const CalenderBooker = () => {
	const [date, setDate] = useState<any>(new Date());
	const [babies, setBabies] = useState([{ desc: "" }]);
	const [displayPopup, setDisplayPopup] = useState("none");
	const navigation = useNavigation<any>();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerTitleAlign: "center",
			title: "Đặt lịch",
			headerLeft: BackButton,
		});
	});

	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || date;
		// setShow(Platform.OS === "ios");
		setDate(currentDate);
	};
	const startDate = new Date();
	let endDate = new Date();
	endDate.setHours(endDate.getHours() + 3);
	const DatePickerField = () => {
		return (
			<>
				<Text style={[mainStyles.title, { marginBottom: 18 }]}>Chọn ngày</Text>
				<View style={{ backgroundColor: "rgba(2, 132, 199, 0.1)" }}>
					<DateTimePicker
						testID="dateTimePicker"
						timeZoneOffsetInMinutes={0}
						value={date}
						mode={"date"}
						display="inline"
						onChange={onChange}
						minimumDate={new Date()}
						accentColor={"#0284C7"}
						textColor="black"
					/>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignSelf: "flex-end",
						}}>
						<TouchableOpacity
							style={{
								paddingVertical: 10,
								paddingHorizontal: 12,
								marginVertical: 8,
								marginLeft: 12,
								marginRight: 8,
							}}>
							<Text style={{ color: "#48B0C8" }}>Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								paddingVertical: 10,
								paddingHorizontal: 12,
								marginVertical: 8,
								marginLeft: 12,
								marginRight: 8,
							}}>
							<Text style={{ color: "#50B0C8" }}>OK</Text>
						</TouchableOpacity>
					</View>
				</View>
			</>
		);
	};
	const addBaby = (baby: { desc: string }) => {
		setBabies([...babies, baby]);
	};
	const updateBaby = (index: number, desc: string) => {
		let newBaby = babies;
		newBaby[index].desc = desc;
		setBabies(newBaby);
	};
	const BabyInputField = (props: { index: number }) => {
		return (
			<View
				style={[
					mainStyles.rowBetween,
					{
						borderWidth: 1,
						borderColor: color.gray,
						padding: 4,
						paddingLeft: 16,
						borderRadius: 8,
						marginVertical: 8,
					},
				]}>
				<View>
					<Text style={{ color: color.boldedGray }}>Trẻ {props.index + 1}</Text>
					<TextInput
						placeholder="Tên trẻ, tuổi"
						onChangeText={(text: string) => updateBaby(props.index, text)}
					/>
				</View>
				<Profile2User
					size="24"
					color={color.boldedGray}
				/>
			</View>
		);
	};
	return (
		<ScrollView style={{ backgroundColor: "#fff", height: screenHeight }}>
			<SafeAreaView style={[mainStyles.center90]}>
				<StatusBar style="dark" />
				<DatePickerField />
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						width: "50%",
						marginBottom: 16,
					}}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<View
							style={{
								width: 8,
								height: 8,
								borderRadius: 4,
								marginRight: 4,
								backgroundColor: color.pink,
							}}></View>
						<Text>Chọn</Text>
					</View>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<View
							style={{
								width: 8,
								height: 8,
								borderRadius: 4,
								marginRight: 4,
								backgroundColor: color.blue,
							}}></View>
						<Text>Đã đặt lịch</Text>
					</View>
				</View>
				<Text
					style={[
						mainStyles.title,
						{
							marginBottom: 8,
						},
					]}>
					Chọn thời gian
				</Text>
				<View style={[mainStyles.rowBetween, { marginBottom: 16 }]}>
					<View
						style={{
							borderWidth: 1,
							borderColor: color.gray,
							borderRadius: 8,
							paddingVertical: 2,
							paddingLeft: 16,
							paddingRight: 4,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							width: "50%",
						}}>
						<View>
							<Text style={{ color: color.boldedGray }}>Từ</Text>
							<Text>{timeConvert(startDate)}</Text>
						</View>
						<Timer1
							size="24"
							color={color.gray}
						/>
					</View>
					<View
						style={{
							borderWidth: 1,
							borderColor: color.gray,
							borderRadius: 8,
							paddingVertical: 2,
							paddingLeft: 16,
							paddingRight: 4,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							width: "48%",
						}}>
						<View>
							<Text style={{ color: color.boldedGray }}>Từ</Text>
							<Text>{timeConvert(endDate)}</Text>
						</View>
						<Timer1
							size="24"
							color={color.gray}
						/>
					</View>
				</View>
				<Text
					style={[
						mainStyles.title,
						{
							marginBottom: 8,
						},
					]}>
					Trẻ em
				</Text>
				{babies.map((item, index) => (
					<BabyInputField
						index={index}
						key={index}
					/>
				))}
				<TouchableOpacity
					onPress={() => {
						addBaby({ desc: "" });
					}}>
					<Text style={{ color: color.boldedGray }}>+ Thêm trẻ khác</Text>
				</TouchableOpacity>
				<FormItem
					text="Địa chỉ"
					placeholder="Địa chỉ"
				/>
				<FormItem
					text="Ghi chú"
					style={{
						height: 104,
						borderWidth: 1,
						borderColor: color.gray,
						borderRadius: 8,
					}}
				/>
				<PinkButton
					center={false}
					text="Đặt lịch"
					width={"100%"}
					onPress={() => {
						setDisplayPopup("block");
					}}
				/>
			</SafeAreaView>
			<PopUp.SuccessBook
				display={displayPopup}
				setDisplay={setDisplayPopup}
			/>
		</ScrollView>
	);
};

export default CalenderBooker;

const styles = StyleSheet.create({});
