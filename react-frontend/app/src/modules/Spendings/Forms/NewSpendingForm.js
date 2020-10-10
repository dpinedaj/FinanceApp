import React, {Component} from 'react';
import ApiDropdown from "../../../components/Api/ApiDropdown";
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

    handleSelect(value){
        this.setState({spend_type: value});
    }
    handleSubmit(event) {
        this.props.methodSubmit("post", "http://localhost:8000/spendings/", this.state).then(
            res => alert('A Spend was submitted: ' + this.state.type + ": " + this.state.amount + "status: " + res.status));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Type:
                    <ApiDropdown url="http://localhost:8000/spendingsTypes/" name="spend_type" onSelect={this.handleSelect}/>
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
