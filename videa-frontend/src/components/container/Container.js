import React from "react";
import "./container.css";

const Container = (props) => {
    return (
        <div className="videa-content-container flex center">
            {props.children}
        </div>
    );
}

export default Container;