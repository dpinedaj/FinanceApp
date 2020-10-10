import React from 'react';
import "../pages.css"
import logo from "../../images/logo.svg";

function Main(props) {
    console.log("Dashboard props", props);
    return (
        <div className="core">
            <h2>I'm the Main Page.</h2>
            <img src={logo} className="Main-logo" alt="logo"/>

        </div>
    );
}

export default Main;
