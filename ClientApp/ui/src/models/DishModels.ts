import { IIngredient } from "../components/MenuComponents/Ingredient/Ingredient";

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

export interface ICreateDish {
    title: string;
    description: string;
    categoryDishId: number;
    recipe: string;
  }

  export interface IUpdateDish {
    id : number
    title: string;
    description: string;
    recipe: string;
  }