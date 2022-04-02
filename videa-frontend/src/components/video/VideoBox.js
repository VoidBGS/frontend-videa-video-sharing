import React from "react";
import Author from "./Author";
import Title from "./Title";
import UploadedOn from "./UploadedOn";
import Video from "./Video";
import Views from "./Views";
import "./video.css";
import Thumbnail from "./Thumbnail";

const VideoBox = () => {
    return (
        <div className="videa-video-container">
            <div className="videa-video-box">
                <Thumbnail Source="https://i.ibb.co/tJnNN1f/catty.png" />
                <div className="flex p-1">
                    <Author />
                    <Title info={{ name: "This title exceeds the max limit allowed by the website so it will get automatically cropped", link: "/video/1" }} />
                </div>
                <div className="video-likes-views-box flex w-full">
                    <Views />
                    <UploadedOn />
                </div>
            </div>
        </div>
    );
}

export default VideoBox;