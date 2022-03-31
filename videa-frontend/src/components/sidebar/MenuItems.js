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
            <Link to="/categories" className="navbar-link">
                <div className="menu-item-box w-full">
                    <Categories />
                </div>
            </Link>
            <Link to="/channels" className="navbar-link">
                <div className="menu-item-box w-full">
                    <Channels />
                </div>
            </Link>
            <Link to="/likes" className="navbar-link">
                <div className="menu-item-box w-full">
                    <Likes />
                </div>
            </Link>
            <Link to="/subscriptions" className="navbar-link">
                <div className="menu-item-box w-full">
                    <Subscriptions />
                </div>
            </Link>
            <Link to="/trending" className="navbar-link">
                <div className="menu-item-box w-full">
                    <Trending />
                </div>
            </Link>
        </div>
    )
}

export default MenuItems