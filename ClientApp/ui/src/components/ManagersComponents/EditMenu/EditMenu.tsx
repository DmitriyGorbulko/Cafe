import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { Routes } from "../../../Routes";
import { EditMenuItem } from "./EditMenuItem";
import { useNavigate } from "react-router-dom";

export const EditMenu = () => {

	const navigate = useNavigate();
	return (
		<>
			<Breadcrumbs sx={{ paddingLeft: "2%", paddingTop: "2%" }} aria-label="breadcrumb">
				<Link underline="hover" color="inherit" onClick={() => navigate(Routes.Root)}>
					Главная
				</Link>
				<Typography color="text.primary">Конфигурация меню</Typography>
			</Breadcrumbs>
			<Stack spacing={2} className="large_form_center" style={{ width: "50%" }}>
				<EditMenuItem hrefPart={Routes.CategoryIngredient} title="Категория ингредиентов" />
				<EditMenuItem hrefPart={Routes.CategoryDish} title="Категория блюд" />
				<EditMenuItem hrefPart={Routes.Ingredient} title="Ингредиенты" />
				<EditMenuItem hrefPart="/dish" title="Блюда" />
				<EditMenuItem hrefPart="/editTable" title="Столы" />
			</Stack>
		</>
	);
};
