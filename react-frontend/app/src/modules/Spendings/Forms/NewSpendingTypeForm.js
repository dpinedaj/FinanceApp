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
        this.props.methodSubmit("post", "http://localhost:8000/spendingsTypes/", this.state).then(
            res => alert('Submitted a New Spend Type: ' + this.state.name + "\nThe post status code: " + res.status));
        event.preventDefault();
        this.props.closeModal();
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
