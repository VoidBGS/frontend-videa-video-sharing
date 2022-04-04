import React,{useState, useEffect} from "react";
import Author from "./Author";
import Title from "./Title";
import UploadedOn from "./UploadedOn";
import Video from "./Video";
import Views from "./Views";
import "./video.css";
import Thumbnail from "./Thumbnail";

const VideoBox = ({Video}) => {
    const [source, setSource] = useState("");
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [author, setAuthor] = useState({});

    useEffect(()=>{
        console.log(Video);
        setSource(Video.source);
        setTitle(Video.title);
        setLink(Video.link);
        setAuthor(Video.author);
    },[author, source, title, link]);

    return source && title && link ? (
        <div className="videa-video-container">
            <div className="videa-video-box">
                <Thumbnail source={source} url={link}/>
                <div className="flex p-1">
                    <Author Author={author}/>
                    <Title info={{ name: title, link: link }} />
                </div>
                <div className="video-likes-views-box flex w-full">
                    <Views />
                    <UploadedOn />
                </div>
            </div>
        </div>
    ) : "Error";
}

export default VideoBox;