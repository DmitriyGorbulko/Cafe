import { ICreateDish, IDish, IUpdateDish } from "../models/DishModels";
import Api from "./api";

export class dishApi {
   
    static create(dish: ICreateDish) {
        return Api.post<IDish>(`Dish/Create`, dish);
    }
    
    static get(id: number) {
        return Api.get<IDish>(`Dish/Get/${id}`);
    }

	static getAll() {
		return Api.get<IDish[]>("Dish/GetAll");
	}
	
	static getDishByCategoryId(categoryId: number) {
		return Api.get<IDish[]>(`Dish/GetDishByCategoryId/${categoryId}`);
	}
	
    static update(dish: IUpdateDish) {
		return Api.put<IDish>(`Dish/Update`, dish);
	}
}