import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { AuthApi } from "../api/authApi";
import { IUserAuthModel } from "../models/authModels";
import { setAuthHeaders } from "../api/api";

export const useAuth = () => {
	const { token, addUser, removeUser, isAuth } = useUser();
	const { getItem } = useLocalStorage();

	useEffect(() => {
		const user = getItem("user");
		if (user) {
			addUser(JSON.parse(user));
		}
	}, []);

	const login = (user: IUserAuthModel) => {
		const resp = AuthApi.login(user);
		resp.then((response) => {
			if (response.data != null) {
				addUser(response.data);
				setAuthHeaders(response.data);
			}
		});
	};

	const logout = () => {
		removeUser();
	};

	return { token, login, logout, isAuth };
};
