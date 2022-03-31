import React from 'react';

const Searchbar = () => {
    return (
        <div className='searchbar-box'>
            <form className='videa-form-searchbar flex center w-full'>
                <input type="text" className='videa-searchbar'></input>
                <div className='searcbar-icon-box flex center'>
                    <img src="https://i.ibb.co/HgRkVxn/icons8-search-25.png" className='search-box-icon' alt="icons8-search-25" border="0" />
                </div>
            </form>
        </div>
    );
}

export default Searchbar;