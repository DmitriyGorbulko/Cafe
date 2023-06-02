import { IIngredient } from "../components/Ingredient/Ingredient";

export interface ICategoryDish {
    id : number;
    title : string;
}

export interface IDish{
    id: number;
    title: string;
    description: string;
    ingredients: IIngredient[];
    categoryName: string;
    img?: string;
}