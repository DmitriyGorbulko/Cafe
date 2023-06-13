import {ErrorPage} from './components/ErrorPage/ErrorPage';
import {Login} from './components/Login/Login';
import {Routes, Route} from 'react-router-dom'
import { Registration } from './components/Registration/Registration';


export const PublicView = () => {

    return (
    <Routes>
    <Route index path='/login' Component = {Login}/>
    <Route path='/registration' Component = {Registration}/>
    </Routes>)
}