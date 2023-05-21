import './App.css';
import {Registration} from './components/Registration/Registration';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import {ErrorPage} from './components/ErrorPage/ErrorPage';
import {Login} from './components/Login/Login';
import {Home} from './components/Home/Home';
import {EditMenu} from './components/EditMenu/EditMenu';
import {EditTable} from './components/EditTable/EditTable';
import {EditDish} from './components/EditDish/EditDish';
import {EditIngredient} from './components/EditIngredient/EditIngredient';
import {EditCategoryDish} from './components/EditCategoryDish/EditCategoryDish';
import {EditCategoryIngredient} from './components/EditCategoryIngresient/EditCategoryIngredient';
import {CreateCategoryIngredient} from './components/CreateCategoryIngredient/CreateCategoryIngredient';
import {CreateCategoryDish} from './components/CreateCategoryDish/CreateCategoryDish';
import {CreateIngredient} from './components/CreateIngredient/CreateIngredient';
import {CreateDish} from './components/CreateDish/CreateDish';
import {Header} from './components/Header/Header';
import { Switch } from '@mui/material';
import {CategoryDishPage} from './components/CategoryDishPage/CategoryDishPage';
import {DishPage} from './components/DishPage/DishPage';
import {Basket} from './components/Basket/Basket';

function App() {
  return (
    <Router>
      <Header/>
          <Routes>
            <Route path='/' Component = {Login}/>
            <Route path='/registration' Component = {Registration}/>
            <Route path='/create' Component = {EditMenu}></Route>
            <Route path='/home' Component = {Home}/>
            <Route path='*' Component = {ErrorPage}/>
            <Route path='/editCategoryIngredient' Component = {EditCategoryIngredient}></Route>
            <Route path='/editCategoryDish' Component = {EditCategoryDish}></Route>
            <Route path='/editIngredient' Component = {EditIngredient}></Route>
            <Route path='/editDish' Component = {EditDish}></Route>
            <Route path='/editTable' Component = {EditTable}></Route>
            <Route path='/editCategoryIngredient/create' Component = {CreateCategoryIngredient}></Route>
            <Route path='/editCategoryDish/create' Component = {CreateCategoryDish}></Route>
            <Route path='/editIngredient/create' Component = {CreateIngredient}></Route>
            <Route path='/editDish/create' Component = {CreateDish}></Route>
            <Route path='/categoryDish' Component = {CategoryDishPage}></Route>
            <Route path='/dishPage' Component = {DishPage}></Route>
            <Route path='/basket' Component = {Basket}></Route>
        </Routes>
    </Router> 
  );
}

export default App;
