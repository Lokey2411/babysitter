import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ArrowLeft2 } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const BackButton = () => {
	const navigation = useNavigation<any>();
	return (
		<TouchableOpacity onPress={navigation.goBack}>
			<ArrowLeft2
				size="40"
				color="#000"
			/>
		</TouchableOpacity>
	);
};

export default BackButton;

const styles = StyleSheet.create({});
