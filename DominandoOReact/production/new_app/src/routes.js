import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlanetsScreen from './screens/planets';
import PlanetScreen from './screens/planet';
import NotFoundScreen from './screens/notFound';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={PlanetsScreen}/>
            <Route exact path='/planet/:id' Component={PlanetScreen}/>
            <Route path='*' Component={NotFoundScreen}/>
        </Routes>
    </BrowserRouter>
)

export default Rotas;