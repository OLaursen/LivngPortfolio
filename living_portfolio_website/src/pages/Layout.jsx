import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigational-bar/NavBar';

const Layout = () => {
    return(
    <>
    <Navbar />
    <Outlet />
    </>
    );
};
export default Layout;