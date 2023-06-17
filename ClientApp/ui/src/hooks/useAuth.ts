import { useEffect, useState } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { AuthApi } from "../api/authApi";
import { IUserAuthModel } from "../models/authModels";
import { setAuthHeaders } from "../api/api";

export const useAuth = () => {
	const { addUser, removeUser } = useUser();
	const { getItem } = useLocalStorage();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	let isAuth = isAuthenticated;
	
	useEffect(() => {
		const user = getItem("token");
		if (user) {
			addUser(JSON.parse(user));
			setIsAuthenticated(true);
		}
	}, [addUser, getItem]);

	const login = async (user: IUserAuthModel)  => {
		const resp = AuthApi.login(user);
		return await resp.then((response) => {
			if (response.data != null) {
				addUser(response.data);
				setAuthHeaders(response.data);
				setIsAuthenticated(true);
				return null
			}else{
				return 'Ошибка входа';
			}
			
		}).catch((err) => {
			return 'Ошибка входа';
		});
	};

	const logout = () => {
		removeUser();
		setIsAuthenticated(false);
	};

	return { login, logout, isAuth };
};
