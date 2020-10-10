import React from 'react';
import IncomesFullTable from "../../modules/Incomes/IncomesFullTable";
import "../pages.css"

function Incomes(props) {
    return (
        <div className="core">
            <h1>Incomes</h1>
            <br/>
            <div className="table">
                <h2>Full table</h2>
                <IncomesFullTable/>
            </div>
        </div>
    );
}

export default Incomes;
