import React from 'react';
import ResultsFullTable from "../../components/Results/ResultsFullTable";
import "./Results.css"

function Results(props) {
    return (
        <div className="Results">
            <h1>Results</h1>
            <br/>
            <div className="Results-table">
                <h2>Full table</h2>
                <ResultsFullTable/>
            </div>
        </div>
    );
}

export default Results;
