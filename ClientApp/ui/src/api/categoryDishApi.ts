import { ICategoryDishProps } from "../components/CategoryDish/CategoryDish";
import Api from "./api";

export class CategoryDishApi {
	static getAll() {
		return Api.get<ICategoryDishProps[]>("/get_all_category_dishes");
	}
}
