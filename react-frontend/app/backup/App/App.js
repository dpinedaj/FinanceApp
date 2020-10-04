import React from 'react';
import logo from '../../src/images/logo.svg';
import './App.css';
import SpendingsFullTable from "../../src/components/Spendings/SpendingsFullTable";

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
