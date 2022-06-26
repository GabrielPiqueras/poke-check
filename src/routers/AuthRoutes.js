import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Items } from '../components/items/Items';
import { Compare } from '../components/compare/Compare';
import { Account } from '../components/dashboard/Account';
import { Profile } from '../components/dashboard/Profile';
import { Logout } from '../components/auth/Logout';

export const AuthRoutes = () => {
    return (
            <>
                <Routes>
                    <Route exact path='/items' element={ <Items /> }></Route>
                    <Route exact path='/compare' element={ <Compare /> }></Route>
                    <Route exact path='/profile' element={ <Profile /> }></Route>
                    <Route exact path='/account' element={ <Account /> }></Route>
                    <Route exact path='/logout' element={ <Logout /> }></Route>
                    <Route path="*" element={ <Navigate to='/' /> }></Route>
                </Routes>
            </>
    )
}
