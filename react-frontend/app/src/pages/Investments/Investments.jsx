import React from 'react';
import InvestmentsFullTable from "../../modules/Investments/InvestmentsFullTable";
import "../pages.css"

function Investments(props) {
    return (
        <div className="core">
            <h1>Investments</h1>
            <br/>
            <div className="table">
                <h2>Full table</h2>
                <InvestmentsFullTable/>
            </div>
        </div>
    );
}

export default Investments;
