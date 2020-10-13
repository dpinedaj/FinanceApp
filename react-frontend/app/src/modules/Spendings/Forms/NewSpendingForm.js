import React, {Component} from 'react'
import NewItemForm from "../../../components/Forms/NewItemForm";
import {DEFAULT_API_URL, SPENDINGS_API_URL, SPENDINGTYPES_API_URL} from "../../../constants";


export default class NewSpendingForm extends Component {

    render() {
        const path = require("path");
        const SPENDING_URL = "http://" + path.join(DEFAULT_API_URL, SPENDINGS_API_URL) + "/";
        const SPENDINGTYPE_URL = "http://" + path.join(DEFAULT_API_URL, SPENDINGTYPES_API_URL) + "/";

        const state = {
            spend_type: '',
            spend_type_name: '',
            amount: '',
            description: ''
        };

        const select = {
            type: "spend_type",
            type_name: "spend_type_name"
        };

        const methodArgs = {
            method: "post",
            url: SPENDING_URL
        };

        const fields = {
            Type: {
                type: "dropdown",
                args: {
                    title: "Select Spend Type",
                    url: SPENDINGTYPE_URL,
                    name: "spend_type",
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
            <NewItemForm state={state} select={select} methodArgs={methodArgs} fields={fields} methodSubmit={this.props.methodSubmit} closeModal={this.props.closeModal}/>
        )
    }
}