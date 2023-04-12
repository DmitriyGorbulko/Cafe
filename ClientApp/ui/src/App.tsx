import './App.css';
import Registration from './components/Registration/Registration';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import EditMenu from './components/EditMenu/EditMenu';
import EditTable from './components/EditTable/EditTable';
import EditDish from './components/EditDish/EditDish';
import EditIngredient from './components/EditIngredient/EditIngredient';
import EditCategoryDish from './components/EditCategoryDish/EditCategoryDish';
import EditCategoryIngredient from './components/EditCategoryIngresient/EditCategoryIngredient';
import CreateCategoryIngredient from './components/CreateCategoryIngredient/CreateCategoryIngredient';
import CreateCategoryDish from './components/CreateCategoryDish/CreateCategoryDish';
import CreateIngredient from './components/CreateIngredient/CreateIngredient';
import CreateDish from './components/CreateDish/CreateDish';
import Header from './components/Header/Header';
import { Switch } from '@mui/material';
import CategoryDish from './components/CategoryDish/CategoryDish';
import CategoryDishPage from './components/CategoryDishPage/CategoryDishPage';
import DishPage from './components/DishPage/DishPage';
import Basket from './components/Basket/Basket';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path='/registration' element = {<Registration/>}/>
          <Route path='/create' element = {<EditMenu/>}></Route>
          <Route path='/home' element = {<Home/>}/>
          <Route path='*' element = {<ErrorPage/>}/>
          <Route path='/editCategoryIngredient' element = {<EditCategoryIngredient/>}></Route>
          <Route path='/editCategoryDish' element = {<EditCategoryDish/>}></Route>
          <Route path='/editIngredient' element = {<EditIngredient/>}></Route>
          <Route path='/editDish' element = {<EditDish/>}></Route>
          <Route path='/editTable' element = {<EditTable/>}></Route>
          <Route path='/editCategoryIngredient/create' element = {<CreateCategoryIngredient/>}></Route>
          <Route path='/editCategoryDish/create' element = {<CreateCategoryDish/>}></Route>
          <Route path='/editIngredient/create' element = {<CreateIngredient/>}></Route>
          <Route path='/editDish/create' element = {<CreateDish/>}></Route>
          <Route path='/categoryDish' element = {<CategoryDishPage/>}></Route>
          <Route path='/dishPage' element = {<DishPage/>}></Route>
          <Route path='/basket' element = {<Basket/>}></Route>

        </Routes>
    </Router> 
  );
}

export default App;
