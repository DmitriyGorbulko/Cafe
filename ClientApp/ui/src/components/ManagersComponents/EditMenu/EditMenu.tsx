import { Stack } from "@mui/material";
import { Routes } from "../../../Routes";
import { EditMenuItem } from "./EditMenuItem";

export const EditMenu = () => {
	return (
		<Stack spacing={2} className="large_form_center" style={{ width: "50%" }}>
			<EditMenuItem hrefPart={Routes.CategoryIngredient} title="Категория ингредиентов" />
			<EditMenuItem hrefPart={Routes.CategoryDish} title="Категория блюд" />
			<EditMenuItem hrefPart={Routes.Ingredient} title="Ингредиенты" />
			<EditMenuItem hrefPart="/dish" title="Блюда" />
			<EditMenuItem hrefPart="/editTable" title="Столы" />
		</Stack>
	);
};
