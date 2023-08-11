import HomeTabs from "./screens/Stack/Tabs/HomeTabs";
import Chat from "./screens/Chat/Chat";
import Details from "./screens/LookUp/Details";
import { Stack } from "./const";
import Mother from "./screens/Info/Mother";
import Baby from "./screens/Info/Baby";
import Favorite from "./screens/Info/Favorite";
import Password from "./screens/Info/Password";
import LogIn from "./screens/Auth/LogIn";
import SignUp from "./screens/Auth/SignUp";
import Home from "./screens/Home";
import Edit from "./screens/Info/Edit";
import CalenderBooker from "./screens/LookUp/CalenderBooker";
import OTP from "./screens/Auth/OTP";

export const MainNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				headerShadowVisible: false,
			}}>
			<Stack.Screen
				name="Home"
				component={HomeTabs}
			/>
			<Stack.Screen
				name="Chat"
				component={Chat}
			/>

			<Stack.Screen
				name="Details"
				component={Details}
			/>
			<Stack.Screen
				name="Mother"
				component={Mother}
			/>
			<Stack.Screen
				name="Baby"
				component={Baby}
			/>
			<Stack.Screen
				name="Favorite"
				component={Favorite}
			/>
			<Stack.Screen
				name="Password"
				component={Password}
			/>
			<Stack.Screen
				name="Edit"
				component={Edit}
			/>
			<Stack.Screen
				name="CalenderBooker"
				component={CalenderBooker}
			/>
		</Stack.Navigator>
	);
};
