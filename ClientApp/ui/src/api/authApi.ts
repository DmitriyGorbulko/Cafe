import { IUserAuthModel } from "../models/authModels";
import Api from "./api";


export class AuthApi {
	static register(data: IUserAuthModel) {
		return Api.post<boolean>("/register", data);
	}

    static login(data: IUserAuthModel) {
		return Api.post<string>("/login", data);
	}
}
