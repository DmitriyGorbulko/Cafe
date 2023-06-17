import React, { FC } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface ICategoryDishProps {
	id?: number;
	img: string;
	title: string;
}

export const CategoryDish: FC<ICategoryDishProps> = (props) => {
	const navigation = useNavigate();

	const goToDishPage = (id: number) => {
		navigation(`/categoryDish/${id}/dishes`);
	};

	return (
		<ImageListItem key={props.img} sx={{maxHeight: '300px', maxWidth: '1000px'}}>	
				<img
					src={`${props.img}?w=500&fit=crop&auto=format`}
					srcSet={`${props.img}?w=500&fit=crop&auto=format&dpr=1 1x`}
					alt={props.title}
					loading="lazy"
					onClick={() => goToDishPage(props.id ?? 1)}
          style={{maxHeight: '300px'}}
				/>
			<ImageListItemBar
				title={props.title}
				actionIcon={
					<IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={`info about ${props.title}`}></IconButton>
				}
			/>
		</ImageListItem>
	);
};
