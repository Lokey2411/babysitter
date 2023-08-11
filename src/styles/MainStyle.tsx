import { StyleSheet } from "react-native";
import { color } from "./Color";
import { logoSize } from "../const";

export const mainStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: 165,
		height: 125,
		alignSelf: "center",
		margin: "auto",
	},
	rowCenter: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	rowBetween: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	center90: {
		width: "90%",
		marginHorizontal: "5%",
	},
	title: {
		color: color.pink,
		fontWeight: "700",
		fontSize: 20,
	},
	avt: {
		width: logoSize,
		height: logoSize,
		borderRadius: logoSize / 2,
	},
});
