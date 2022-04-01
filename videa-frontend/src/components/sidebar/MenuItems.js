import React from "react";
import Categories from "./Categories";
import Channels from "./Channels";
import Likes from "./Likes";
import Subscriptions from "./Subscriptions";
import Trending from "./Trending";
import { Link } from "react-router-dom";

const MenuItems = () => {
    return (
        <div>
            <Link to="/categories" className="videa-link">
                <div className="menu-item-box w-full">
                    <Categories />
                </div>
            </Link>
            <Link to="/channels" className="videa-link">
                <div className="menu-item-box w-full">
                    <Channels />
                </div>
            </Link>
            <Link to="/likes" className="videa-link">
                <div className="menu-item-box w-full">
                    <Likes />
                </div>
            </Link>
            <Link to="/subscriptions" className="videa-link">
                <div className="menu-item-box w-full">
                    <Subscriptions />
                </div>
            </Link>
            <Link to="/trending" className="videa-link">
                <div className="menu-item-box w-full">
                    <Trending />
                </div>
            </Link>
        </div>
    )
}

export default MenuItems