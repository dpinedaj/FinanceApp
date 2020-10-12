import React from 'react';
import IncomesFullTable from "../../modules/Incomes/IncomesFullTable";
import "../pages.css"
import InsertNewModal from "../../components/Buttons/InsertNewModal";
import NewIncomesForm from "../../modules/Incomes/Form/NewIncomesForm";

function Incomes(props) {
    return (
        <div className="core">
            <h1>Incomes</h1>
            <br/>
            <div className="table">
                <h2>Full table</h2>
                <IncomesFullTable/>
                <InsertNewModal text={"New Income"} form={NewIncomesForm}/>
            </div>
        </div>
    );
}

export default Incomes;
