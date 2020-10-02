import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import SpendingsFullTable from "../Spendings/SpendingsFullTable";
import NavBar from "../NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <NavBar />
            <SpendingsFullTable />
        </div>
    );
}

export default App;
