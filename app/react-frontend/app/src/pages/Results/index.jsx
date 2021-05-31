import React from 'react';
import ResultsFullTable from "../../modules/Results/ResultsFullTable";
import "../pages.css"
import InsertNewModal from "../../components/Buttons/InsertNewModal";
import NewResultForm from "../../modules/Results/Forms/NewResultForm";
import NewResultDateForm from "../../modules/Results/Forms/NewResultDateForm";


function Index(props) {
    return (
        <div className="core">
            <h1>Results</h1>
            <br/>
            <div className="table">
                <h2>Full table</h2>
                <ResultsFullTable/>
                <InsertNewModal text={"New Result"} form={NewResultForm}/>
                <InsertNewModal text={"New Result Date"} form={NewResultDateForm}/>
            </div>
        </div>
    );
}

export default Index;
