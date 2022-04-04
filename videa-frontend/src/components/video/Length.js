import React from 'react';

const Length = ({ time }) => {
    return time ? (
        <div className='video-length p-1'>
            {time}
        </div>
    ) : (
        <div className='video-length p-1'>
            13:37
        </div>
    );
}

export default Length;