import React, {Component} from 'react'
import {DEFAULT_API_URL, INVESTMENTSTATUSTYPES_API_URL} from "../../../constants";
import NewTypeForm from "../../../components/Forms/NewTypeForm";


export default class NewInvestmentStatusTypeForm extends Component {

    render() {
        const path = require("path");
        const INVESTMENTSTATUSTYPES_URL = "http://" + path.join(DEFAULT_API_URL, INVESTMENTSTATUSTYPES_API_URL) + "/";

        const state = {
            name: ''
        };

        const methodArgs = {
            method: "post",
            url: INVESTMENTSTATUSTYPES_URL
        };
        const fields = {

            Name: {
                type: "input",
                args: {
                    type: "text",
                    value: "this.state.name",
                    onChange: "this.handleChange",
                    name: "name"
                }
            }
        }
        return (
            <NewTypeForm state={state} methodArgs={methodArgs} fields={fields} methodSubmit={this.props.methodSubmit} closeModal={this.props.closeModal}/>
        )
    }
}