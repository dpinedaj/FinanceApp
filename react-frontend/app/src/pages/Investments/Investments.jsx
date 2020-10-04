import React from 'react';
import InvestmentsFullTable from "../../components/Investments/InvestmentsFullTable";
import "./Investments.css"

function Investments(props) {
    return (
        <div className="Investments">
            <h1>Investments</h1>
            <br/>
            <div className="Investments-table">
                <h2>Full table</h2>
                <InvestmentsFullTable/>
            </div>
        </div>
    );
}

export default Investments;
