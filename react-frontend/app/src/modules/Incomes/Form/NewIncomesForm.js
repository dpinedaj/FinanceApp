import React, {Component} from 'react'
import NewItemForm from "../../../components/Forms/NewItemForm";
import {DEFAULT_API_URL, INCOMES_API_URL, INCOMESTYPE_API_URL} from "../../../constants";


export default class NewIncomesForm extends Component {

    render() {
        const path = require("path");
        const INCOMES_URL = "http://" + path.join(DEFAULT_API_URL, INCOMES_API_URL) + "/";
        const INCOMESTYPE_URL = "http://" + path.join(DEFAULT_API_URL, INCOMESTYPE_API_URL) + "/";

        const state = {
            income_type: '',
            income_type_name: '',
            amount: '',
            description: ''
        };
        const select = {
            type: "income_type",
            type_name: "income_type_name"
        };

        const methodArgs = {
            method: "post",
            url: INCOMES_URL
        };
        const fields = {
            type: {
                type: "dropdown",
                args: {
                    title: "Select Income Type",
                    url: INCOMESTYPE_URL,
                    name: "income_type",
                    onSelect: "this.handleSelect"
                }
            },
            Amount: {
                type: "input",
                args: {
                    type: "number",
                    value: "this.state.amount",
                    onChange: "this.handleChange",
                    name: "amount"
                }
            },
            Description: {
                type: "input",
                args: {
                    type: "text",
                    value: "this.state.description",
                    onChange: "this.handleChange",
                    name: "description"
                }
            }
        }
        return (
            <NewItemForm state={state} select={select} methodArgs={methodArgs} fields={fields}/>
        )
    }
}