import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	Alert,
	Breadcrumbs,
	Button,
	ButtonGroup,
	CircularProgress,
	Link,
	Snackbar,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { CategoryDishApi } from "../../../api/categoryDishApi";
import { ICategoryDishProps } from "../EditCategoryDish/ManageCatDishes";
import { Routes } from "../../../Routes";

export const UpdateCategoryDish = () => {
	const [updateCategoryDish, setUpdateCategoryDish] = useState({} as ICategoryDishProps);
	const pageParams = useParams();
	const [isDone, setIsDone] = useState(false);
	const [isOpen, setIsOpen] = useState<boolean>();
	const navigate = useNavigate();

	const UpdateDish = async () => {
		try {
			await CategoryDishApi.update(updateCategoryDish).then((res) => {
				setIsOpen(true);
			});
		} catch (error) {
			console.log(error);
		}
	};

	
	useEffect(() => {
        if (pageParams.id !== undefined)
        CategoryDishApi.getCategoryDishById(parseInt(pageParams.id)).then((resp) => {
            setUpdateCategoryDish({
                id: resp.data.id,
                img: resp.data.img,
                title: resp.data.title,
            });
            setIsDone(true);
        });
	}, [pageParams.id]);

	return !isDone ? (
		<div className="form_center">
			<CircularProgress />
		</div>
	) : (
		<>
			<Breadcrumbs sx={{ paddingLeft: "2%", paddingTop: "2%" }} aria-label="breadcrumb">
				<Link underline="hover" color="inherit" onClick={() => navigate(Routes.Root)}>
					Главная
				</Link>
				<Link underline="hover" color="inherit" onClick={() => navigate(Routes.ManageMenu)}>
					Конфигурация меню
				</Link>
				<Link underline="hover" color="inherit" onClick={() => navigate(Routes.ManageCategoryDishes)}>
                    Список категорий блюд
				</Link>
				<Typography color="text.primary">Редактирование категории блюда</Typography>
			</Breadcrumbs>
			<Stack sx={{ paddingTop: "10%" }} minWidth={"50%"} spacing={5} className="large_form_center">
				<Snackbar
					open={isOpen}
					autoHideDuration={6000}
					onClose={() => setIsOpen(false)}
					anchorOrigin={{ horizontal: "center", vertical: "top" }}
				>
					<Alert onClose={() => setIsOpen(false)} severity="success" sx={{ width: "100%" }}>
						Категория {updateCategoryDish?.title} обновлено
					</Alert>
				</Snackbar>
				<Stack spacing={2}>
					<TextField
						fullWidth
						variant="standard"
						type="text"
						placeholder="Title"
						value={updateCategoryDish.title}
						onChange={(event) =>
							setUpdateCategoryDish({
								...updateCategoryDish,
								title: event.target.value,
							})
						}
					/>
                    <TextField
						fullWidth
						variant="standard"
						type="text"
						placeholder="Image"
						value={updateCategoryDish.img}
						onChange={(event) =>
							setUpdateCategoryDish({
								...updateCategoryDish,
								img: event.target.value,
							})
						}
					/>
					<ButtonGroup variant="contained" aria-label="outlined primary button group">
						<Button fullWidth variant="outlined" onClick={() => UpdateDish()}>
							Сохранить
						</Button>
					</ButtonGroup>
				</Stack>
			</Stack>
		</>
	);
};
