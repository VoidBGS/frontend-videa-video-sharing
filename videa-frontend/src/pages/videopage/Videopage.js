import React from 'react';
import { useParams } from 'react-router-dom';
import MainVideo from './MainVideo';
import SuggestedVideos from './SuggestedVideos';

const VideoPage = () => {
    let params = useParams();

    return (
        <div className='video-page flex between w-full'>
            <MainVideo/>
            <SuggestedVideos/>
        </div>
    );
}

export default VideoPage;