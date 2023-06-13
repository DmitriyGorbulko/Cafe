import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { EditForm } from "../EditForm/EditForm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IEditMenuItemProps {
	hrefPart: string;
	title: string;
}

export const EditMenuItem = (props: IEditMenuItemProps) => {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
				<Typography>{props.title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<EditForm hrefPart={props.hrefPart} />
			</AccordionDetails>
		</Accordion>
	);
};
