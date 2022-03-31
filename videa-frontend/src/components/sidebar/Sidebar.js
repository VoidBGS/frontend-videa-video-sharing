import React from 'react';
import "./sidebar.css";
import MenuItems from './MenuItems';
import Footer from './Footer';
import Logo from '../navbar/Logo';

const Sidebar = () => {
    return (
        <div className='videa-sidebar'>
            <div className='videa-sidebar-logo flex-col h-center'>
                <Logo />
            </div>
            <div className='videa-sidebar-menu-box flex-col h-center'>
                <MenuItems />
            </div>
            <div className='videa-sidebar-footer-box border-white flex-col center'>
                <Footer />
            </div>
        </div>
    );
}

export default Sidebar;