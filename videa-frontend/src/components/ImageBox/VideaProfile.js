import React from 'react';
import "./imageBox.css";

const VideaProfile = ({info}) =>{
    console.log(info);
    return info ? (
        <img src={info.src} alt={"Profile of " + info.name || "unknown"} className='videa-circular-profile'></img>

    ) : <img src="https://i.ibb.co/Rbxm3sb/user-Icon-MINE.png" alt="Default Profile" className='videa-circular-profile-default' border="0"/>
}

export default VideaProfile;