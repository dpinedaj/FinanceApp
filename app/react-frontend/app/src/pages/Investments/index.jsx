import React from 'react';
import InvestmentsFullTable from "../../modules/Investments/InvestmentsFullTable";
import "../pages.css"
import InsertNewModal from "../../components/Buttons/InsertNewModal";
import NewInvestmentForm from "../../modules/Investments/Forms/NewInvestmentForm";
import NewInvestmentTypeForm from "../../modules/Investments/Forms/NewInvestmentTypeForm";
import NewInvestmentStatusTypeForm from "../../modules/Investments/Forms/NewInvestmentStatusTypeForm";

function Index(props) {
    return (
        <div className="core">
            <h1>Investments</h1>
            <br/>
            <div className="table">
                <h2>Full table</h2>
                <InvestmentsFullTable/>
                <InsertNewModal text={"Insert New Investment"} form={NewInvestmentForm} />
                <InsertNewModal text={"Insert New Investment Type"} form={NewInvestmentTypeForm} />
                <InsertNewModal text={"Insert New Investment Status Type"} form={NewInvestmentStatusTypeForm} />

            </div>
        </div>
    );
}

export default Index;
