import { useEffect, useState } from "react";
import { IUpdateDish } from "../../../models/dishModels";
import { dishApi } from "../../../api/DishApi";
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
import { Routes } from "../../../Routes";

export const UpdateDish = () => {
	const [updateDish, setUpdateDish] = useState({} as IUpdateDish);
	const pageParams = useParams();
	const [isDone, setIsDone] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const paramId = pageParams.id;

	const UpdateDish = async () => {
		try {
			await dishApi.update(updateDish).then((res) => {
				setIsOpen(true);
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (paramId !== undefined)
			dishApi.get(parseInt(paramId)).then((resp) => {
				setUpdateDish({
					id: resp.data.id,
					description: resp.data.description,
					recipe: resp.data.categoryName,
					title: resp.data.title,
				});
				setIsDone(true);
			});
	}, [paramId]);

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
				<Link underline="hover" color="inherit" onClick={() => navigate(Routes.ManageDishes)}>
					Список блюд
				</Link>
				<Typography color="text.primary">Редактирование блюда</Typography>
			</Breadcrumbs>
			<Stack sx={{ paddingTop: "10%" }} minWidth={"50%"} spacing={5} className="large_form_center">
				<Snackbar
					open={isOpen}
					autoHideDuration={6000}
					onClose={() => setIsOpen(false)}
					anchorOrigin={{ horizontal: "center", vertical: "top" }}
				>
					<Alert onClose={() => setIsOpen(false)} severity="success" sx={{ width: "100%" }}>
						Блюдо {updateDish?.title} обновлено
					</Alert>
				</Snackbar>
				<Stack spacing={2}>
					<TextField
						fullWidth
						variant="standard"
						type="text"
						placeholder="Description"
						value={updateDish.recipe}
						onChange={(event) =>
							setUpdateDish({
								...updateDish,
								recipe: event.target.value,
							})
						}
					/>
					<TextField
						fullWidth
						variant="standard"
						type="text"
						placeholder="Title"
						value={updateDish.title}
						onChange={(event) =>
							setUpdateDish({
								...updateDish,
								title: event.target.value,
							})
						}
					/>
					<TextField
						fullWidth
						variant="standard"
						type="text"
						placeholder="Description"
						value={updateDish.description}
						onChange={(event) =>
							setUpdateDish({
								...updateDish,
								description: event.target.value,
							})
						}
					/>
					<TextField
						fullWidth
						variant="standard"
						type="text"
						placeholder="Image"
						value={updateDish.img}
						onChange={(event) =>
							setUpdateDish({
								...updateDish,
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
