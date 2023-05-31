import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

interface IEditFormProps {
    hrefPart?: string; 
}

export const EditForm: React.FC<IEditFormProps> = (props) => {
    const pathCreate = props.hrefPart + '/create';  
    const pathUpdate = props.hrefPart + '/update'; 
    const navigation = useNavigate();
   
    return (
        <>
            <Button color='primary' endIcon={<AddIcon/>} id='editForm' variant='contained' onClick={() => navigation(pathCreate)}>Создать</Button>
            <Button color='success' endIcon={<EditIcon/>} id='editForm' variant='contained' onClick={() => navigation(pathUpdate)}>Редактировать</Button>
        </>
    )
}