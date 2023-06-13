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
	}, [addUser, getItem]);

	const login = async (user: IUserAuthModel)  => {
		const resp = AuthApi.login(user);
		return await resp.then((response) => {
			if (response.data != null) {
				addUser(response.data);
				setAuthHeaders(response.data);
				return null
			}else{
				return  'Ошибка входа';
			}
			
		}).catch((err) => {
			return 'Ошибка входа';
		});
	};

	const logout = () => {
		removeUser();
	};

	return { token, login, logout, isAuth };
};
