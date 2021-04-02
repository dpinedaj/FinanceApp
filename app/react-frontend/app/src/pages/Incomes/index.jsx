import React from 'react';
import IncomesFullTable from "../../modules/Incomes/IncomesFullTable";
import "../pages.css"
import InsertNewModal from "../../components/Buttons/InsertNewModal";
import NewIncomeForm from "../../modules/Incomes/Forms/NewIncomeForm";
import NewIncomeTypeForm from "../../modules/Incomes/Forms/NewIncomeTypeForm";

function Index(props) {
    return (
        <div className="core">
            <h1>Incomes</h1>
            <br/>
            <div className="table">
                <h2>Full table</h2>
                <IncomesFullTable/>
                <InsertNewModal text={"New Income"} form={NewIncomeForm}/>
                <InsertNewModal text={"New Income Type"} form={NewIncomeTypeForm}/>

            </div>
        </div>
    );
}

export default Index;
