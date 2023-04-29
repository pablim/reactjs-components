import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import { paths, templates } from "./Paths";

const getRoutes = (links) => {
    return links.map(link => {
        return (
            <Route path={link.path} element={link.element} />
        )
    })
}

const SystemRoutes = () => {
    return (  
        <Routes>
            <Route path='/' element={templates[0].element} >
                {getRoutes(paths)}
            </Route>
            <Route path='/template2' element={templates[1].element}/>
        </Routes>
    )
}

export default SystemRoutes;