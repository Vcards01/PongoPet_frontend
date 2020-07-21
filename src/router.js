import React from 'react';
import history from './history'

import {Router, Switch, Route } from 'react-router-dom';

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
                <Route path="/HomeU/">
                    <UserHomeScreen setNavStatus={setNavStatus} 
                    setFooterStatus={setFooterStatus} 
                    search={search} />
                </Route>
                <Route path="/ProfileU/">
                    <UserPerfil/>
                </Route>
                <Route path="/tela3/">
                    <Tela3Screen setNavStatus={setNavStatus} 
                    setFooterStatus={setFooterStatus}/>
                </Route>
                <Route path="*">
                    <DefaultScreen setNavStatus={setNavStatus} />
                </Route>
            </Switch>
        </Router>
    );}