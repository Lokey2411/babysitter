import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LookUpDetails from "./LookUpDetails";
import { highRate } from "../../const";

const HighRateList = () => {
	return <LookUpDetails data={highRate} />;
};

export default HighRateList;

const styles = StyleSheet.create({});
