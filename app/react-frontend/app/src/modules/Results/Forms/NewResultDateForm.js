import React, { Component } from 'react'
import NewTypeForm from "../../../components/Forms/NewTypeForm";
import { DEFAULT_API_URL, RESULTS_DATE_API_URL } from "../../../constants";


export default class NewResultDateForm extends Component {

    render() {
        const path = require("path");
        const RESULTS_DATE_URL = "http://" + path.join(DEFAULT_API_URL, RESULTS_DATE_API_URL) + "/";

        const state = {
            year: '',
            month: ''
        };

        const methodArgs = {
            method: "post",
            url: RESULTS_DATE_URL
        };
        const fields = {

            Year: {
                type: "input",
                args: {
                    type: "number",
                    value: "this.state.year",
                    onChange: "this.handleChange",
                    name: "year"
                }
            },
            Month: {
                type: "input",
                args: {
                    type: "number",
                    value: "this.state.month",
                    onChange: "this.handleChange",
                    name: "month"
                }
            },

        }
        return (
            <NewTypeForm state={state} methodArgs={methodArgs} fields={fields} methodSubmit={this.props.methodSubmit} closeModal={this.props.closeModal} />
        )
    }
}