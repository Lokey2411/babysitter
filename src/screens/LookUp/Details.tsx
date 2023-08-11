import {
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { mainStyles } from "../../styles/MainStyle";
import { Entypo, Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { color } from "../../styles/Color";
import { details, screenWidth } from "../../const";
import { MaterialIcons } from "@expo/vector-icons";
import PinkButton from "../../components/PinkButton";
import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect, useState } from "react";
import { UserContext } from "../../context/init";
import BackButton from "../../components/BackButton";
import { MessageText1 } from "iconsax-react-native";

const imgSize = 64;
const starSize = 16;

const Details = ({ route }: any) => {
	const navigation = useNavigation<any>();
	const item = details.find((item) => item.id === route.params.id);
	const favoriteContext = useContext(UserContext);
	const rate = item?.rate || 0;
	const isFavorited = favoriteContext.favIds?.includes(item?.id);
	const createStar = (rate: number) => {
		const fullStar = Math.floor(rate);
		const emptyStar = Math.floor(5 - rate);

		const stars = new Array<any>(0);
		for (let i = 0; i < fullStar; i++) {
			stars.push(
				<Ionicons
					name="star-sharp"
					size={starSize}
					color={color.orange}
				/>
			);
		}
		if (!Number.isInteger(rate))
			stars.push(
				<Ionicons
					name="star-half-sharp"
					size={starSize}
					color={color.orange}
				/>
			);
		for (let i = 0; i < emptyStar; i++)
			stars.push(
				<Ionicons
					name="star-outline"
					size={starSize}
					color={color.orange}
				/>
			);
		return stars;
	};
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			title: "Thông tin",
			headerLeft: BackButton,
			headerTitleStyle: {
				fontSize: 16,
			},
			headerRight: () => {
				return (
					<TouchableOpacity
						onPress={() => {
							if (isFavorited) {
								favoriteContext.removeFavoriteID(item?.id);
							} else favoriteContext.addFavoriteID(item?.id);
						}}>
						<AntDesign
							name={isFavorited ? "heart" : "hearto"}
							size={24}
							color="black"
						/>
					</TouchableOpacity>
				);
			},
		});
	});
	// console.log(stars);

	// setStars(stars);
	const RatingStars = ({ stars }: any) => (
		<FlatList
			data={stars}
			renderItem={({ item }) => item}
			keyExtractor={(item, index) => index.toString()}
			horizontal={true}
		/>
	);
	const CommentItem = (props: any) => {
		return (
			<ScrollView style={{ marginBottom: 20 }}>
				<View style={mainStyles.rowBetween}>
					<Image
						source={props.avt}
						style={{ width: 48, height: 48, borderRadius: 24 }}
					/>
					<View>
						<Text>{props.name}</Text>
						<RatingStars stars={createStar(props.rateGifted)} />
					</View>
					<Text style={{ color: color.boldedGray }}>{props.date}</Text>
				</View>
				<View>
					<Text numberOfLines={3}>{props.text}</Text>
				</View>
			</ScrollView>
		);
	};
	return (
		<View style={{ margin: 15, flex: 1 }}>
			<View style={[mainStyles.rowBetween]}>
				<Image
					source={item?.avt}
					style={styles.avatar}
				/>
				<View>
					<Text>{item?.name}</Text>
					<View
						style={[
							mainStyles.rowBetween,
							{ alignItems: "center", width: 60 },
						]}>
						<Entypo
							name="location-pin"
							size={starSize}
							color="black"
						/>
						<Text>{item?.location}</Text>
					</View>
					<Text>{item?.exp}</Text>
				</View>
				<View>
					<Text style={{ color: color.pink, marginBottom: 20 }}>
						{item?.price}
					</Text>
					<RatingStars stars={createStar(rate)} />
				</View>
			</View>
			{item?.isBooked && (
				<PinkButton
					text="Đánh giá"
					width={"100%"}
					center={false}
				/>
			)}
			<Text style={[mainStyles.title, { marginVertical: 12 }]}>
				Kinh nghiệm
			</Text>
			<Text>{item?.worked}</Text>
			<Text style={[mainStyles.title, { marginVertical: 12 }]}>Giới thiệu</Text>
			<Text>{item?.desc}</Text>
			<Text style={[mainStyles.title, { marginVertical: 12 }]}>Nhận xét</Text>
			<FlatList
				data={item?.cmts}
				renderItem={({ item }) => <CommentItem {...item} />}
				keyExtractor={(comment, index) => index.toString()}
			/>
			<View
				style={{
					// position: "absolute",l
					// bottom: 0,
					flexDirection: "row",
					alignItems: "center",
				}}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Chat", { id: item?.id })}>
					<MessageText1
						size="32"
						color={color.pink}
					/>
				</TouchableOpacity>
				<PinkButton
					text="Đặt lịch ngay"
					center={false}
					width={screenWidth * 0.85}
					onPress={() =>
						!item?.isBooked && navigation.navigate("CalenderBooker")
					}
				/>
			</View>
		</View>
	);
};

export default Details;

const styles = StyleSheet.create({
	avatar: {
		width: imgSize,
		height: imgSize,
		borderRadius: imgSize / 2,
	},
});
