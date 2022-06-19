import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar  from '../components/ui/Navbar';
import { Pokedex } from '../components/pokedex/Pokedex';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route exact path='/' element={ <Pokedex /> }></Route>
                <Route exact path='/pokedex' element={ <Pokedex /> }></Route>
                {/* <Route path="*" element={ <Pokedex /> }></Route> */}
            </Routes>
        </Router>
    )
}
