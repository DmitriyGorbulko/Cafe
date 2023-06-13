import { ICategoryDishProps } from "../components/MenuComponents/CategoryDish/CategoryDish";
import Api from "./api";

export class CategoryDishApi {
	static getAll() {
		return Api.get<ICategoryDishProps[]>("CategoryDish/GetAll");
	}
	
	static getCategoryDishById(id: number) {
		return Api.get<ICategoryDishProps[]>(`CategoryDish/Get/${id}`);
	}
}
