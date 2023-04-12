import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className='headerCafe'>
            <Button variant='contained' href='/home'>Главная</Button>
            <Button variant='contained' href='/create'>Редактировать</Button>
            <Button variant='contained' href='/categoryDish'>Меню</Button>
            <Button variant='contained' href='/kkrkr'>Акции</Button>
            <Button variant='contained' href='/basket'>Корзина</Button>
            <Button variant='contained' href='/kkrkr'>Доставка</Button>
            <Button variant='contained' href='/kkrkr'>О нас</Button>
        </header>
    </div>
  )
}

export default Header