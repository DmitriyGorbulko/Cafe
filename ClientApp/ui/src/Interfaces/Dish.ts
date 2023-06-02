import { IIngredient } from "../components/Ingredient/Ingredient";

interface IDish{
    id: number;
    title: string;
    description: string;
    ingredients: IIngredient[];
    categoryName: string;
    img: string;
}