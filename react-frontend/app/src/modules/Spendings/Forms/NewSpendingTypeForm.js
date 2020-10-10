import React, {Component} from 'react';

export default class NewSpendingTypeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const response = this.props.methodSubmit("post", "http://localhost:8000/spendingsTypes/", this.state);
        console.log(response)
        //alert('A Spend was submitted: ' + this.state.type + ": " + this.state.amount + "status: " + response.status);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>

        );
    }
};
