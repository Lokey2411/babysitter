import Loading from "./src/screens/Loading";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./src/MainNavigator";
import {
	InitUserContextProvider,
	UserContext,
	UserContextTypes,
} from "./src/context/init";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/firebase/config";
import AuthStack from "./src/screens/Stack/AuthStack";
import {
	asyncStorage,
	getAsyncStorage,
	getUser,
	setAsyncStorage,
	userInfoIsSetted,
} from "./src/const";

// StatusBar.setBarStyle("dark-content", true);

const RootNavigator = () => {
	const [loading, setLoading] = useState(false);
	useLayoutEffect(() => {
		setTimeout(() => setLoading(true), 1000);
	});
	const { user, setUser, userInfo, setUserInfo } =
		useContext<UserContextTypes>(UserContext);
	useEffect(() => {
		const subcriber = onAuthStateChanged(auth, async (authUser) => {
			setUser(authUser ? authUser : null);
			if (userInfoIsSetted(authUser?.phoneNumber as string))
				await setUserInfo({
					...(await getUser(authUser?.phoneNumber)),
				});
			setLoading(false);
		});

		return () => subcriber();
	}, [user]);
	if (!loading) {
		return <Loading />;
	}
	return (
		<NavigationContainer>
			{/* <Tab.Navigator
				>	
			</Tab.Navigator> */}
			{user && userInfoIsSetted(userInfo.id) ? (
				<MainNavigator />
			) : (
				<AuthStack />
			)}
		</NavigationContainer>
	);
};

export default function App() {
	return (
		<InitUserContextProvider>
			<RootNavigator />
		</InitUserContextProvider>
	);
}
