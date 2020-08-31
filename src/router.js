import React from 'react';
import history from './history'
//Componentes para rotas
import {Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute"
//Global Screen
import HomeScreen from './pages/HomeScreen';
import DefaultScreen from './pages/DefaultScreen';
//Cliente Screen
import CustomerHome from './pages/CustomerHome';
import CustomerProfile from './pages/CustomerProfile';
import CustomerOrder from './pages/CustomerOrder'
//PetShop Screen
import PetshopHome from './pages/PetshopHome';
import PetshopProducts from './pages/PetshopProducts'
import PetshopProfile from './pages/PetshopProfile'
//
import Verificar from './pages/VerifyUser'
import UpdatePass from './pages/ChangePassword'

export default function Routes({setNavStatus,setFooterStatus,search}) {
    return(
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <HomeScreen setNavStatus={setNavStatus} setFooterStatus={setFooterStatus} />
                </Route>

                {/* Rotas do cliente */}
                <PrivateRoute path="/Customer">
                    <Switch>
                        <PrivateRoute exact path="/Customer/">
                            <CustomerHome setNavStatus={setNavStatus} setFooterStatus={setFooterStatus} search={search} />
                        </PrivateRoute>
                        <PrivateRoute exact path="/Customer/Profile">
                            <CustomerProfile setNavStatus={setNavStatus} setFooterStatus={setFooterStatus} />
                        </PrivateRoute>
                        <PrivateRoute exact path="/Customer/Orders">
                            <CustomerOrder setNavStatus={setNavStatus} setFooterStatus={setFooterStatus} />
                        </PrivateRoute>
                        <PrivateRoute>
                            <DefaultScreen setNavStatus={setNavStatus} />
                        </PrivateRoute>
                    </Switch>
                </PrivateRoute>
                
                {/* Rotas do petshop */}
                <PrivateRoute path="/Petshop">
                    <Switch>
                        <PrivateRoute exact path="/Petshop/">
                            <PetshopHome setNavStatus={setNavStatus} setFooterStatus={setFooterStatus}/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/Petshop/Products">
                            <PetshopProducts setNavStatus={setNavStatus} setFooterStatus={setFooterStatus}/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/Petshop/Profile">
                            <PetshopProfile setNavStatus={setNavStatus} setFooterStatus={setFooterStatus}/>
                        </PrivateRoute>
                        <PrivateRoute>
                            <DefaultScreen setNavStatus={setNavStatus} />
                        </PrivateRoute>
                    </Switch>
                </PrivateRoute>
                <Route path="/verify/*" >
                    <Verificar setNavStatus={setNavStatus} setFooterStatus={setFooterStatus}/>
                </Route>
                <Route path="/update_pass/*">
                    <UpdatePass setNavStatus={setNavStatus} setFooterStatus={setFooterStatus}/>
                </Route>
                <Route path="*">
                    <DefaultScreen setNavStatus={setNavStatus} />
                </Route>
            </Switch>
        </Router>
    );}