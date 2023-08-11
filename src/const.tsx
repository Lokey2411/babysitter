import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { collection, doc } from "firebase/firestore";
import { Dimensions, TouchableOpacity } from "react-native";
import { firestore } from "./firebase/config";

export const screenWidth = Dimensions.get("window").width;
export const mockupData = [
	{
		id: Math.random(),
		avt: require("../assets/image/avt/mc.jpg"),
		name: "Title",
		desc: "Description of the title",
		rate: 4.8,
		location: "Hà Nội",
		exp: "5+ năm làm việc",
		price: "200k/giờ",
	},
	{
		id: Math.random(),
		avt: require("../assets/image/avt/mc.jpg"),
		name: "Title",
		desc: "Description of the title",
		rate: 4.8,
		location: "Hà Nội",
		exp: "5+ năm làm việc",
		price: "200k/giờ",
	},
	{
		id: Math.random(),
		avt: require("../assets/image/avt/mc.jpg"),
		name: "Title",
		desc: "Description of the title",
		rate: 4.8,
		location: "Hà Nội",
		exp: "5+ năm làm việc",
		price: "200k/giờ",
	},
	{
		id: Math.random(),
		avt: require("../assets/image/avt/mc.jpg"),
		name: "Title",
		desc: "Description of the title",
		rate: 4.8,
		location: "Hà Nội",
		exp: "5+ năm làm việc",
		price: "200k/giờ",
	},
	{
		id: Math.random(),
		avt: require("../assets/image/avt/mc.jpg"),
		name: "Title",
		desc: "Description of the title",
		rate: 4.8,
		location: "Hà Nội",
		exp: "5+ năm làm việc",
		price: "200k/giờ",
	},
	{
		id: Math.random(),
		avt: require("../assets/image/avt/mc.jpg"),
		name: "Title",
		desc: "Description of the title",
		rate: 4.8,
		location: "Hà Nội",
		exp: "5+ năm làm việc",
		price: "200k/giờ",
	},
	{
		id: Math.random(),
		avt: require("../assets/image/avt/mc.jpg"),
		name: "Title",
		desc: "Description of the title",
		rate: 4.8,
		location: "Hà Nội",
		exp: "5+ năm làm việc",
		price: "200k/giờ",
	},
];

const itemIsBooked = Math.floor(Math.random() * mockupData.length);

export const details = mockupData.map((item, index) => {
	return {
		...item,
		age: 30,
		cmts: new Array(Math.floor(Math.random() * 10 + 1)).fill({
			name: "MC",
			avt: require("../assets/image/avt/mc.jpg"),
			date: "2 ngày trước",
			rateGifted: 4.5,
			text: "Dm duong",
		}),
		worked: "VNPT xin han hanh tai tro chuong trinh nay",
		isBooked: index === itemIsBooked,
		phoneNumber: "0345622467",
	};
});

export const suggestData = [details[0], details[1], details[2]];

const sortedByRate = mockupData;
sortedByRate.sort((a, b) => a["rate"] - b["rate"]);
sortedByRate.reverse();

export const highRate = sortedByRate;

export const sortByRateData = [details[0], details[1], details[2]];

export const logoSize = 48;

export const Tab = createBottomTabNavigator();
export const Stack = createNativeStackNavigator();
export const screenHeight = Dimensions.get("screen").height;

export const baby = [
	{
		avt: require("../assets/image/avt/baby.jpg"),
		name: "Penaldu",
		age: 3.8,
		itemId: Math.random(),
	},
	{
		avt: require("../assets/image/avt/baby.jpg"),
		name: "Penaldu",
		age: 3.8,
		itemId: Math.random(),
	},
	{
		avt: require("../assets/image/avt/baby.jpg"),
		name: "Penaldu",
		age: 3.8,
		itemId: Math.random(),
	},
];

let endDate = new Date();
const endHour = endDate.getHours();
endDate.setHours(endHour + 3);

let babe = new Array(10).fill({
	avt: require("../assets/image/avt/baby.jpg"),
	name: "Penaldu",
	age: 3.8,
	gender: "Khạc",
	bookDate: new Date(),
	location: "Hà Nội",
	desc: "Rigged world cup, Rigged FIFA\nWhere is my penalty\nSaudi League is better than MLS\nPendu is at Serie A at the age of 35",
	endDate: endDate,
});

babe = babe.map((item) => {
	return {
		...item,
		babyId: Math.random(),
	};
});

export const babies = babe;

export const userId = details.map((item) => item.id);

export const notices = new Array(10).fill({
	avt: require("../assets/image/avt/baby.jpg"),
	name: "Penaldu",
	bookStart: new Date(),
	bookEnd: endDate,
});

export const dateConvert = (day: Date) => {
	const date = day.getDate();
	const month = day.getMonth();
	const year = day.getFullYear();
	return `${date}/${month}/${year}`;
};

export const timeConvert = (date: Date) => {
	let hour = date.getHours();
	const ampm = hour >= 12 ? "PM" : "AM";
	hour = hour >= 12 ? hour - 12 : hour;
	const minute = date.getMinutes();
	const validate = (time: number) => {
		let result = `${time}`;
		if (time < 10) {
			result = `0${time}`;
		}
		return `${result}`;
	};
	const realHour = validate(hour);
	const realMinute = validate(minute);
	return `${realHour}:${realMinute}${ampm}`;
};

export const chatsRef = collection(firestore, "chats");
export const dataCollection = collection(firestore, "data");
export function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1);
}
