import React from 'react';
import "./sidebar.css";
import MenuItems from './MenuItems';
import Footer from './Footer';

const Sidebar = () => {
    return (
        <div className='videa-sidebar'>
            <div className='videa-sidebar-menu-box flex-col h-center'>
                <MenuItems/>
            </div>
            <div className='videa-sidebar-footer-box flex-col center'>
                <Footer/>
            </div>
        </div>
    );
}

export default Sidebar;