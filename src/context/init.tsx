import { doc, setDoc } from "firebase/firestore";
import React, { createContext, useState } from "react";
import { firestore } from "../firebase/config";

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
	};
	setUserInfo: Function;
	userInfoIsSetted: boolean;
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
	const [userInfoIsSetted, setUserInfoIsSetted] = useState(false);
	const addFavourite = (id: any) => {
		setFavouriteMealsID([...favouriteMealsID, id]);
	};
	const removeFavourite = (id: any) => {
		setFavouriteMealsID((currentFavIDs: any) =>
			currentFavIDs.filter((item: any) => item !== id)
		);
	};
	const onUserInfoChange = (user: any) => {
		// console.log(userInfo.id);

		// console.log("Hello");
		setUserInfo(user);
		const userLoggedIn = doc(firestore, "data", userInfo.id);
		setUserInfoIsSetted(true);
		setDoc(userLoggedIn, user);
	};
	return (
		<UserContext.Provider
			value={{
				user: user,
				setUser: setUser,
				favIds: favouriteMealsID,
				addFavoriteID: addFavourite,
				removeFavoriteID: removeFavourite,
				userIsMommy: isMommy,
				setIsMommy: setIsMommy,
				userInfo,
				setUserInfo: onUserInfoChange,
				userInfoIsSetted,
			}}
			// value={[context, setContext]}
		>
			{props.children}
		</UserContext.Provider>
	);
};
