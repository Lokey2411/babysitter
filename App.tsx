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

// StatusBar.setBarStyle("dark-content", true);

const RootNavigator = () => {
	const [loading, setLoading] = useState(false);
	useLayoutEffect(() => {
		setTimeout(() => setLoading(true), 1000);
	});
	const { user, setUser, userInfoIsSetted } =
		useContext<UserContextTypes>(UserContext);
	useEffect(() => {
		const subcriber = onAuthStateChanged(auth, async (user) => {
			console.log(userInfoIsSetted);
			if (userInfoIsSetted) setUser(user ? user : null);

			setLoading(false);
		});

		return () => subcriber();
	}, [user, userInfoIsSetted]);
	if (!loading) {
		return <Loading />;
	}
	return (
		<NavigationContainer>
			{/* <Tab.Navigator
				>
				
			</Tab.Navigator> */}
			{user && userInfoIsSetted ? <MainNavigator /> : <AuthStack />}
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
