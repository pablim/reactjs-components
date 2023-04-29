import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";

import About from '../../views/About'
import CalculadoraPage from '../../views/Calculadora';
import AlphabeticBarPage from '../../views/AlphabeticBarPage';
import Pagination from '../../components/Pagination'
import MapaCalorPage from '../../views/MapaCalorPage'
import MousePointPage from '../../views/MousePointPage'
import ZoomGridPage from '../../views/ZoomGridPage'
import Home from '../../views/Home'
import './content.css'

const Content = () => {
    return (
        <div className="content-container">
            {/**
            * A <Switch> looks through its children <Route>s and renders the first 
            * one that matches the current URL.
            * */}
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/calculadora">
                    <CalculadoraPage />
                </Route>
                <Route path="/alphabeticbar">
                    <AlphabeticBarPage />
                </Route>
                <Route path="/pagination">
                    <div id="myContainer"></div>
                    <Pagination containerIdToRetrieve="myContainer" 
                        fetchUrl="http://localhost:3002/getNames"
                        fetchAmountUrl="http://localhost:3002/getNamesAmount"/>
                </Route>
                <Route path="/mapacalor">
                    <MapaCalorPage />
                </Route>
                <Route path="/mousepoint">
                    <MousePointPage />
                </Route>

                <Route path="/zoomgrid">
                    <ZoomGridPage />
                </Route>

            </Switch>
        </div>
    )
}  

export default Content