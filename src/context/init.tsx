import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { createContext, useState } from "react";
import { firestore } from "../firebase/config";
import { asyncStorage, getUser, setAsyncStorage } from "../const";

export interface UserContextTypes {
	user: any;
	setUser: Function;
	favIds: Array<any>;
	addFavoriteID: Function;
	removeFavoriteID: Function;
	userIsMommy: boolean;
	setIsMommy: Function;
	userInfo: {
		name?: string | null;
		age?: string | null;
		address?: any;
		id?: any;
		gender?: string;
		favIds?: string[];
	};
	setUserInfo: Function;
	userInfoIsSetted: boolean;
	phoneNumber: any;
	setPhoneNumber: Function;
	userGender: string;
	setUserGender: Function;
}

export const UserContext = createContext<UserContextTypes>({
	user: {},
	setUser: ({}) => {},
	favIds: [],
	addFavoriteID: (id: any) => {},
	removeFavoriteID: (id: any) => {},
	userIsMommy: false,
	setIsMommy: (isMommy: any) => {},
	userInfo: {},
	userInfoIsSetted: false,
	setUserInfo: () => {},
	phoneNumber: "",
	setPhoneNumber: () => {},
	userGender: "",
	setUserGender: () => {},
});

export const InitUserContextProvider = (props: any) => {
	const [user, setUser] = useState({
		userID: 0,
		isMommy: false,
	});
	const [userInfo, setUserInfo] = useState({
		name: "",
		age: "",
		address: "",
		id: "",
	});
	const [favouriteMealsID, setFavouriteMealsID] = useState<any>([]);
	const [isMommy, setIsMommy] = useState(false);
	const [userInfoIsSetted, setUserInfoIsSetted] = useState(
		!!asyncStorage.getItem("token")
	);
	const addFavourite = async (id: any) => {
		const newFavData = [...favouriteMealsID, id];
		setFavouriteMealsID(newFavData);
		await onUserInfoChange({
			...userInfo,
			favouriteMealsID: newFavData,
		});
	};
	const removeFavourite = async (id: any) => {
		const newFavData = favouriteMealsID.filter((item: any) => item !== id);
		setFavouriteMealsID(newFavData);
		await onUserInfoChange(newFavData);
	};
	const [phoneNumber, setPhoneNumber] = useState("");
	const [userGender, setUserGender] = useState<any>("");
	const onUserInfoChange = async (user: any) => {
		try {
			setUserInfo(user);
			const userLoggedIn = doc(firestore, "data", user.id);
			setUserInfoIsSetted(!!user);
			await setDoc(userLoggedIn, user);
			await setAsyncStorage("token", JSON.stringify(user));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<UserContext.Provider
			value={{
				user: user,
				setUser,
				favIds: favouriteMealsID,
				addFavoriteID: addFavourite,
				removeFavoriteID: removeFavourite,
				userIsMommy: isMommy,
				setIsMommy: setIsMommy,
				userInfo,
				setUserInfo: onUserInfoChange,
				userInfoIsSetted,
				phoneNumber,
				setPhoneNumber,
				userGender,
				setUserGender,
			}}
			// value={[context, setContext]}
		>
			{props.children}
		</UserContext.Provider>
	);
};
