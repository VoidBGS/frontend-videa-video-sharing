import React from "react";
import ImageBox from '../ImageBox/ImageBox';


const Author = () => {
    return (
        <div className="author-profile">
            <ImageBox info={{src:"https://i.ibb.co/bmjgh7R/thumbnail-Store.png", isProfile: true, name:"Kristian"}}/>
        </div>
    );
}

export default Author;