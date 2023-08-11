import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { mainStyles } from "../../styles/MainStyle";
import NearByLookUp from "../../components/NearByLookUp";
import LookUpDetails from "./LookUpDetails";
import { color } from "../../styles/Color";
import { screenWidth, sortByRateData, suggestData } from "../../const";
import InfoItem from "../../components/InfoItem";
import { useNavigation } from "@react-navigation/native";

const LookUp = () => {
	const navigation = useNavigation<any>();
	// setIsDetail(false);
	return (
		<SafeAreaView>
			<NearByLookUp />
			<>
				<View
					style={[
						mainStyles.rowBetween,
						{ marginTop: 40 },
						mainStyles.center90,
					]}>
					<Text style={{ color: color.pink, fontWeight: "700", fontSize: 20 }}>
						Gợi ý
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("InfoList")}>
						<Text style={{ color: color.boldedGray }}>Xem thêm</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={suggestData}
					renderItem={({ item }) => (
						<InfoItem
							{...item}
							id={"abc"}
							itemId={item.id}
							width={screenWidth * 0.7}
							center={false}
						/>
					)}
					horizontal={true}
				/>
				<View
					style={[
						mainStyles.rowBetween,
						{ marginTop: 40 },
						mainStyles.center90,
					]}>
					<Text style={{ color: color.pink, fontWeight: "700", fontSize: 20 }}>
						Top đánh giá
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("InfoList")}>
						<Text style={{ color: color.boldedGray }}>Xem thêm</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={sortByRateData}
					renderItem={({ item }) => (
						<InfoItem
							{...item}
							id={"abc"}
							itemId={item.id}
							width={screenWidth * 0.7}
							center={false}
						/>
					)}
					horizontal={true}
				/>
			</>
		</SafeAreaView>
	);
};

export default LookUp;

const styles = StyleSheet.create({});
