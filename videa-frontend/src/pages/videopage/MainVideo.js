import React from 'react';
import "./videopage.css";

const MainVideo = ({ video }) => {
    return (
        <div className='main-video-box w-full p-2 mr-1'>
            <div className='main-video-player'>

            </div>
            <div className='main-video-title p-1'>
                A video about a thing that is very interesting but the title is visible now,
                because more characters are allowed here.
            </div>

            <div className='main-video-info flex between v-center p-1'>
                <div className='main-video-statistics flex'>
                    <div className='mr-1'>
                        1337 Views
                    </div>
                    <div>
                        03.04.2022
                    </div>
                </div>
                <div className='main-video-likes flex'>
                    <div className='main-video-like-button flex center'>
                        I Like this | 137 &hearts;
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainVideo;