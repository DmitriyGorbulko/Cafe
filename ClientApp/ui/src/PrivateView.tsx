import { Home } from "./components/Home/Home";
import { EditMenu } from "./components/EditMenu/EditMenu";
import { EditTable } from "./components/EditTable/EditTable";
import { EditDish } from "./components/EditDish/EditDish";
import { EditIngredient } from "./components/EditIngredient/EditIngredient";
import { EditCategoryDish } from "./components/EditCategoryDish/EditCategoryDish";
import { EditCategoryIngredient } from "./components/EditCategoryIngresient/EditCategoryIngredient";
import { CreateCategoryIngredient } from "./components/CreateCategoryIngredient/CreateCategoryIngredient";
import { CreateCategoryDish } from "./components/CreateCategoryDish/CreateCategoryDish";
import { CreateIngredient } from "./components/CreateIngredient/CreateIngredient";
import { CreateDish } from "./components/CreateDish/CreateDish";
import { CategoryDishPage } from "./components/CategoryDishPage/CategoryDishPage";
import { DishPage } from "./components/DishPage/DishPage";
import { Basket } from "./components/Basket/Basket";
import { UpdateDish } from "./components/UpdateDish/UpdateDish";
import { Navigate, Route, Routes } from "react-router-dom";
import { Routes as PathRoutes } from "./Routes";

export const PrivateView = () => {
	return (
		<>
			<Routes>
				<Route path={PathRoutes.Create} Component={EditMenu} />
				<Route path={PathRoutes.Root} Component={Home} />
				<Route path={PathRoutes.EditCategoryIngredient} Component={EditCategoryIngredient}></Route>
				<Route path={PathRoutes.EditCategoryDish} Component={EditCategoryDish}></Route>
				<Route path={PathRoutes.EditIngredient} Component={EditIngredient}></Route>
				<Route path={PathRoutes.EditDish} Component={EditDish}></Route>
				<Route path={PathRoutes.EditTable} Component={EditTable}></Route>
				<Route path={PathRoutes.CreateCategoryIngredient} Component={CreateCategoryIngredient}></Route>
				<Route path={PathRoutes.CreateCategoryDish} Component={CreateCategoryDish}></Route>
				<Route path={PathRoutes.CreateIngredient} Component={CreateIngredient}></Route>
				<Route path={PathRoutes.CreateDish} Component={CreateDish}></Route>
				<Route path={PathRoutes.CategoryDish} Component={CategoryDishPage}></Route>
				<Route path={PathRoutes.GetDishes} Component={DishPage}></Route>
				<Route path={PathRoutes.Basket} Component={Basket}></Route>
				<Route path={PathRoutes.UpdateDish} Component={UpdateDish}></Route>
				<Route path="*" element={<Navigate replace to={PathRoutes.Root} />} />
			</Routes>
		</>
	);
};
