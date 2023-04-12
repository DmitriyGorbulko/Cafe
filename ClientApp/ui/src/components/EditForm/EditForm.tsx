import { Link } from 'react-router-dom';
import React from 'react'
import { Box, Button } from '@mui/material';
import Header from '../Header/Header';

function EditForm() {
    const pathCreate = window.location.pathname + '/create';  
    const pathUpdate = window.location.pathname + '/update';  
    return (
        <div className='divEditForm'>
            <Button id='editForm' variant='contained' href = {pathCreate}>Создать</Button>
            <Button id='editForm' variant='contained' href = {pathUpdate}>Редактировать</Button>
        </div>
    )
}

export default EditForm