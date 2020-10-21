import React from 'react';
import ResultsFullTable from "../../modules/Results/ResultsFullTable";
import "../pages.css"

function Index(props) {
    return (
        <div className="core">
            <h1>Results</h1>
            <br/>
            <div className="table">
                <h2>Full table</h2>
                <ResultsFullTable/>
            </div>
        </div>
    );
}

export default Index;
