import React, {Component} from 'react'
import NewItemForm from "../../../components/Forms/NewItemForm";
import {
    DEFAULT_API_URL,
    INVESTMENTS_API_URL,
    INVESTMENTTYPES_API_URL,
    INVESTMENTSTATUSTYPES_API_URL
} from "../../../constants";


export default class NewInvestmentForm extends Component {

    render() {
        const path = require("path");
        const INVESTMENT_URL = "http://" + path.join(DEFAULT_API_URL, INVESTMENTS_API_URL) + "/";
        const INVESTMENTTYPE_URL = "http://" + path.join(DEFAULT_API_URL, INVESTMENTTYPES_API_URL) + "/";
        const INVESTMENTSTATUSTYPE_URL = "http://" + path.join(DEFAULT_API_URL, INVESTMENTSTATUSTYPES_API_URL) + "/";

        const state = {
            investment_type: null,
            investment_type_name: null,
            amount: null,
            description: null,
            status: null,
            status_name: null,
            open_date: null,
            open_s_date: null,
            next_payment:null,
            next_s_payment:null,
            close_date:null,
            close_s_date:null
        };

        const select = {
            investment_type: {
                type: "investment_type",
                type_name: "investment_type_name"
            },
            status: {
                type: "status",
                type_name: "status_name"
            }
        };

        const
            methodArgs = {
                method: "post",
                url: INVESTMENT_URL
            };

        const
            fields = {
                Type: {
                    type: "dropdown",
                    args: {
                        title: "Select Investment Type",
                        url: INVESTMENTTYPE_URL,
                        name: "investment_type",
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
                },
                Status: {
                    type: "dropdown",
                    args: {
                        title: "Select Status",
                        url: INVESTMENTSTATUSTYPE_URL,
                        name: "status",
                        onSelect: "this.handleSelect"
                    }
                },
                "Open Date": {
                    type:"date",
                    args: {
                        value:"this.state.open_s_date",
                        onChange: "{date => this.handleDate('open_date', 'open_s_date', date)}",
                        name:"open_date"
                    }
        }
            }

        return (

            <NewItemForm state={state} select={select} methodArgs={methodArgs} fields={fields}
                         methodSubmit={this.props.methodSubmit} closeModal={this.props.closeModal}/>
        )
    }
}