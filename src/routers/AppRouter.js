import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar  from '../components/ui/Navbar';
import { Login } from '../components/auth/Login';
import { Pokedex } from '../components/pokedex/Pokedex';
import { Otro } from '../components/Otro';
import { PokemonInfo } from '../components/pokedex/PokemonInfo';
import { AuthRoutes } from './AuthRoutes';
import { Private } from './Private';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {

    const authContext = useContext(AuthContext);
    const { user: { logged }} = authContext;

    return (
        <Router>
            <Navbar />

            <Routes>
                <Route exact path='/' element={ <Pokedex /> }></Route>
                <Route exact path='/login' element={ <Login /> }></Route>
                <Route exact path='/pokedex' element={ <Pokedex /> }></Route>
                <Route exact path='/pokedex/:name' element={ <PokemonInfo /> }></Route>
                <Route exact path='/otro' element={ <Otro /> }></Route>
                <Route path="*" element={ <Private isAuth={ logged } component={ AuthRoutes } /> }></Route>
            </Routes>
        </Router>
    )
}
