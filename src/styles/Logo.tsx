import { Image, Text, View } from "react-native";
import { mainStyles } from "./MainStyle";
import { color } from "./Color";

export const WhiteLogo = () => {
	return (
		<View style={[mainStyles.container]}>
			<Image
				source={require("../../assets/image/logo/white-logo.jpg")}
				style={mainStyles.logo}
			/>
		</View>
	);
};

export const PinkLogo = () => (
	<View>
		<Image
			source={require("../../assets/image/logo/pink-logo.jpg")}
			style={mainStyles.logo}
		/>
	</View>
);
