import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext } from "react";
import { mainStyles } from "../styles/MainStyle";
import { Fontisto } from "@expo/vector-icons";
import { color } from "../styles/Color";
import { StatusBar } from "expo-status-bar";
import PinkButton from "../components/PinkButton";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/init";
import { userLogedIn, userId } from "../const";

const Home = () => {
	const userContext = useContext(UserContext);
	const { userIsMommy, setIsMommy } = userContext;
	const navigation = useNavigation<any>();

	return (
		<ImageBackground
			style={[mainStyles.container]}
			source={require("../../assets/image/background/Home.jpg")}
			resizeMode="cover"
			blurRadius={1.5}>
			<StatusBar style="light" />
			<View style={{ height: "90%" }}></View>
			<View style={mainStyles.rowCenter}>
				<PinkButton
					text={"Tìm người trông trẻ"}
					width={"auto"}
					center={false}
					onPress={() => {
						// setIsMommy(true);
						navigation.navigate("Login");
					}}
				/>
				<TouchableOpacity
					onPress={() => {
						setIsMommy(true);
						navigation.navigate("Login");
					}}>
					<Text style={{ fontSize: 16, color: color.pink }}>
						Tôi là người trông trẻ?
					</Text>
				</TouchableOpacity>
				<Fontisto
					name="angle-right"
					size={16}
					color={color.white}
				/>
			</View>
		</ImageBackground>
	);
};

export default Home;

const styles = StyleSheet.create({});
