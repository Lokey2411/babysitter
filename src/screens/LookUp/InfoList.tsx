import {
	FlatList,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import NearByLookUp from "../../components/NearByLookUp";
import { details, mockupData, screenWidth } from "../../const";
import InfoItem from "../../components/InfoItem";
import LookUpDetails from "./LookUpDetails";

const InfoList = () => {
	return (
		<View>
			<NearByLookUp />
			<LookUpDetails data={details} />
		</View>
	);
};

export default InfoList;

const styles = StyleSheet.create({});
