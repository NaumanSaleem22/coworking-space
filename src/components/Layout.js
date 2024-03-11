import React from 'react'
import Header from './Header'
import { Outlet, Link } from "react-router-dom";
import Footer from './Footer';
import BottomLine from './BottomLine';
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <BottomLine />
        </>
    )
}

export default Layout