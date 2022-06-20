import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar  from '../components/ui/Navbar';
import { Pokedex } from '../components/pokedex/Pokedex';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route exact path='/' element={ <Pokedex /> }></Route>
                <Route exact path='/pokedex' element={ <Pokedex /> }></Route>
                <Route path="*" element={ <Navigate to='/' /> }></Route>
            </Routes>
        </Router>
    )
}
