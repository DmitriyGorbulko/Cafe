import { Home } from "./components/Home/Home";
import { EditMenu } from "./components/ManagersComponents/EditMenu/EditMenu";
import { EditTable } from "./components/ManagersComponents/EditTable/EditTable";
import { EditDish } from "./components/ManagersComponents/EditDish/EditDish";
import { EditIngredient } from "./components/ManagersComponents/EditIngredient/EditIngredient";
import { EditCategoryDish } from "./components/ManagersComponents/EditCategoryDish/EditCategoryDish";
import { EditCategoryIngredient } from "./components/ManagersComponents/EditCategoryIngresient/EditCategoryIngredient";
import { CreateCategoryIngredient } from "./components/ManagersComponents/CreateCategoryIngredient/CreateCategoryIngredient";
import { CreateCategoryDish } from "./components/ManagersComponents/CreateCategoryDish/CreateCategoryDish";
import { CreateIngredient } from "./components/ManagersComponents/CreateIngredient/CreateIngredient";
import { CreateDish } from "./components/ManagersComponents/CreateDish/CreateDish";
import { CategoryDishPage } from "./components/MenuComponents/CategoryDishPage/CategoryDishPage";
import { DishPage } from "./components/MenuComponents/DishPage/DishPage";
import { Basket } from "./components/Basket/Basket";
import { UpdateDish } from "./components/ManagersComponents/UpdateDish/UpdateDish";
import { Navigate, Route, Routes } from "react-router-dom";
import { Routes as PathRoutes } from "./Routes";
import { ManageDishes } from "./components/ManagersComponents/EditDish/ManageDishes";

export const PrivateView = () => {
	return (
		<>
			<Routes>
				<Route path={PathRoutes.ManageMenu} Component={EditMenu} />
				<Route path={PathRoutes.Root} Component={Home} />
				<Route path={PathRoutes.CategoryIngredient} Component={EditCategoryIngredient}></Route>
				<Route path={PathRoutes.CategoryDish} Component={EditCategoryDish}></Route>
				<Route path={PathRoutes.Ingredient} Component={EditIngredient}></Route>
				<Route path={PathRoutes.Dish} Component={EditDish}></Route>
				<Route path={PathRoutes.Table} Component={EditTable}></Route>
				<Route path={PathRoutes.CreateCategoryIngredient} Component={CreateCategoryIngredient}></Route>
				<Route path={PathRoutes.CreateCategoryDish} Component={CreateCategoryDish}></Route>
				<Route path={PathRoutes.CreateIngredient} Component={CreateIngredient}></Route>
				<Route path={PathRoutes.CreateDish} Component={CreateDish}></Route>
				<Route path={PathRoutes.CategoryDishes} Component={CategoryDishPage}></Route>
				<Route path={PathRoutes.ManageDishes} Component={ManageDishes}></Route>
				<Route path={PathRoutes.Dishes} Component={DishPage}></Route>
				<Route path={PathRoutes.Basket} Component={Basket}></Route>
				<Route path={PathRoutes.UpdateDish} Component={UpdateDish}></Route>
				<Route path="*" element={<Navigate replace to={PathRoutes.Root} />} />
			</Routes>
		</>
	);
};
