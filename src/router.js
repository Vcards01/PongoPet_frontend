import React from 'react';
import history from './history'

import {Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute"
//Cliente Screen
import UserHomeScreen from './pages/ClienteHome';
import UserPerfil from './pages/ClienteProfile';
//PetShop Screen
import Tela3Screen from './pages/PetshopHome';
import PetshopProducts from './pages/PetshopProducts'
//Global Screen
import HomeScreen from './pages/HomeScreen';
import DefaultScreen from './pages/DefaultScreen';



export default function Routes({setNavStatus,setFooterStatus,search}) {
    return(
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <HomeScreen setNavStatus={setNavStatus} setFooterStatus={setFooterStatus} />
                </Route>
                {/* Rotas do cliente */}
                <PrivateRoute path="/Cliente">
                    <UserHomeScreen setNavStatus={setNavStatus} setFooterStatus={setFooterStatus} search={search} />
                </PrivateRoute>
                <PrivateRoute path="/Profile">
                    <UserPerfil setNavStatus={setNavStatus} setFooterStatus={setFooterStatus} />
                </PrivateRoute>
                {/* Rotas do petshop */}
                <PrivateRoute path="/Petshop">
                    <Tela3Screen setNavStatus={setNavStatus} setFooterStatus={setFooterStatus}/>
                </PrivateRoute>
                <PrivateRoute path="/Products">
                    <PetshopProducts setNavStatus={setNavStatus} setFooterStatus={setFooterStatus}/>
                </PrivateRoute>
                <Route path="*">
                    <DefaultScreen setNavStatus={setNavStatus} />
                </Route>
            </Switch>
        </Router>
    );}