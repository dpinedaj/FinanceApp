import React from 'react';
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import '../modules.css'

function Layout(props) {
    return (
        <div>
            <div className="Main">
                <Sidebar history={props.history}/>
                <div className="Pages">
                    <Nav />
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
