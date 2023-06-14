import { useEffect, useState } from "react";
import { ICategoryDish } from "../../../models/categoryDishModels";
import {
	Alert,
	Breadcrumbs,
	Button,
	ButtonGroup,
	CircularProgress,
	Link,
	MenuItem,
	Select,
	SelectChangeEvent,
	Snackbar,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { CategoryDishApi } from "../../../api/categoryDishApi";
import { ICategoryDishProps } from "../../MenuComponents/CategoryDish/CategoryDish";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../Routes";

export const CreateCategoryDish = () => {
	const [createCategoryDish, setCreateCategoryDish] = useState<ICategoryDishProps | undefined>({
    img: "",
    title: ""
  });
	const [isOpen, setIsOpen] = useState<boolean>();
  const navigate = useNavigate();

	const CreateDish = async () => {
		try {
			await CategoryDishApi.create(createCategoryDish!).then((res) => {
				setIsOpen(true);
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (<>
  <Breadcrumbs sx={{ paddingLeft: "2%", paddingTop: "2%" }} aria-label="breadcrumb">
				<Link underline="hover" color="inherit" onClick={() => navigate(Routes.Root)}>
					Главная
				</Link>
				<Link underline="hover" color="inherit" onClick={() => navigate(Routes.ManageMenu)}>
					Конфигурация меню
				</Link>
				<Typography color="text.primary">Добавить новую категорию блюд</Typography>
			</Breadcrumbs>
		<Stack minWidth={"50%"} spacing={3} className="large_form_center">
			<Snackbar
				open={isOpen}
				autoHideDuration={6000}
				onClose={() => setIsOpen(false)}
				anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
				<Alert onClose={() => setIsOpen(false)} severity="success" sx={{ width: "100%" }}>
					категория блюда {createCategoryDish?.title} добавлено
				</Alert>
			</Snackbar>
			{createCategoryDish && (
        <Stack spacing={2}>
					<TextField
						fullWidth
						variant="standard"
						type="text"
						placeholder="Title"
						value={createCategoryDish.title}
						onChange={(event) =>
							setCreateCategoryDish({
								...createCategoryDish,
								title: event.target.value,
							})
						}
            />
					<TextField
						fullWidth
						variant="standard"
						type="text"
						placeholder="Image"
						value={createCategoryDish.img}
						onChange={(event) =>
							setCreateCategoryDish({
                ...createCategoryDish,
								img: event.target.value,
							})
						}
            />
				</Stack>
			)}
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button fullWidth variant="outlined" onClick={() => CreateDish()}>
					Добавить
				</Button>
			</ButtonGroup>
		</Stack>
      </>
	);
};
