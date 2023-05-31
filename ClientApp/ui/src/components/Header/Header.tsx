import { Box, Button, ButtonGroup } from '@mui/material'
import exp from 'constants'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Box>
        <header className='headerCafe'>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button color= "success" href='/home'>Главная</Button>
            <Button color= "success" href='/create'>Редактировать</Button>
            <Button color= "success" href='/categoryDish'>Меню</Button>
            <Button color= "success" href='/kkrkr'>Акции</Button>
            <Button color= "success" href='/basket'>Корзина</Button>
            <Button color= "success" href='/kkrkr'>Доставка</Button>
            <Button color= "success">О нас</Button>
          </ButtonGroup>
          
        </header>
    </Box>
  )
}