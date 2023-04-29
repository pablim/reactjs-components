import React, { useState} from 'react'
import { Outlet } from "react-router-dom";

import NavBarApp from "../lib/components/NavBar";
import Footer from "../lib/components/Footer"
import SideBar from '../lib/components/SideBar/SideBar';
import Template1 from '../templates/Template1/Template1';

import "../locales/i18n"
import "../styles/Template1Page.css"

function Template1Page() {
    const [visibleSidebar, setVisibleSidebar] = useState(undefined)
  
    return (
        <Template1 
            navbar={
                <NavBarApp visibleSidebar={setVisibleSidebar} />
            }
            sidebar={
                <SideBar visible={visibleSidebar}/>
            }
            content={
                <div >
                    <Outlet />
                </div>
            }
            footer={
                <Footer />
            }
        />
    );
}

export default Template1Page;