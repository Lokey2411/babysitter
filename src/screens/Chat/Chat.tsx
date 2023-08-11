import {
	Image,
	Platform,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
} from "react-native";
import React, {
	useCallback,
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
} from "react";
import {
	Bubble,
	GiftedChat,
	InputToolbar,
	MessageProps,
	Send,
	Time,
} from "react-native-gifted-chat";
import {
	chatsRef,
	details,
	screenHeight,
	screenWidth,
	timeConvert,
} from "../../const";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { mainStyles } from "../../styles/MainStyle";
import { color } from "../../styles/Color";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "../../components/BackButton";
import { AttachCircle, Camera, Send2 } from "iconsax-react-native";
import { auth, firestore } from "../../firebase/config";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocFromCache,
	getDocsFromCache,
	onSnapshot,
	orderBy,
	query,
	updateDoc,
} from "firebase/firestore";
import { UserContext } from "../../context/init";

const Chat = () => {
	const [newMessages, setNewMessages] = useState("");
	const route = useRoute<any>();
	const receiverID = route?.params?.id;

	const receiver = details.find((item) => item.id === receiverID);
	const [messages, setMessages] = useState(new Array(0));

	const navigation = useNavigation();
	const { userInfo } = useContext(UserContext);
	const docRef = doc(firestore, "data", userInfo.id);
	const [userLoggedIn, setUserLoggedIn] = useState<any>(null);

	const updateUserLoggedIn = async () =>
		setUserLoggedIn((await getDoc(docRef)).data());
	try {
		updateUserLoggedIn();
	} catch (error) {
		console.log(error);
	}
	// console.log("user: ", userLoggedIn);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerLeft: () => {
				return (
					<View
						style={[
							{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								height: 48,
							},
						]}>
						<BackButton />
						<Image
							source={receiver?.avt}
							style={{
								marginHorizontal: 12,
								width: 40,
								height: 40,
								borderRadius: 999,
							}}
						/>
						<View>
							<Text>{receiver?.name}</Text>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<View
									style={{
										width: 6,
										height: 6,
										borderRadius: 6,
										backgroundColor: color.darkerGreen,
										marginRight: 4,
									}}></View>
								<Text
									style={{
										fontSize: 12,
										lineHeight: 18,
										fontWeight: "400",
									}}>
									Online
								</Text>
							</View>
						</View>
					</View>
				);
			},
			title: "",
		});
		const q = query(chatsRef, orderBy("createAt", "desc"));
		const unsubcribe = onSnapshot<any, any>(q, (snapshot: any) => {
			setMessages(
				snapshot.docs.map((item: any) => {
					return {
						_id: item.id,
						createAt: item.data().createAt,
						text: item.data().text,
						user: item.data().user,
					};
				})
			);
			return unsubcribe;
		});
	}, [navigation, auth]);

	const onSend = useCallback(
		async (messages: any) => {
			try {
				setMessages((previousMessages) =>
					GiftedChat.append(previousMessages, messages)
				);
				setNewMessages("");
				const { _id, text, user } = messages[0];
				await addDoc(chatsRef, {
					_id,
					createAt: Date.now(),
					text,
					user,
				});
				// console.log(_id);
			} catch (error) {
				console.log(error);
			}
		},
		[messages]
	);
	const renderMessage = (props: any) => {
		const { text } = props.currentMessage;
		// console.log();

		const isSender = props.currentMessage.user._id === userLoggedIn?.id;
		const time = timeConvert(new Date(props.currentMessage.createAt));
		if (isSender)
			// sender
			return (
				<View>
					<View
						style={{
							flexDirection: "row-reverse",
							backgroundColor: color.pink,
							alignSelf: "flex-end",
							padding: 8,
							borderTopLeftRadius: 8,
							borderTopRightRadius: 8,
							borderBottomLeftRadius: 8,
							marginVertical: 10,
						}}>
						<Text style={{ color: color.white }}>{text}</Text>
					</View>
					<Text
						style={{
							color: color.boldedGray,
							textAlign: "right",
						}}>{`${time}`}</Text>
				</View>
			);
		// not sender
		return (
			<View>
				<View
					style={{
						flexDirection: "row",
						backgroundColor: color.gray,
						alignSelf: "flex-start",
						padding: 8,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						borderBottomRightRadius: 8,
						marginBottom: 4,
					}}>
					<Text style={{ color: "#000" }}>{text}</Text>
				</View>
				<Text
					style={{
						color: color.boldedGray,
						marginBottom: 8,
					}}>{`${time}`}</Text>
			</View>
		);
	};
	const renderSend = (props: any) => {
		const { text, messageIdGenerator, user } = props;

		return (
			<TouchableOpacity
				style={{
					backgroundColor: color.pink,
					padding: 8,
					borderRadius: 10,
					margin: 4,
				}}
				onPress={() => {
					if (text)
						props.onSend({
							_id: messageIdGenerator,
							text: text,
							user: user,
						});
				}}>
				<Send2
					size="28"
					color="#fff"
				/>
			</TouchableOpacity>
		);
	};
	return (
		<View
			style={[
				{
					flex: 1,
					backgroundColor: "#fff",
					paddingHorizontal: 16,
					paddingBottom: 21,
				},
			]}>
			<GiftedChat
				messages={messages}
				onSend={onSend}
				user={{
					_id: userLoggedIn?.id,
					name: userLoggedIn?.name,
					avatar: require("../../../assets/image/avt/mc.jpg"),
				}}
				messagesContainerStyle={{
					// padding: 300,
					backgroundColor: color.white,
				}}
				// alwaysShowSend={true}
				renderMessage={renderMessage}
				isTyping
				placeholder="Nội dung ..."
				renderSend={renderSend}
				text={newMessages}
				onInputTextChanged={(text) => setNewMessages(text)}
				renderActions={() => (
					<View
						style={[
							mainStyles.rowBetween,
							{
								width: "20%",
								borderRightWidth: 1,
								borderRightColor: color.boldedGray,
								marginBottom: 10,
								paddingHorizontal: 8,
							},
						]}>
						<TouchableOpacity>
							<AttachCircle
								size="24"
								color="black"
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Camera
								size="24"
								color="black"
							/>
						</TouchableOpacity>
					</View>
				)}
				renderInputToolbar={(props: any) => {
					return (
						<InputToolbar
							{...props}
							primaryStyle={{
								fontSize: 20,
								backgroundColor: color.gray,
								borderRadius: 8,
								alignItems: "center",
								justifyContent: "center",
								alignSelf: "center",
								alignContent: "center",
							}}
							containerStyle={[
								// mainStyles.center90,
								{
									backgroundColor: color.gray,
									borderRadius: 8,
									// paddingTop: 8,
								},
							]}
						/>
					);
				}}
			/>
		</View>
	);
};

export default Chat;
