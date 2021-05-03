import React from 'react';
import "../pages.css"
import logo from "../../images/logo.svg";

function Index(props) {
    console.log("Dashboard props", props);
    return (
        <div className="core">
            <h2>I'm the Index Page.</h2>
            <img src={logo} className="Main-logo" alt="logo"/>

        </div>
    );
}

export default Index;
