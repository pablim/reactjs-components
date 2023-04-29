import React from "react";

// import About from "./views/About"
import ReactHookForm from './views/ReactHookForm';
import AlphabeticBarPage from './views/AlphabeticBarPage';
import Calculator from './lib/components/Calculator/Calculator/Calculator';
import Pagination from './lib/components/Pagination';
import JogoVelha from './lib/components/JogoVelha';
import Button from './lib/components/Button';
import OverlayPage from './views/OverlayPage';
import CheckoutPage from './views/CheckoutPage';
import Template1Page from './views/Template1Page';
import Template2Page from './views/Template2Page';

export const paths = [
    // { path: '/about', element: <About />, label: 'About Page' },
    { path: '/hookform', element: <ReactHookForm />, label: 'Hook Form exemple' },
    { path: '/alphabetcbar', element: <AlphabeticBarPage />, label: 'Alphabetic Bar' },
    { path: '/calculator', element: <Calculator />, label: 'Calculadora' },
    { path: '/pagination', element: <Pagination />, label: 'Pagination' },
    { path: '/jogovelha', element: <JogoVelha />, label: 'Jogo da Velha' },
    { 
        path: '/button', 
        element: <Button 
            effect={{
                name: "shake-horizontal", 
                action:"onClick", 
                repeat: "3", 
                delayOnStart: "0", 
                delayOnRestart: "2"
            }}
        />, 
        label: 'Button' 
    },
    { path: '/overlay', element: <OverlayPage />, label: 'Overlay' },
    { path: '/checkout', element: <CheckoutPage />, label: 'Checkout' },
]

export const templates = [
    { path: '/template1', element: <Template1Page />, label: 'Template 1' },
    { path: '/template2', element: <Template2Page />, label: 'Template 2' },
]
