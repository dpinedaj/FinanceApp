import React from 'react';
import SpendingsFullTable from "../../modules/Spendings/SpendingsFullTable";
import InsertNewModal from '../../components/Buttons/InsertNewModal'
import NewSpendingForm from "../../modules/Spendings/Forms/NewSpendingForm";
import NewSpendingTypeForm from "../../modules/Spendings/Forms/NewSpendingTypeForm";

import "../pages.css"

function Spendings(props) {
    return (
        <div className="core">
            <h1>Spendings</h1>
            <br/>
            <div className="table">
                <h2>Full table</h2>
                <SpendingsFullTable/>
                <InsertNewModal text={"New Spending"} form={NewSpendingForm}/>
                <InsertNewModal text={"New Spending Type"} form={NewSpendingTypeForm}/>
            </div>
        </div>
    );
}

export default Spendings;
