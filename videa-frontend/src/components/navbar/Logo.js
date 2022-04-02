import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo-box flex center'>
            <Link to="./" className='videa-link'>
                <img src="https://i.ibb.co/mBwgXrg/logo.png" alt="logo" border="0" className='logo' />
            </Link>
        </div>
    );
}

export default Logo;