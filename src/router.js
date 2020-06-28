import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import Tela3Screen from './pages/Tela3Screen';


export default function Routes({setNavStatus}) {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomeScreen setNavStatus={setNavStatus}/>
                </Route>
                <Route path="/tela2/">
                    <Tela2Screen setNavStatus={setNavStatus}/>
                </Route>
                <Route path="/tela3/">
                    <Tela3Screen setNavStatus={setNavStatus}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );}