import React from 'react';
import './navbar.css';
import ConvertButton from './ConvertButton';
import Logo from './Logo';
import Searchbar from './Searchbar';
import UserProfile from './UserProfile';
import ButtonGroup from './ButtonGroup';

const Navbar = () => {
       return (
           <div className='videa-navbar'>
               <div className="videa-navbar-box flex between v-center">
                    <Logo/>
                    <Searchbar/>
                    <ButtonGroup>
                        <ConvertButton/>
                        <UserProfile/>
                    </ButtonGroup>
               </div>
           </div>
       );
}

export default Navbar;