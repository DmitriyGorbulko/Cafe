import { ICategoryDishProps } from "../components/MenuComponents/CategoryDish/CategoryDish";
import Api from "./api";

export class CategoryDishApi {

	static create(dish: ICategoryDishProps) {
        return Api.post<ICategoryDishProps>(`CategoryDish/Create`, dish);
    }

	static getAll() {
		return Api.get<ICategoryDishProps[]>("CategoryDish/GetAll");
	}
	
	static getCategoryDishById(id: number) {
		return Api.get<ICategoryDishProps>(`CategoryDish/Get/${id}`);
	}

	static update(dish: ICategoryDishProps) {
		return Api.put<ICategoryDishProps>(`CategoryDish/Update`, dish);
	}
}
