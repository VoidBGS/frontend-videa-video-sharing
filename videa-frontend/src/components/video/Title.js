import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Title = ({ info }) => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        setTitle(info.name);
        setLink(info.link);
    }, [title, link]);

    let allowedLength = 60;
    const cropIfExceed = (text) => {
        if (typeof (text) === "string") {
            if (text.length > allowedLength) {
                text = text.substring(0, allowedLength).trim() + "...";
            }
        }
        return text;
    }

    return title ? (
        <Link to={link} className="videa-link-dark video-title">
            <div className="font-bold">
                {cropIfExceed(title)}
            </div>
        </Link>
    ) : (
        <div className="video-title font-bold">
            Title Not Found.
        </div>
    );
}

export default Title;