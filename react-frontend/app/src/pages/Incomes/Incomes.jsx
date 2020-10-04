import React from 'react';
import IncomesFullTable from "../../components/Incomes/IncomesFullTable";
import "./Incomes.css"

function Incomes(props) {
    return (
        <div className="Incomes">
            <h1>Incomes</h1>
            <br/>
            <div className="Incomes-table">
                <h2>Full table</h2>
                <IncomesFullTable/>
            </div>
        </div>
    );
}

export default Incomes;
