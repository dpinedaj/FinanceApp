import React from 'react';
import logo from '../static/logo.svg';
import './App.css';
import SpendingsFullTable from "../Spendings/spendingsFullTable";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <SpendingsFullTable />
        </div>
    );
}

export default App;
