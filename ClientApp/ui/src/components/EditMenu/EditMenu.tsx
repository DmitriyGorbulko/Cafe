import { Link } from "react-router-dom";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { EditForm } from "../EditForm/EditForm";

export const EditMenu = () => {
 
  return (
      <Stack spacing={2} className="large_form_center" style={{width: '50%'}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Категория ингредиентов</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EditForm hrefPart="/editCategoryIngredient" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Категория блюд</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EditForm hrefPart="/editCategoryDish" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Ингредиенты</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EditForm hrefPart="/editIngredient" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Блюда</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EditForm hrefPart="/editDish" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Столы</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EditForm hrefPart="/editTable" />
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
