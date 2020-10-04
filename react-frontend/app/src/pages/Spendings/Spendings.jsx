import React from 'react';
import SpendingsFullTable from "../../components/Spendings/SpendingsFullTable";
import "./Spendings.css"

function Spendings(props) {
    return (
        <div className="Spends">
            <h1>Spendings</h1>
            <br/>
            <div className="Spends-table">
                <h2>Full table</h2>
                <SpendingsFullTable/>
            </div>
        </div>
    );
}

export default Spendings;
