import {
	FlatList,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React from "react";
import { mainStyles } from "../../styles/MainStyle";
import InfoItem from "../../components/InfoItem";
import { mockupData, screenWidth } from "../../const";
import { EvilIcons } from "@expo/vector-icons";
import { color } from "../../styles/Color";
import NearByLookUp from "../../components/NearByLookUp";
import { MaterialIcons } from "@expo/vector-icons";

const LookUpDetails = (props: any) => {
	return (
		<SafeAreaView>
			<View>
				<FlatList
					data={props.data}
					renderItem={({ item }) => (
						<InfoItem
							{...item}
							width={screenWidth * 0.9}
							center={true}
							itemId={item.id}
						/>
					)}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		</SafeAreaView>
	);
};

export default LookUpDetails;

const styles = StyleSheet.create({});
