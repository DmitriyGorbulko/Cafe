import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../LogoutButton';
import { Routes } from '../../Routes';

interface IMenuItem{
  href: string;
  title: string;
}

export const Header = () => {
  const pages: IMenuItem[] = [ 
    {href: Routes.Root, title: 'Главная'},
    {href: Routes.ManageMenu, title: 'Редактировать'},
    {href: Routes.CategoryDishes, title: 'Меню'},
    {href: '/kkrkr', title: 'Акции'},
    {href: Routes.Basket, title: 'Корзина'},
    {href: '/kkrkr', title: 'Доставка'},
    {href: '/kkrkr', title: 'О нас'},
];
  const navigation = useNavigate();
  
  return (
    <Box>
       <AppBar color='transparent' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyCafe
          </Typography>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => navigation(page.href)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <span style={{color: 'black'}}>{page.title}</span>
              </Button>
            ))}
            <LogoutButton/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  )
}