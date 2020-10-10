import React, {Component} from 'react';
import ApiSelect from "../../../components/Api/ApiSelect";

export default class NewSpendingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spend_type: '',
            amount: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const response = this.props.methodSubmit("post", "http://localhost:8000/spendings/", this.state);
        console.log(response)
        alert('A Spend was submitted: ' + this.state.type + ": " + this.state.amount + "status: " + response.status);
        //event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Type:
                    <ApiSelect name="type" url={"http://localhost:8000/spendingsTypes/"}/>
                </label>

                <br/>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={this.state.amount}
                        onChange={this.handleChange}
                        name="amount"
                    />
                </label>
                <br/>
                <label>
                    Description:
                    <input
                        type="text"
                        value={this.state.description}
                        onChange={this.handleChange}
                        name="description"
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>

        );
    }
};
