import React from 'react';
import history from './history'

import {Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from "./components/PrivateRoute"

import HomeScreen from './pages/HomeScreen';
import DefaultScreen from './pages/Default';

import UserHomeScreen from './pages/UserHomeScreen';
import UserPerfil from './pages/UserPerfil';

import Tela3Screen from './pages/Tela3Screen';


export default function Routes({setNavStatus,setFooterStatus,search}) {
    return(
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <HomeScreen setNavStatus={setNavStatus} 
                    setFooterStatus={setFooterStatus} />
                </Route>
                <PrivateRoute path="/Cliente">
                    <UserHomeScreen setNavStatus={setNavStatus} 
                    setFooterStatus={setFooterStatus} 
                    search={search} />
                </PrivateRoute>
                <PrivateRoute path="/Profile">
                    <UserPerfil setNavStatus={setNavStatus} setFooterStatus={setFooterStatus} />
                </PrivateRoute>
                <PrivateRoute path="/Petshop">
                    <Tela3Screen setNavStatus={setNavStatus} 
                    setFooterStatus={setFooterStatus}/>
                </PrivateRoute>
                <Route path="*">
                    <DefaultScreen setNavStatus={setNavStatus} />
                </Route>
            </Switch>
        </Router>
    );}