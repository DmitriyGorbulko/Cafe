import React from "react";
import {
  Button,
  IconButton,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { IDish } from "../../../models/dishModels";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

export const Dish: React.FC<IDish> = (props) => {
  return (
    <ImageListItem key={props.id} sx={{maxHeight: '300px'}}>
      <img
        src={`${props.img}?w=500&fit=crop&auto=format`}
        srcSet={`${props.img}?w=500&fit=crop&auto=format&dpr=1 1x`}
        alt={props.title}
        loading="lazy"
        style={{maxHeight: '300px'}}
      />
      <ImageListItemBar
        title={props.title}
        subtitle={props.ingredients.map((x) => x.title).join(", ")}
        style={{ paddingRight: "10%" }}
        actionIcon={
          <IconButton
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              color: "rgba(0, 0, 0, 0.54)",
            }}
            aria-label={`Добавить в заказ ${props.title}`}
            onClick={() => console.log('добавлено')}
          >
            <AddShoppingCartRoundedIcon fontSize="large" />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};
