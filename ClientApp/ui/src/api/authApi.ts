import { IUserAuthModel } from "../models/authModels";
import Api from "./api";


export class AuthApi {
	
	static register(data: IUserAuthModel) {
		return Api.post<boolean>("Auth/Register", data);
	}

    static login(data: IUserAuthModel) {
		return Api.post<string>("Auth/Login", data);
	}
}
