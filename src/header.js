import React from "react";
import "./header.css";

export default function Header() {

    return (
    <div className="header-container">
        <img src="/img/logo-2.png" alt="logo-panda" height="50px"/>
        <div className="rightside-icons">
            <img src="/img/use.png" alt="User" height="30px"></img>
            <img src="/img/burger-menu.png" className="menu" alt="Menu" height="30px"></img>
        </div>
    </div>
    );
}