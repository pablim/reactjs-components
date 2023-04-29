import React from 'react'
import './css/menu.css'
import './css/menu-leptop.css'

import { Link } from "react-router-dom";

const Menu = (props) => {
    return (
        
        <nav className="side-menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/calculadora">Calculadora</Link>
                </li>
                <li>
                    <Link to="/alphabeticbar">Alphabetic Bar</Link>
                </li>
                <li>
                    <Link to="/pagination">Pagination</Link>
                </li>
                <li>
                    <Link to="/mapacalor">Mapa de calor</Link>
                </li>
                <li>
                    <Link to="/mousepoint">Mouse point</Link>
                </li>
            </ul>
        </nav>
    
    )
}

export default Menu
