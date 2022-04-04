import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Length from "./Length";

const Thumbnail = ({ source, url }) => {
    const [thumbnailSrc, setThumbnailSrc] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        setThumbnailSrc(source);
        setLink(url);
    }, []);

    return thumbnailSrc ? (
        <div className="video-thumbnail-box">
            <Link to={link} className="videa-link">
                <div className="video-hover-popup flex center">
                    <img src="https://i.ibb.co/C80TTHw/videa-Play.png" alt="videa-Play" border="0" className="video-hover-popup-image" />
                </div>
                <img src={thumbnailSrc} className="video-thumbnail"></img>
            </Link>
            <Length/>
        </div>
    ) : (
        <div className="video-thumbnail-box">
            <img src="https://i.ibb.co/SR3vQR0/no-Thumbnail.png" className="video-thumbnail"></img>
            <Length/>
        </div>
    );
}

export default Thumbnail;