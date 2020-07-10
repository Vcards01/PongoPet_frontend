import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeScreen from './pages/HomeScreen';
import UserHomeScreen from './pages/UserHomeScreen';
import Tela3Screen from './pages/Tela3Screen';


export default function Routes({setNavStatus,setFooterStatus,search}) {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomeScreen setNavStatus={setNavStatus} 
                    setFooterStatus={setFooterStatus} />
                </Route>
                <Route path="/ClienteHome/">
                    <UserHomeScreen setNavStatus={setNavStatus} 
                    setFooterStatus={setFooterStatus} 
                    search={search} />
                </Route>
                <Route path="/tela3/">
                    <Tela3Screen setNavStatus={setNavStatus} 
                    setFooterStatus={setFooterStatus}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );}