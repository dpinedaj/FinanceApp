import React, {Component} from 'react'
import NewItemForm from "../../../components/Forms/NewItemForm";
import {DEFAULT_API_URL, RESULTS_API_URL, RESULTS_DATE_API_URL} from "../../../constants";


export default class NewResultForm extends Component {

    render() {
        const path = require("path");
        const RESULTS_URL = "http://" + path.join(DEFAULT_API_URL, RESULTS_API_URL) + "/";
        const RESULTSDATE_URL = "http://" + path.join(DEFAULT_API_URL, RESULTS_DATE_API_URL) + "/";

        const state = {
            date: '',
            date_year: ''
        };
        const select = {
            date: {
                type: "date",
                type_name: "date_year"
            }
        };

        const methodArgs = {
            method: "post",
            url: RESULTS_URL
        };
        const fields = {
            // TODO MODELS DON'T SUPPORT MULTIPLE DROPDOWN FOR SAME MODEL FIELD, NEED TO MAKE TWO MANY TO MANY FIELDS
            Date: {
                type: "dropdown",
                args: {
                    title: "Select Date",
                    url: RESULTSDATE_URL,
                    name: "date",
                    onSelect: "this.handleSelect"
                }
            }
            
        }
        return (
            <NewItemForm state={state} select={select} methodArgs={methodArgs} fields={fields}
                         methodSubmit={this.props.methodSubmit} closeModal={this.props.closeModal}/>
        )
    }
}