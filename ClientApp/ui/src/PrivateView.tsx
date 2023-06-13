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
import {CategoryDishPage} from './components/CategoryDishPage/CategoryDishPage';
import {DishPage} from './components/DishPage/DishPage';
import {Basket} from './components/Basket/Basket';
import { UpdateDish } from './components/UpdateDish/UpdateDish';
import { Route, Routes } from 'react-router-dom';

export const PrivateView = () =>
{
    return (
    <>
        <Routes>
            <Route path='/create' Component = {EditMenu}/>
            <Route index path='/' Component = {Home}/>
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
            <Route path='/dishPage/:id' Component = {DishPage}></Route>
            <Route path='/basket' Component = {Basket}></Route>
            <Route path='/editDish/update' Component = {UpdateDish}></Route>
        </Routes>
    </>)
}