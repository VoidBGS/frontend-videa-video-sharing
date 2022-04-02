import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Thumbnail = ({ Source }) => {
    const [link, setLink] = useState("");

    useEffect(() => {
        setLink(Source);
    }, []);

    return link ? (
        <div className="video-thumbnail-box">
            <Link to="/video/1" className="videa-link">
                <div className="video-hover-popup flex center">
                    <img src="https://i.ibb.co/C80TTHw/videa-Play.png" alt="videa-Play" border="0" className="video-hover-popup-image" />
                </div>
                <img src={link} className="video-thumbnail"></img>
            </Link>
        </div>
    ) : (
        <div className="video-thumbnail-box">
            <img src="https://i.ibb.co/SR3vQR0/no-Thumbnail.png" className="video-thumbnail"></img>
        </div>
    );
}

export default Thumbnail;